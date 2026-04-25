import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-basic-card',
  imports: [CommonModule, CardComponent],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss',
})
export class BasicCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() quantity!: string;
  @Input() description!: string;
  @Input() color: string | null = null;
  @Input() extra: string | number | null = null;
}
