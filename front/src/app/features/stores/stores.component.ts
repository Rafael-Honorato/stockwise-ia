import { Component, inject, OnInit, signal } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StoresService } from './services/stores.service';
import { Store } from './../../shared//interfaces/store';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PhonePipe } from '../../shared/pipes/phone.pipe';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-stores',
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    CommonModule,
    PhonePipe,
  ],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent implements OnInit {
  laysoutService = inject(LayoutService);
  storeService = inject(StoresService);
  router = inject(Router);
  stores: Store[] = [];
  visible = signal(false);
  toastService = inject(ToastService);

  lojaForm: FormGroup;
  constructor() {
    this.lojaForm = new FormGroup({
      nome: new FormControl(''),
      endereco: new FormControl(''),
      telefone: new FormControl(''),
    });
  }

  ngOnInit() {
    this.laysoutService.setHeader('Lojas', 'Gerencie as lojas da sua rede.');
    this.getStores();
  }

  getStores() {
    this.storeService.getStores().subscribe({
      next: (st) => (this.stores = st),
      error: (e) => console.log(e),
    });
  }

  salvar() {
    const novaLoja: Store = this.lojaForm.value;
    this.storeService.createStore(novaLoja);
  }

  edit(id: string) {
    this.router.navigate(['/stores/edit', id]);
  }

  showDialog() {
    this.visible.set(true);
  }

  delete(id: string) {
    this.storeService.deleteStore(id).subscribe({
      next: () => {
        this.getStores();
        this.toastService.success('Registro deletado com sucesso!');
      },
      error: (e) => console.log(e),
    });
  }

  create() {
    this.router.navigate(['/stores/create']);
  }
}
