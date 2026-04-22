import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutService } from '../../services/layout.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, NavbarComponent, ToastModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  layoutService = inject(LayoutService);
}
