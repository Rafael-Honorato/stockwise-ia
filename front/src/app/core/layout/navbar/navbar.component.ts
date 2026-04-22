import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isCollapsed = false;
  private authservice = inject(AuthService);
  private router = inject(Router);

  menuItems = [
    { icon: 'pi pi-home', label: 'Início', route: '/', exact: true },
    { icon: 'pi pi-box', label: 'Estoque', route: '/stock' },
    { icon: 'pi pi-chart-line', label: 'Relatórios', route: '/reports' },
    { icon: 'pi pi-users', label: 'Usuários', route: '/users' },
    { icon: 'pi pi-shop', label: 'Lojas', route: '/stores' },
    { icon: 'pi pi-comment', label: 'Chat', route: '/chat' },
    { icon: 'pi pi-cog', label: 'Configurações', route: '/config' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  onLoggout() {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
}
