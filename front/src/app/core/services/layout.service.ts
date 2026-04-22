import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  title = signal('Título Padrão');
  subtitle = signal('Subtitulo Padrão');

  setHeader(t: string, s?: string) {
    this.title.set(t);
    this.subtitle.set(s ?? '');
  }
}
