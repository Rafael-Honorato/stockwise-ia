import { computed, inject, Injectable, signal } from '@angular/core';
import { STORAGE_KEYS } from '../contants/enum';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { catchError, map, switchMap, tap, throwError } from 'rxjs';

interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private _isLoggedIn = signal<boolean>(this.checkSession());
  readonly isLoggedIn = computed(() => this._isLoggedIn());

  private checkSession(): boolean {
    return !!localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  login(credentials: { email: string; password: string }) {
    const loginUrl = 'https://api.escuelajs.co/api/v1/auth/login';
    return this.http.post<AuthResponse>(loginUrl, credentials).pipe(
      map((authData) => {
        // 1. Validação: Se falhar, lançamos um erro comum.
        // O RxJS automaticamente captura esse 'throw' e envia para o catchError.
        if (!authData?.access_token || !authData?.refresh_token) {
          throw new Error('Resposta da validação inválida');
        }

        // 2. Efeito colateral: Persistir os dados
        this.persistSession(authData);

        // 3. Retorno: Sempre retornamos o dado para o próximo operador
        return authData;
      }),
      catchError((error) => {
        console.error('Erro no login:', error);
        return throwError(() => error);
      }),
    );
  }

  logout(): void {
    this.removeSession();
    this._isLoggedIn.set(false);
  }

  refresToken() {
    const refresToken = this.getAccessToken();
    const urlRefreshToken =
      'https://api.escuelajs.co/api/v1/auth/refresh-token';
    return this.http
      .post<AuthResponse>(urlRefreshToken, { refresToken })
      .pipe(tap((auth) => this.persistSession(auth)));
  }

  getAccessToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  }

  private persistSession(auth: AuthResponse): void {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, auth.access_token);
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, auth.refresh_token);
    this._isLoggedIn.set(true);
  }

  removeSession() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
  }
}
