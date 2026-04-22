import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-stock',
  imports: [],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss',
})
export class StockComponent {
  layoutService = inject(LayoutService);

  ngOnInit() {
    this.layoutService.setHeader('Estoque', 'Seus estoques estão aqui');
  }
}
