import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AplazoButtonComponent } from '@aplazo/shared-ui/button';
import { AplazoLogoComponent } from '@aplazo/shared-ui/logo';
import { LoginUseCase } from '../../../application/login.usecase';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, AplazoButtonComponent, AplazoLogoComponent],
})
export class LoginComponent {
  readonly loginUseCase = inject(LoginUseCase);

  readonly username = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  readonly password = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  readonly form = new FormGroup({
    username: this.username,
    password: this.password,
  });

  login(): void {
    this.loginUseCase
      .execute({
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe();
  }
}
