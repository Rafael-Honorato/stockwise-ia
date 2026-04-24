import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { Stock } from '../../../core/interfaces/stock';
import { Sales } from '../../../core/interfaces/sales';

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
}
