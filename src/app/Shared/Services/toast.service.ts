import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }

  showSuccess(message: string, title = 'Correcto'): void {
    this.messageService.add({ severity: 'success', summary: title, detail: message });
  }

  showInfo(message: string, title = 'Info'): void {
    this.messageService.add({ severity: 'info', summary: title, detail: message });
  }

  showWarn(message: string, title = 'Advertencia'): void {
    this.messageService.add({ severity: 'warn', summary: title, detail: message });
  }

  showError(message: string, title = 'Error'): void {
    this.messageService.add({ severity: 'error', summary: title, detail: message });
  }

  showContrast(message: string, title = 'Info'): void {
    this.messageService.add({ severity: 'contrast', summary: title, detail: message });
  }

  showSecondary(message: string, title = 'Info'): void {
    this.messageService.add({ severity: 'secondary', summary: title, detail: message });
  }
}
