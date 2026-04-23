import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from './stat-card/stat-card.component';
import { DashboardService } from './services/dashboard.service';
import { Stock } from '../../core/interfaces/stock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, CommonModule, StatCardComponent],
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
  ngOnInit() {
    this.layoutService.setHeader(
      'Dashboard',
      'Aqui está o resumo do seu estoque',
    );

    this.stock$ = this.dashboardService.getTotalValueStock();
  }
}
