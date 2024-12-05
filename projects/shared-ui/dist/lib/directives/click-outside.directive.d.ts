import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 *
 * idea from
 * https://plainenglish.io/blog/creating-an-angular-directive-to-detect-clicking-outside-an-object-afd6c07212ef
 */
export declare class AplazoClickOutsideDirective {
    #private;
    clickOutside: EventEmitter<MouseEvent>;
    __onClick(event: MouseEvent, targetElement: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoClickOutsideDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AplazoClickOutsideDirective, "[aplzClickOutside]", ["clickOutside"], {}, { "clickOutside": "clickOutside"; }, never, never, true, never>;
}
