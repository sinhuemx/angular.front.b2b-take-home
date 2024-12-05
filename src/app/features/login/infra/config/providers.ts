import { Provider } from '@angular/core';
import { LoginUseCase } from '../../application/login.usecase';
import { LoginRepository } from '../../domain/repositories/login.repository';
import { LocalLogin } from '../repositories/local-login';

export function provideLogin(): Provider[] {
  return [
    {
      provide: LoginRepository,
      useClass: LocalLogin,
    },
    LoginUseCase,
  ];
}
