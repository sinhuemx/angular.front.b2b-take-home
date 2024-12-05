import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Credentials } from '../../domain/entities/credentials';
import { LoginRepository } from '../../domain/repositories/login.repository';

@Injectable({
  providedIn: 'root',
})
export class LocalLogin implements LoginRepository {
  readonly #token = 'Cyph3Rt0k3n';

  // Agregue estas Credenciales para una simulación estricta
  readonly #mockCredentials = {
    username: 'mysuper4dmin',
    password: 'Carlos123x!'
  };

  authenticate(credentials: Credentials): Observable<string | never> {
    console.log('Attempting login with:', credentials);

    if (
      credentials.username.toLowerCase() === this.#mockCredentials.username.toLowerCase() &&
      credentials.password === this.#mockCredentials.password
    ) {
      console.log('Login successful');
      return of(this.#token);
    }

    console.log('Login failed');
    return throwError(
      () =>
        new HttpErrorResponse({
          status: 401,
          statusText: 'Unauthorized',
          error: 'Usuario o contraseña incorrectos'
        })
    );
  }
}
