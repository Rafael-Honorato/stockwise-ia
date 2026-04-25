import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { StockCardComponent } from './cards/stock-card/stock-card.component';
import { DashboardService } from './services/dashboard.service';
import { BasicCardComponent } from './cards/basic-card/basic-card.component';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, CommonModule, StockCardComponent, BasicCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  layoutService = inject(LayoutService);
  dashboardService = inject(DashboardService);

  metrics = toSignal(this.dashboardService.getDashboardMetrics(), {
    initialValue: {
      stock: { totalCostPrice: 0, totalSalesPrice: 0, quantity: 0 },
      sales: { value: 0, quantity: 0 },
      estimatedProfit: 0,
      coveragePercentage: 0,
      statusColor: 'text-slate-50',
    },
  });

  averageTicked = toSignal(this.dashboardService.getAverageTicket(), {
    initialValue: {
      average: 0,
      quantity: 0,
    },
  });

  ngOnInit() {
    this.layoutService.setHeader(
      'Dashboard',
      'Aqui está o resumo do seu estoque',
    );
  }
}
