import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StoresService } from '../services/stores.service';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  storeService = inject(StoresService);
  layoutService = inject(LayoutService);
  createForm!: FormGroup;

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl(''),
      contact: new FormControl(''),
    });

    this.layoutService.setHeader(
      'Nova loja',
      'Adicione uma nova loja aos registros',
    );
  }

  salvar() {
    const data = this.createForm.value;
    this.storeService.createStore(data);
  }
}
