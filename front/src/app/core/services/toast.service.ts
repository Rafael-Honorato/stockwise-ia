import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  messageService = inject(MessageService);

  success(detail: string, summary: string = 'Sucesso') {
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
      life: 3000,
      icon: 'pi pi-check',
    });
  }

  error(detail: string, summary: string = 'Erro') {
    this.messageService.add({
      severity: 'error',
      summary,
      detail,
      life: 5000,
      icon: 'pi pi-warn',
    });
  }

  info(detail: string, summary: string = 'Informação') {
    this.messageService.add({
      severity: 'info',
      summary,
      detail,
      life: 3000,
    });
  }

  warn(detail: string, summary: string = 'Atenção') {
    this.messageService.add({
      severity: 'warn',
      summary,
      detail,
      life: 4000,
    });
  }
}
