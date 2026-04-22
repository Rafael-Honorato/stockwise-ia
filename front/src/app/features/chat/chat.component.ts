import { Component, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  layoutService = inject(LayoutService);

  ngOnInit() {
    this.layoutService.setHeader(
      'Chat IA',
      'Aqui está o seu chat com inteligência artificial',
    );
  }
}
