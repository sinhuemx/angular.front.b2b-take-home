import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { Order, OperationsService } from 'src/app/features/services/operations.service';


interface PaginationInfo {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface SortColumn {
  key: keyof Order;
  direction: 'asc' | 'desc' | '';
}

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './historial.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .status-approved {
      background-color: rgb(34 197 94) !important;
      color: white !important;
      padding: 4px 8px;
      border-radius: 9999px;
      font-size: 0.75rem;
      line-height: 1.25rem;
      font-weight: 600;
      display: inline-flex;
    }
    .pagination-button {
      padding: 0.5rem 1rem;
      border: 1px solid #e5e7eb;
      background-color: white;
      color: #374151;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      border-radius: 0.375rem;
      cursor: pointer;
      transition: all 150ms ease-in-out;
    }
    .pagination-button:hover:not(:disabled) {
      background-color: #f3f4f6;
    }
    .pagination-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .pagination-button.active {
      background-color: #2563eb;
      color: white;
      border-color: #2563eb;
    }
    .sort-header {
      cursor: pointer;
      user-select: none;
    }
    .sort-header:hover {
      background-color: rgb(243 244 246);
    }
  `]
})
export class HistorialComponent implements OnInit {
  Math = Math;
  operationsHistory: Order[] = [];
  displayedOperations: Order[] = [];
  filterForm: FormGroup;
  sortColumn: SortColumn = { key: 'loanId', direction: '' };

  pagination: PaginationInfo = {
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    totalPages: 0
  };

  constructor(
    public operationsService: OperationsService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.operationsService.loadInitialData();

    this.operationsService.getOrders().subscribe({
      next: (operations) => {
        this.operationsHistory = operations;
        this.applySort();
        this.updatePagination();
      },
      error: (error) => {
        console.error('Error loading operations:', error);
        this.operationsHistory = [];
        this.displayedOperations = [];
      }
    });

    this.filterForm.valueChanges.subscribe(values => {
      const { startDate, endDate } = values;
      this.operationsService.setDateRange(
        startDate ? new Date(startDate) : null,
        endDate ? new Date(endDate) : null
      );
      this.pagination.currentPage = 1;
    });
  }

  sort(key: keyof Order): void {
    if (this.sortColumn.key === key) {
      this.sortColumn.direction = this.sortColumn.direction === 'asc' ? 'desc' :
                                 this.sortColumn.direction === 'desc' ? '' : 'asc';
    } else {
      this.sortColumn = { key, direction: 'asc' };
    }
    this.applySort();
    this.updatePagination();
  }

  getSortIcon(key: keyof Order): string {
    if (this.sortColumn.key !== key) return '↕️';
    if (this.sortColumn.direction === 'asc') return '↑';
    if (this.sortColumn.direction === 'desc') return '↓';
    return '↕️';
  }

  private applySort(): void {
    if (this.sortColumn.direction) {
      this.operationsHistory.sort((a, b) => {
        const aValue = a[this.sortColumn.key];
        const bValue = b[this.sortColumn.key];
        const modifier = this.sortColumn.direction === 'asc' ? 1 : -1;

        if (typeof aValue === 'string') {
          return aValue.localeCompare(String(bValue)) * modifier;
        }

        return ((aValue < bValue ? -1 : 1) * modifier);
      });
    }
  }

  // ... resto de los métodos ya existentes ...

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date);
  }

  formatDateShort(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  getDefaultStartDate(): string {
    const date = new Date();
    date.setDate(1);
    return date.toISOString().split('T')[0];
  }

  getDefaultEndDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  private updatePagination(): void {
    this.pagination.totalItems = this.operationsHistory.length;
    this.pagination.totalPages = Math.ceil(this.pagination.totalItems / this.pagination.pageSize);

    const startIndex = (this.pagination.currentPage - 1) * this.pagination.pageSize;
    const endIndex = Math.min(startIndex + this.pagination.pageSize, this.pagination.totalItems);
    this.displayedOperations = this.operationsHistory.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages) {
      this.pagination.currentPage = page;
      this.updatePagination();
    }
  }

  getPageNumbers(): number[] {
    const totalPages = this.pagination.totalPages;
    const currentPage = this.pagination.currentPage;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (currentPage >= totalPages - 2) {
      return Array.from({ length: 5 }, (_, i) => totalPages - 4 + i);
    }

    return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  }
}
