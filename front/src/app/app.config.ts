import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { definePreset } from '@primeuix/themes';
import { MessageService } from 'primeng/api';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// 1. Crie o seu preset baseado no Aura (ou Lara/Nora)
const MyStockwisePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#ecfdff',
      100: '#cffaff',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#00b8db', // <-- Sua cor original aqui
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
  },
});

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyStockwisePreset,
      },
    }),
    MessageService,
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
