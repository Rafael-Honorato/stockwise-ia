import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Store } from '../../../shared/interfaces/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  http = inject(HttpClient);
  private apiUrl = environment.baseURL + '/stores';

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.apiUrl);
  }

  getStoreById(id: string): Observable<Store> {
    return this.http.get<Store>(`${this.apiUrl}/${id}`);
  }

  // Adicionei os tipos de retorno para manter a consistência
  patchStore(id: string, data: Partial<Store>): Observable<Store> {
    return this.http.patch<Store>(`${this.apiUrl}/${id}`, data);
  }

  deleteStore(id: string): Observable<void> {
    // O delete geralmente retorna um corpo vazio
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createStore(data: Store): Observable<Store> {
    return this.http.post<Store>(this.apiUrl, data);
  }
}
