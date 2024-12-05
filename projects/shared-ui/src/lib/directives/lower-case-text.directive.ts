/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: 'input[aplazoLowercase]',
  host: {
    '(input)': 'sanitizeValue($event)',
  },
})
export class AplazoLowercaseDirective {
  readonly #elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly #ngControl = inject(NgControl, {
    self: true,
    optional: true,
  });

  sanitizeValue(event: InputEvent): void {
    const input = this.#elementRef.nativeElement;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    // Convertir a minúsculas
    const newValue = input.value.toLowerCase();

    // Solo actualizar si el valor ha cambiado
    if (newValue !== input.value) {
      // Actualizar valor en el input
      input.value = newValue;

      // Restaurar posición del cursor
      input.setSelectionRange(start, end);

      // Propagar el cambio al control del formulario
      if (this.#ngControl?.control) {
        this.#ngControl.control.setValue(newValue, {
          emitEvent: false,
          emitModelToViewChange: false,
        });

        // Disparar evento de input para asegurar la sincronización
        input.dispatchEvent(new Event('input'));
      }
    }
  }
}
