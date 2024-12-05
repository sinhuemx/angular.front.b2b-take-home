import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ROUTE_CONFIG } from '../../../core/infra/config/routes.config';
import { Credentials } from '../domain/entities/credentials';
import { LoginRepository } from '../domain/repositories/login.repository';

@Injectable({
  providedIn: 'root',
})
export class LoginUseCase {
  readonly #router = inject(Router);
  readonly #repository = inject(LoginRepository);

  // Regex para validar email o username
  readonly #emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  readonly #usernameRegex = /^[a-zA-Z0-9_@]+$/;

  execute(credentials: Credentials): Observable<string> {
    try {
      if (!credentials.username) {
        throw new Error('El correo electrónico o usuario es requerido');
      }

      // Validar que sea email o username válido
      if (!this.#emailRegex.test(credentials.username) &&
          !this.#usernameRegex.test(credentials.username)) {
        throw new Error('Formato de usuario no válido');
      }

      // Validación de la contraseña
      if (!credentials.password) {
        throw new Error('La contraseña es requerida');
      }

      if (credentials.password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres');
      }

      return this.#repository.authenticate(credentials).pipe(
        tap((token) => {
          localStorage.setItem('auth_token', token);
          this.#router.navigate([ROUTE_CONFIG.app, ROUTE_CONFIG.home]);
        }),
        catchError((error) => {
          let errorMessage = 'Error al iniciar sesión';

          if (error.status === 401) {
            errorMessage = 'Usuario o contraseña incorrectos';
          } else if (error.status === 400) {
            errorMessage = 'Datos de inicio de sesión incorrectos';
          }

          return throwError(() => new Error(errorMessage));
        }),
        take(1)
      );
    } catch (error) {
      return throwError(() => error);
    }
  }
}
