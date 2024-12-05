import { NgClass } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostBinding, Input } from '@angular/core';
import * as i1 from '@apz/shared-ui';
import { AplazoElementAppearanceDirective, AplazoElementColorDirective, AplazoElementDisabledDirective, AplazoElementPreventClickDirective, AplazoCommonSizeDirective } from '@apz/shared-ui';

class AplazoButtonComponent {
    #buttonClassnames = {
        base: 'aplazo-base-button',
        fullWidth: '',
        rounded: '',
    };
    set class(value) {
        if (value == null || value === '') {
            this.#class = null;
            return;
        }
        this.#class = value;
    }
    get class() {
        const classes = new Set([
            ...Object.values(this.#buttonClassnames).filter(Boolean),
        ]);
        if (this.#class != null) {
            this.#class.split(' ').forEach((c) => classes.add(c));
        }
        return Array.from(classes).join(' ');
    }
    #class = null;
    set fullWidth(value) {
        if (value == null || value === false) {
            this.#buttonClassnames.fullWidth = '';
            return;
        }
        this.#buttonClassnames.fullWidth = 'btn-full-width';
    }
    set rounded(value) {
        if (value == null || value === false) {
            this.#buttonClassnames.rounded = '';
            return;
        }
        this.#buttonClassnames.rounded = 'btn-rounded';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AplazoButtonComponent, isStandalone: true, selector: "button[aplzButton], a[aplzButton]", inputs: { class: "class", fullWidth: "fullWidth", rounded: "rounded" }, host: { properties: { "class": "this.class" } }, hostDirectives: [{ directive: i1.AplazoElementAppearanceDirective, inputs: ["aplzAppearance", "aplzAppearance"] }, { directive: i1.AplazoElementColorDirective, inputs: ["aplzColor", "aplzColor"] }, { directive: i1.AplazoElementDisabledDirective, inputs: ["disabled", "disabled"] }, { directive: i1.AplazoElementPreventClickDirective }, { directive: i1.AplazoCommonSizeDirective, inputs: ["size", "size"] }], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [".aplazo-base-button{display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;white-space:nowrap;font-weight:700;text-transform:uppercase}.aplazo-base-button:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: .3 }.aplazo-base-button:disabled{cursor:not-allowed}.aplazo-base-button:is(.btn-full-width){width:100%}.aplazo-base-button:is(.btn-rounded){border-radius:9999px}.aplazo-base-button:not(.btn-rounded){border-radius:.5rem}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[aplzButton], a[aplzButton]', standalone: true, imports: [
                        NgClass,
                        AplazoElementAppearanceDirective,
                        AplazoElementColorDirective,
                        AplazoElementDisabledDirective,
                        AplazoElementPreventClickDirective,
                        AplazoCommonSizeDirective
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: ` <ng-content></ng-content> `, hostDirectives: [
                        {
                            directive: AplazoElementAppearanceDirective,
                            inputs: ['aplzAppearance']
                        },
                        {
                            directive: AplazoElementColorDirective,
                            inputs: ['aplzColor']
                        },
                        {
                            directive: AplazoElementDisabledDirective,
                            inputs: ['disabled']
                        },
                        {
                            directive: AplazoElementPreventClickDirective
                        },
                        {
                            directive: AplazoCommonSizeDirective,
                            inputs: ['size']
                        }
                    ], styles: [".aplazo-base-button{display:flex;-webkit-user-select:none;user-select:none;align-items:center;justify-content:center;white-space:nowrap;font-weight:700;text-transform:uppercase}.aplazo-base-button:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);--tw-ring-opacity: .3 }.aplazo-base-button:disabled{cursor:not-allowed}.aplazo-base-button:is(.btn-full-width){width:100%}.aplazo-base-button:is(.btn-rounded){border-radius:9999px}.aplazo-base-button:not(.btn-rounded){border-radius:.5rem}\n"] }]
        }], propDecorators: { class: [{
                type: HostBinding,
                args: ['class']
            }, {
                type: Input
            }], fullWidth: [{
                type: Input
            }], rounded: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { AplazoButtonComponent };
//# sourceMappingURL=apz-shared-ui-button.mjs.map
