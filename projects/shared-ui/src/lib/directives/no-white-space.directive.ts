/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: 'input[aplazoNoWhiteSpace]',
  host: {
    '(input)': 'sanitizeValue()',
  },
})
export class AplazoNoWhiteSpaceDirective {
  readonly #elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly #ngControl = inject(NgControl, {
    self: true,
    optional: true,
  });

  sanitizeValue(): void {
    const input = this.#elementRef.nativeElement;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    // Remover espacios en blanco
    const newValue = input.value.replace(/\s/g, '');

    // Solo actualizar si el valor ha cambiado
    if (newValue !== input.value) {
      // Actualizar valor en el input
      input.value = newValue;

      // Restaurar posición del cursor, ajustando por los espacios removidos
      const offset = input.value.length - newValue.length;
      input.setSelectionRange(
        Math.max(0, start! - offset),
        Math.max(0, end! - offset)
      );

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
