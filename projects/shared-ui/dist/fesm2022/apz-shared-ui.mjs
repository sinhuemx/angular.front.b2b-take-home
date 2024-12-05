import * as i0 from '@angular/core';
import { inject, ElementRef, EventEmitter, Directive, Output, Input, HostBinding, HostListener, PLATFORM_ID, Injectable } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { startWith, of, combineLatest, map, fromEvent, shareReplay } from 'rxjs';

/**
 *
 * idea from
 * https://plainenglish.io/blog/creating-an-angular-directive-to-detect-clicking-outside-an-object-afd6c07212ef
 */
class AplazoClickOutsideDirective {
    constructor() {
        this.#elementRef = inject(ElementRef);
        this.clickOutside = new EventEmitter();
    }
    #elementRef;
    __onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.#elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoClickOutsideDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoClickOutsideDirective, isStandalone: true, selector: "[aplzClickOutside]", outputs: { clickOutside: "clickOutside" }, host: { listeners: { "document:click": "__onClick($event, $event.target)" } }, exportAs: ["clickOutside"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoClickOutsideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzClickOutside]',
                    exportAs: 'clickOutside',
                    standalone: true,
                    host: {
                        '(document:click)': '__onClick($event, $event.target)',
                    },
                }]
        }], propDecorators: { clickOutside: [{
                type: Output
            }] } });

const ELEMENT_APPEARANCES = ['solid', 'stroked', 'basic'];
class AplazoElementAppearanceDirective {
    set aplzAppearance(value) {
        if (value == null || !ELEMENT_APPEARANCES.includes(value)) {
            this.#appearance = 'aplazo-element-appearance--basic';
            return;
        }
        switch (value) {
            case 'solid':
                this.#appearance = 'aplazo-element-appearance--solid';
                break;
            case 'stroked':
                this.#appearance = 'aplazo-element-appearance--stroked';
                break;
            case 'basic':
            default:
                this.#appearance = 'aplazo-element-appearance--basic';
        }
    }
    get class() {
        return this.#appearance;
    }
    #appearance = 'aplazo-element-appearance--basic';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementAppearanceDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementAppearanceDirective, isStandalone: true, selector: "[aplzAppearance]", inputs: { aplzAppearance: "aplzAppearance" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementAppearanceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzAppearance]',
                    standalone: true,
                }]
        }], propDecorators: { aplzAppearance: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });

const ELEMENT_COLORS = [
    'light',
    'dark',
    'aplazo',
    'accent',
    'success',
    'danger',
    'warning',
    'info',
    'disabled',
];
class AplazoElementColorDirective {
    set aplzColor(value) {
        if (value == null || !ELEMENT_COLORS.includes(value)) {
            this.#color = 'aplazo-element-color--light';
            return;
        }
        switch (value) {
            case 'dark':
                this.#color = 'aplazo-element-color--dark';
                break;
            case 'aplazo':
                this.#color = 'aplazo-element-color--aplazo';
                break;
            case 'accent':
                this.#color = 'aplazo-element-color--accent';
                break;
            case 'success':
                this.#color = 'aplazo-element-color--success';
                break;
            case 'danger':
                this.#color = 'aplazo-element-color--danger';
                break;
            case 'warning':
                this.#color = 'aplazo-element-color--warning';
                break;
            case 'info':
                this.#color = 'aplazo-element-color--info';
                break;
            case 'disabled':
                this.#color = 'aplazo-element-color--disabled';
                break;
            case 'light':
            default:
                this.#color = 'aplazo-element-color--light';
        }
    }
    get class() {
        return this.#color;
    }
    #color = 'aplazo-element-color--light';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementColorDirective, isStandalone: true, selector: "[aplzColor]", inputs: { aplzColor: "aplzColor" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzColor]',
                    standalone: true,
                }]
        }], propDecorators: { aplzColor: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });

const COMMON_SIZE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
class AplazoCommonSizeDirective {
    set size(value) {
        if (value == null || !COMMON_SIZE.includes(value)) {
            this.#classSize = '';
            return;
        }
        switch (value) {
            case 'xs':
                this.#classSize = 'aplazo-element-size--xs';
                break;
            case 'sm':
                this.#classSize = 'aplazo-element-size--sm';
                break;
            case 'md':
                this.#classSize = 'aplazo-element-size--md';
                break;
            case 'lg':
                this.#classSize = 'aplazo-element-size--lg';
                break;
            case 'xl':
                this.#classSize = 'aplazo-element-size--xl';
                break;
            case '2xl':
                this.#classSize = 'aplazo-element-size--2xl';
                break;
            default:
                this.#classSize = '';
        }
    }
    get class() {
        return this.#classSize;
    }
    #classSize = '';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoCommonSizeDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoCommonSizeDirective, isStandalone: true, selector: "[aplzCommonSize]", inputs: { size: "size" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoCommonSizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzCommonSize]',
                    standalone: true,
                }]
        }], propDecorators: { size: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });

class AplazoElementDisabledDirective {
    constructor() {
        this.disabled = false;
    }
    get nativeDisabled() {
        return this.disabled ? '' : null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementDisabledDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementDisabledDirective, isStandalone: true, selector: "[aplazoElementDisabled]", inputs: { disabled: "disabled" }, host: { properties: { "class.disabled": "this.disabled", "attr.disabled": "this.nativeDisabled" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementDisabledDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplazoElementDisabled]',
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }, {
                type: Input
            }], nativeDisabled: [{
                type: HostBinding,
                args: ['attr.disabled']
            }] } });

class AplazoElementPreventClickDirective {
    #disabledDirective = inject(AplazoElementDisabledDirective, {
        optional: true,
        self: true,
    });
    onClick(e) {
        if (this.#disabledDirective?.disabled) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementPreventClickDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementPreventClickDirective, isStandalone: true, selector: "[aplazoElementPreventClick]", host: { listeners: { "click": "onClick($event)", "dblclick": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementPreventClickDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplazoElementPreventClick]',
                    standalone: true,
                }]
        }], propDecorators: { onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }, {
                type: HostListener,
                args: ['dblclick', ['$event']]
            }] } });

/* eslint-disable @angular-eslint/no-host-metadata-property */
class AplazoLowercaseDirective {
    #elementRef = inject(ElementRef);
    #ngControl = inject(NgControl, {
        self: true,
        optional: true,
    });
    sanitizeValue(event) {
        // TODO: sanitize the value to lowercase
        // TODO: propagate the value to the NgControl
        // TODO: preserve the cursor position
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLowercaseDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoLowercaseDirective, isStandalone: true, selector: "input[aplazoLowercase]", host: { listeners: { "input": "sanitizeValue($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLowercaseDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[aplazoLowercase]',
                    host: {
                        '(input)': 'sanitizeValue($event)',
                    },
                }]
        }] });

/* eslint-disable @angular-eslint/no-host-metadata-property */
class AplazoNoWhiteSpaceDirective {
    #elementRef = inject(ElementRef);
    #ngControl = inject(NgControl, {
        self: true,
        optional: true,
    });
    sanitizeValue() {
        // TODO: sanitize the value to remove white spaces
        // TODO: propagate the value to the NgControl
        // TODO: preserve the cursor position
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoNoWhiteSpaceDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoNoWhiteSpaceDirective, isStandalone: true, selector: "input[aplazoNoWhiteSpace]", host: { listeners: { "input": "sanitizeValue()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoNoWhiteSpaceDirective, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: 'input[aplazoNoWhiteSpace]',
                    host: {
                        '(input)': 'sanitizeValue()',
                    },
                }]
        }] });

/** Must be the same as in tailwind screens preset */
const SCREENS = {
    xs: '375px',
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    '2xl': '1320px',
    '3xl': '1440px',
    '4xl': '1680px',
    '5xl': '1920px',
};

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/** Simple service to match screen media queries
 *
 * Only works in the browser, so it's important to use it only in components.
 *
 * The screen sizes are the same as in tailwind screens preset.
 * and we have an entity that describes the screen sizes within entities/screens.ts
 *
 * inspired by:
 * https://admin.indepth.dev/responsive-angular/
 *
 */
class AplazoMatchMediaService {
    constructor() {
        this.#platformId = inject(PLATFORM_ID);
        this.#window = inject(DOCUMENT).defaultView;
        this.matchXsScreen$ = this.match$('screen and (min-width: 375px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 375px)')));
        this.matchSmScreen$ = this.match$('screen and (min-width: 540px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 540px)')));
        this.matchMdScreen$ = this.match$('screen and (min-width: 720px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 720px)')));
        this.matchLgScreen$ = this.match$('screen and (min-width: 960px)').pipe(startWith({ matches: this.#window?.matchMedia('screen and (min-width: 960px)').matches ?? false }));
        this.matchXlScreen$ = this.match$('screen and (min-width: 1140px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1140px)')));
        this.match2xlScreen$ = this.match$('screen and (min-width: 1320px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1320px)')));
        /** Stream with the size of the screen
         * @description
         * The screen sizes are the same as in tailwind screens preset.
         * @example
         * this.aplazoMatchMediaService.screenSize$.subscribe((size) => {
         *  console.log(size); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
         * });
         */
        this.screenSize$ = () => {
            if (!isPlatformBrowser(this.#platformId) || this.#window == null) {
                return of('xs');
            }
            return combineLatest({
                xs: this.matchMedia('screen and (min-width: 375px)'),
                sm: this.matchMedia('screen and (min-width: 540px)'),
                md: this.matchMedia('screen and (min-width: 720px)'),
                lg: this.matchMedia('screen and (min-width: 960px)'),
                xl: this.matchMedia('screen and (min-width: 1140px)'),
                '2xl': this.matchMedia('screen and (min-width: 1320px)'),
                '3xl': this.matchMedia('screen and (min-width: 1440px)'),
                '4xl': this.matchMedia('screen and (min-width: 1680px)'),
                '5xl': this.matchMedia('screen and (min-width: 1920px)'),
            }).pipe(map((sizes) => Object.entries(sizes)
                .map(([size, matches]) => (matches ? size : null))
                .filter(Boolean)
                .pop() ?? 'xs'));
        };
    }
    #platformId;
    #window;
    match$(mediaQueryList) {
        return this.#window == null
            ? of({ matches: false })
            : fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(map((matchEvent) => ({
                matches: matchEvent.matches
            })), shareReplay(1));
    }
    syncMatch(mediaQueryList) {
        return this.#window?.matchMedia(mediaQueryList).matches ?? false;
    }
    matchMedia(mediaQueryList) {
        return fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(startWith(this.#window.matchMedia(mediaQueryList)), map((evt) => evt.matches));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AplazoClickOutsideDirective, AplazoCommonSizeDirective, AplazoElementAppearanceDirective, AplazoElementColorDirective, AplazoElementDisabledDirective, AplazoElementPreventClickDirective, AplazoLowercaseDirective, AplazoMatchMediaService, AplazoNoWhiteSpaceDirective, COMMON_SIZE, ELEMENT_APPEARANCES, ELEMENT_COLORS, SCREENS };
//# sourceMappingURL=apz-shared-ui.mjs.map
