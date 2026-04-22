import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { StoresService } from '../services/stores.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../../core/services/layout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-edit',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  storeService = inject(StoresService);
  layoutStore = inject(LayoutService);
  toatService = inject(ToastService);
  editForm!: FormGroup;
  nomeLoja = signal('');
  loading = signal(false);
  visible = signal(false);

  // PRECISA DE MASCARA
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.editForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      contact: new FormControl(''),
    });

    this.layoutStore.setHeader('Editar Loja', 'Altere os dados da loja atual');

    if (id) {
      this.getLojaById(id);
    }

    this.editForm
      .get('name')
      ?.valueChanges.subscribe((val) => this.nomeLoja.set(val));
  }

  edit() {
    this.loading.set(true);
    const data = this.editForm.value;
    const id = this.editForm.get('id')?.value;

    this.storeService.patchStore(id, data).subscribe({
      next: (e) => {
        this.editForm.patchValue(e);
        this.nomeLoja.set(e.name);
        this.loading.set(false);
        this.toatService.success('Loja editada com sucesso!');
        this.router.navigate(['/stores']);
      },
      error: (e) => {
        console.log(e);
        this.loading.set(false);
      },
    });
  }

  getLojaById(id: string) {
    this.storeService.getStoreById(id).subscribe({
      next: (loja) => {
        this.editForm.patchValue(loja);
        this.nomeLoja.set(loja.name);
      },
      error: (er) => console.log(er),
    });
  }

  cancel() {
    this.router.navigate(['/stores']);
  }

  showDialog() {
    this.visible.set(true);
  }
}
