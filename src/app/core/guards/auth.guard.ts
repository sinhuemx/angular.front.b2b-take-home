// src/app/core/guards/auth.guard.ts
import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { ROUTE_CONFIG } from '../infra/config/routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('auth_token');

  if (!token) {
    router.navigate([ROUTE_CONFIG.login]);
    return false;
  }

  return true;
};

export const publicGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('auth_token');

  if (token) {
    router.navigate([ROUTE_CONFIG.app, ROUTE_CONFIG.home]);
    return false;
  }

  return true;
};
