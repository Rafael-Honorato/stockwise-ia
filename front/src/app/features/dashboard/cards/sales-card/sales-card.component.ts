import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-sales-card',
  imports: [CommonModule, CardComponent],
  templateUrl: './sales-card.component.html',
  styleUrl: './sales-card.component.scss',
})
export class SalesCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() quantity!: string;
  @Input() description!: string;

  // TODO: Adicionar lógica para pegar valores por periodo (hoje, semana, mês, ano)
}
