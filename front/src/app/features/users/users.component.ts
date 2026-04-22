import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  layoutService = inject(LayoutService);

  ngOnInit() {
    this.layoutService.setHeader('Usuários', 'Aqui estão seus usuários');
  }
}
