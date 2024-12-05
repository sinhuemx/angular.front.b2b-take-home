import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

import { ROUTE_CONFIG } from '../../core/infra/config/routes.config';
import { AplazoLogoComponent } from 'projects/shared-ui/logo/src';
import { AplazoSidenavLinkComponent } from 'projects/shared-ui/sidenav/src';
import { AplazoDashboardHeaderComponent } from 'projects/shared-ui/dashboard/src';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AplazoLogoComponent,
    AplazoSidenavLinkComponent,
    AplazoDashboardHeaderComponent
  ],
  templateUrl: './layout.component.html',
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class LayoutComponent {
  private router = inject(Router);
  pageTitle: string = 'Layout Principal';

  // Rutas accesibles desde el template
  appRoutes = ROUTE_CONFIG;

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
    this.updateTitle();
  }

  private updateTitle(): void {
    const currentUrl = this.router.url;

    switch (true) {
      case currentUrl.includes('/inicio'):
        this.pageTitle = 'Layout Principal';
        break;
      case currentUrl.includes('/historial'):
        this.pageTitle = 'Historial';
        break;
      default:
        this.pageTitle = 'Layout Principal';
    }
  }

  navigateToHome(): void {
    this.router.navigate([ROUTE_CONFIG.app, ROUTE_CONFIG.home]);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate([ROUTE_CONFIG.login]);
  }
}
