import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './cards/stock-card/stock-card.component';
import { DashboardService } from './services/dashboard.service';
import { Observable } from 'rxjs';
import { SalesCardComponent } from './cards/sales-card/sales-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, CommonModule, StockCardComponent, SalesCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  layoutService = inject(LayoutService);
  dashboardService = inject(DashboardService);
  stock$!: Observable<{
    totalCostPrice: number;
    totalSalesPrice: number;
    quantity: number;
  }>;
  totalSales$!: Observable<{ value: number; quantity: number }>;
  ngOnInit() {
    this.layoutService.setHeader(
      'Dashboard',
      'Aqui está o resumo do seu estoque',
    );

    this.stock$ = this.dashboardService.getTotalValueStock();
    this.totalSales$ = this.dashboardService.getTotalSales();
  }
}
