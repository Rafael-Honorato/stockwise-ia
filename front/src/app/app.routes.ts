import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';
import { publicGuard } from './core/guard/public.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [publicGuard],
    title: 'Login - STOCKWISE',
    loadComponent: () =>
      import('./features/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layout/shell/shell.component').then(
        (m) => m.ShellComponent,
      ),
    children: [
      {
        path: '',
        title: 'Dashboard - STOCKWISE',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'stock',
        title: 'Estoque - STOCKWISE',
        loadComponent: () =>
          import('./features/stock/stock.component').then(
            (m) => m.StockComponent,
          ),
      },
      {
        path: 'reports',
        title: 'Relatórios - STOCKWISE',
        loadComponent: () =>
          import('./features/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
      },
      {
        path: 'users',
        title: 'Usuários - STOCKWISE',
        loadComponent: () =>
          import('./features/users/users.component').then(
            (m) => m.UsersComponent,
          ),
      },
      {
        path: 'stores',
        title: 'Lojas - STOCKWISE',
        loadComponent: () =>
          import('./features/stores/stores.component').then(
            (m) => m.StoresComponent,
          ),
      },
      {
        path: 'stores/create',
        title: 'Create - STOCKWISE',
        loadComponent: () =>
          import('./features/stores/create/create.component').then(
            (m) => m.CreateComponent,
          ),
      },
      {
        path: 'stores/edit/:id',
        title: 'Editar Loja - STOCKWISE',
        loadComponent: () =>
          import('./features/stores/edit/edit.component').then(
            (m) => m.EditComponent,
          ),
      },
      {
        path: 'chat',
        title: 'Chat IA - STOCKWISE',
        loadComponent: () =>
          import('./features/chat/chat.component').then((m) => m.ChatComponent),
      },
      {
        path: 'config',
        title: 'Configurações - STOCKWISE',
        loadComponent: () =>
          import('./features/config/config.component').then(
            (m) => m.ConfigComponent,
          ),
      },
    ],
  },
  {
    path: 'dashboard',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];
