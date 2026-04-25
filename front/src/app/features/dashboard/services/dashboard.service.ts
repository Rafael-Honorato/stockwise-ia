import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { forkJoin, map, Observable } from 'rxjs';
import { Stock } from '../../../core/interfaces/stock';
import { Sales } from '../../../core/interfaces/sales';
import { DashboardMetrics } from '../../../core/interfaces/dashboardMetrics';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  http = inject(HttpClient);
  private stock: Stock[] = [];

  private getStock(): Observable<Stock[]> {
    return this.http.get<Stock[]>(environment.baseURL + '/stock');
  }

  getTotalValueStock(): Observable<{
    totalCostPrice: number;
    totalSalesPrice: number;
    quantity: number;
  }> {
    return this.getStock().pipe(
      map((stock) => {
        return stock.reduce(
          (acc, atual) => {
            acc.totalCostPrice += atual.costPrice * atual.quantity;
            acc.totalSalesPrice += atual.salePrice * atual.quantity;
            acc.quantity += atual.quantity;
            return acc;
          },
          { totalCostPrice: 0, totalSalesPrice: 0, quantity: 0 },
        );
      }),
    );
  }

  getSales(): Observable<Sales[]> {
    return this.http.get<Sales[]>(environment.baseURL + '/sales');
  }

  getTotalSales(): Observable<{ value: number; quantity: number }> {
    return this.getSales().pipe(
      map((sales) => {
        return {
          value: sales.reduce((acc, atual) => acc + atual.totalPrice, 0),
          quantity: sales.reduce((acc, atual) => acc + atual.quantity, 0),
        };
      }),
    );
  }

  getDashboardMetrics(): Observable<DashboardMetrics> {
    return forkJoin({
      stock: this.getTotalValueStock(),
      sales: this.getTotalSales(),
    }).pipe(
      map(({ stock, sales }) => {
        const estimatedProfit = stock.totalSalesPrice - stock.totalCostPrice;
        const coveragePercentage =
          stock.totalCostPrice > 0
            ? (sales.value / stock.totalCostPrice) * 100
            : 0;

        return {
          stock,
          sales,
          estimatedProfit,
          coveragePercentage,
          statusColor: this.calculateStatusColor(coveragePercentage),
        };
      }),
    );
  }

  getAverageTicket(): Observable<{ average: number; quantity: number }> {
    return this.getSales().pipe(
      map((sales) => {
        if (sales.length === 0) return { average: 0, quantity: 0 };

        const totalValue = sales.reduce(
          (acc, sale) => acc + sale.totalPrice,
          0,
        );
        const totalTransactions = sales.length;

        return {
          average: Number((totalValue / totalTransactions).toFixed(2)),
          quantity: totalTransactions,
        };
      }),
    );
  }

  private calculateStatusColor(percentage: number): string {
    if (percentage < 25) return 'text-red-500';
    if (percentage < 75) return 'text-orange-500';
    if (percentage < 100) return 'text-yellow-400';
    if (percentage < 150) return 'text-emerald-400';
    return 'text-cyan-400';
  }
}
