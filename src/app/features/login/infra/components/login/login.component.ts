import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { LoginUseCase } from '../../../application/login.usecase';
import {
  AplazoNoWhiteSpaceDirective,
  AplazoLowercaseDirective
} from '@apz/shared-ui';
import { AplazoButtonComponent } from 'projects/shared-ui/button/src';
import { AplazoLogoComponent } from 'projects/shared-ui/logo/src';
import { provideLogin } from '../../config/providers';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AplazoButtonComponent,
    AplazoLogoComponent,
    AplazoNoWhiteSpaceDirective,
    AplazoLowercaseDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideLogin()]
})
export class LoginComponent {
  readonly loginUseCase = inject(LoginUseCase);
  showPassword = false;
  backendError: string | null = null;

  // Validador personalizado que acepta email o nombre de usuario
  private userNameOrEmailValidator(): ValidatorFn {
    return (control): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null; // El requerido lo maneja otro validador
      }

      // Regex para email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Regex para nombre de usuario (letras, números y algunos caracteres especiales)
      const usernameRegex = /^[a-zA-Z0-9_@]+$/;

      if (emailRegex.test(value) || usernameRegex.test(value)) {
        return null;
      }

      return { invalidFormat: true };
    };
  }

  readonly username = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
      this.userNameOrEmailValidator()
    ],
  });

  readonly password = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(6)
    ],
  });

  readonly form = new FormGroup({
    username: this.username,
    password: this.password,
  });

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    if (this.form.valid) {
      this.backendError = null;
      this.loginUseCase
        .execute({
          username: this.username.value.toLowerCase(),
          password: this.password.value,
        })
        .subscribe({
          error: (error) => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 401) {
                this.backendError = 'Usuario o contraseña incorrectos';
              } else {
                this.backendError = 'Error al iniciar sesión. Intente nuevamente.';
              }
            } else {
              this.backendError = error.message;
            }
            console.error('Login error:', error);
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
