import { Component, inject, OnInit } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  layoutService = inject(LayoutService);
  http = inject(HttpClient);
  users: any[] = [];

  ngOnInit() {
    this.layoutService.setHeader(
      'Dashboard',
      'Aqui está o resumo do seu estoque',
    );
  }
}
