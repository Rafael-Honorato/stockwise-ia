import { Component, Input, input } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-card',
  imports: [CardComponent, CommonModule],
  templateUrl: './stock-card.component.html',
  styleUrl: './stock-card.component.scss',
})
export class StockCardComponent {
  @Input() title!: string;
  @Input() costPrice!: string;
  @Input() salesPrice!: string;
  @Input() description!: string;
  @Input() quantity!: string;
}
