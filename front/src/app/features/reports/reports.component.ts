import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  layoutService = inject(LayoutService);

  ngOnInit() {
    this.layoutService.setHeader('Relatórios', 'Seus relatótios estão aqui');
  }
}
