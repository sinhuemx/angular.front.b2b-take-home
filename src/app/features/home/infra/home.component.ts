import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OperationsService, Order } from '../../services/operations.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  isFiltersVisible = false;
  totalSales = 0;
  totalOrders = 0;
  averageTicket = 0;

  availableBranches: number[] = [];
  selectedBranches = new Set<number>();
  startDateControl = new FormControl('');
  endDateControl = new FormControl('');

  private subscriptions = new Subscription();

  constructor(private operationsService: OperationsService) {}

  ngOnInit() {
    // Cargar datos iniciales
    this.operationsService.loadInitialData();

    // Suscribirse a las sucursales disponibles
    this.subscriptions.add(
      this.operationsService.getAvailableBranches().subscribe(branches => {
        console.log('Available branches:', branches);
        this.availableBranches = branches;
        // Seleccionar todas las sucursales inicialmente
        this.selectedBranches = new Set(branches);
        this.operationsService.setSelectedBranches(this.selectedBranches);
      })
    );

    // Suscribirse a los cambios en los filtros
    this.setupFilterObservers();

    // Suscribirse a los pedidos filtrados
    this.subscriptions.add(
      this.operationsService.getFilteredOrders().subscribe(orders => {
        console.log('Filtered orders:', orders);
        const stats = this.operationsService.calculateStats(orders);
        this.totalOrders = stats.totalOrders;
        this.totalSales = stats.totalSales;
        this.averageTicket = stats.averageTicket;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private setupFilterObservers(): void {
    // Observar cambios en la fecha de inicio
    this.subscriptions.add(
      this.startDateControl.valueChanges.subscribe(date => {
        console.log('Start date changed:', date);
        this.updateDateFilters();
      })
    );

    // Observar cambios en la fecha fin
    this.subscriptions.add(
      this.endDateControl.valueChanges.subscribe(date => {
        console.log('End date changed:', date);
        this.updateDateFilters();
      })
    );
  }

  private updateDateFilters(): void {
    const startDate = this.startDateControl.value ? new Date(this.startDateControl.value) : null;
    const endDate = this.endDateControl.value ? new Date(this.endDateControl.value) : null;
    this.operationsService.setDateRange(startDate, endDate);
  }

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }

  hasActiveFilters(): boolean {
    const hasDateFilters = !!this.startDateControl.value || !!this.endDateControl.value;
    const allBranchesSelected = this.selectedBranches.size === this.availableBranches.length;
    const hasBranchFilters = !allBranchesSelected;
    return hasDateFilters || hasBranchFilters;
  }

  toggleBranch(branchId: number): void {
    console.log('Toggling branch:', branchId);
    if (this.selectedBranches.has(branchId)) {
      this.selectedBranches.delete(branchId);
    } else {
      this.selectedBranches.add(branchId);
    }
    console.log('Selected branches after toggle:', Array.from(this.selectedBranches));
    this.operationsService.setSelectedBranches(this.selectedBranches);
  }

  resetFilters(): void {
    console.log('Resetting filters');
    // Limpiar fechas
    this.startDateControl.setValue('');
    this.endDateControl.setValue('');

    // Seleccionar todas las sucursales
    this.selectedBranches = new Set(this.availableBranches);

    // Resetear filtros en el servicio
    this.operationsService.resetFilters();
  }

  getBranchButtonClass(branchId: number): string {
    return this.selectedBranches.has(branchId)
      ? 'px-4 py-2 rounded-full text-sm font-medium bg-[#2D2D2D] text-white'
      : 'px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200';
  }
}
