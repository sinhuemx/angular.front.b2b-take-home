import { NgOptimizedImage, NgClass } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, SecurityContext, Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const LOGO_SIZE = ['sm', 'md', 'base', 'lg', 'xl'];
/** ## Usage
 *
 * ### Import the component
 *
 * ```ts
 * // within the component that is using the logo
 * import { AplazoLogoComponent } from '@apz/shared-ui/logo';
 * ```
 *
 * ### Declare in the imports
 *
 * ```ts
 * // within the component that is using the logo
 * @Component({
 * ...,
 * standalone: true,
 * imports: [
 *  ...,
 * AplazoLogoComponent,
 * ],
 * ```
 *
 * ### Use the component
 *
 * ```html
 * <aplz-ui-logo size="sm"></aplz-ui-logo>
 * ```
 *
 * > Note: the NgOptimizedImage Directive throws a warning if there is no preconnect tag in the head of the document.
 *
 * > Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document: <link rel="preconnect" href="https://aplazoassets.s3.us-west-2.amazonaws.com">
 *
 */
class AplazoLogoComponent {
    constructor() {
        this.#sanitizer = inject(DomSanitizer);
        this.#classnames = {
            base: 'aplazo-logo__container',
            sizeModifier: 'aplazo-logo__container--base',
        };
        this.#imgSize = {
            width: 160,
            height: 36.7,
        };
        /** @ignore */
        this.logoUrl = this.#sanitizer.sanitize(SecurityContext.URL, 'https://aplazoassets.s3.us-west-2.amazonaws.com/logos/logo.webp') ?? '';
    }
    #sanitizer;
    #classnames;
    #imgSize;
    get width() {
        return this.#imgSize.width;
    }
    get height() {
        return this.#imgSize.height;
    }
    get logoContainerClassnames() {
        return Object.values(this.#classnames).filter(Boolean).join(' ');
    }
    /** Sets the size of the logo
     *
     * @default base
     */
    set size(value) {
        let modifier = this.#classnames.sizeModifier;
        switch (value) {
            case 'sm':
                modifier = 'aplazo-logo__container--sm';
                this.#imgSize.width = 80;
                this.#imgSize.height = 18.3;
                break;
            case 'md':
                modifier = 'aplazo-logo__container--md';
                this.#imgSize.width = 128;
                this.#imgSize.height = 29.5;
                break;
            case 'lg':
                modifier = 'aplazo-logo__container--lg';
                this.#imgSize.width = 192;
                this.#imgSize.height = 44;
                break;
            case 'xl':
                modifier = 'aplazo-logo__container--xl';
                this.#imgSize.width = 256;
                this.#imgSize.height = 58.8;
                break;
            default:
                modifier = 'aplazo-logo__container--base';
                this.#imgSize.width = 160;
                this.#imgSize.height = 36.7;
        }
        this.#classnames.sizeModifier = modifier;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: AplazoLogoComponent, isStandalone: true, selector: "aplz-ui-logo", inputs: { size: "size" }, ngImport: i0, template: `<picture [ngClass]="logoContainerClassnames">
    <img
      priority
      alt="aplazo logo"
      class="aplazo-logo"
      width="152"
      height="35"
      [ngSrc]="logoUrl"
    />
  </picture>`, isInline: true, styles: [".aplazo-logo{width:100%;max-width:100%;object-fit:cover;object-position:center}.aplazo-logo__container{margin-left:auto;margin-right:auto;display:flex;height:100%;align-items:center;justify-content:center;text-align:center}.aplazo-logo__container--sm{width:5rem}.aplazo-logo__container--md{width:8rem}.aplazo-logo__container--base{width:10rem}.aplazo-logo__container--lg{width:12rem}.aplazo-logo__container--xl{width:16rem}\n"], dependencies: [{ kind: "directive", type: NgOptimizedImage, selector: "img[ngSrc]", inputs: ["ngSrc", "ngSrcset", "sizes", "width", "height", "loading", "priority", "loaderParams", "disableOptimizedSrcset", "fill", "placeholder", "placeholderConfig", "src", "srcset"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'aplz-ui-logo', standalone: true, imports: [NgOptimizedImage, NgClass], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<picture [ngClass]="logoContainerClassnames">
    <img
      priority
      alt="aplazo logo"
      class="aplazo-logo"
      width="152"
      height="35"
      [ngSrc]="logoUrl"
    />
  </picture>`, styles: [".aplazo-logo{width:100%;max-width:100%;object-fit:cover;object-position:center}.aplazo-logo__container{margin-left:auto;margin-right:auto;display:flex;height:100%;align-items:center;justify-content:center;text-align:center}.aplazo-logo__container--sm{width:5rem}.aplazo-logo__container--md{width:8rem}.aplazo-logo__container--base{width:10rem}.aplazo-logo__container--lg{width:12rem}.aplazo-logo__container--xl{width:16rem}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }] } });

/**
 * Generated bundle index. Do not edit.
 */

export { AplazoLogoComponent, LOGO_SIZE };
//# sourceMappingURL=apz-shared-ui-logo.mjs.map
