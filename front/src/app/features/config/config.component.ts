import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-config',
  imports: [],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent {
  layoutService = inject(LayoutService);

  ngOnInit() {
    this.layoutService.setHeader(
      'Configurações',
      'Aqui estão suas configurações',
    );
  }
}
