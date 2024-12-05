import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, SecurityContext, ViewEncapsulation, inject, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export const LOGO_SIZE = ['sm', 'md', 'base', 'lg', 'xl'];
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
export class AplazoLogoComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsYXpvLWxvZ28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbG9nby9zcmMvYXBsYXpvLWxvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUV6RCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFVLENBQUM7QUFHbkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NHO0FBbUJILE1BQU0sT0FBTyxtQkFBbUI7SUFsQmhDO1FBbUJXLGVBQVUsR0FBaUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhELGdCQUFXLEdBR2hCO1lBQ0YsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixZQUFZLEVBQUUsOEJBQThCO1NBQzdDLENBQUM7UUFFTyxhQUFRLEdBR2I7WUFDRixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQWNGLGNBQWM7UUFDTCxZQUFPLEdBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQ3RCLGVBQWUsQ0FBQyxHQUFHLEVBQ25CLGlFQUFpRSxDQUNsRSxJQUFJLEVBQUUsQ0FBQztLQXVDWDtJQTFFVSxVQUFVLENBQXNDO0lBRWhELFdBQVcsQ0FNbEI7SUFFTyxRQUFRLENBTWY7SUFFRixJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQVNEOzs7T0FHRztJQUNILElBQ1csSUFBSSxDQUFDLEtBQXNCO1FBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBRTdDLFFBQVEsS0FBSyxFQUFFLENBQUM7WUFDZCxLQUFLLElBQUk7Z0JBQ1AsUUFBUSxHQUFHLDRCQUE0QixDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTTtZQUNSLEtBQUssSUFBSTtnQkFDUCxRQUFRLEdBQUcsNEJBQTRCLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLFFBQVEsR0FBRyw0QkFBNEIsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQzFCLE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsUUFBUSxHQUFHLDRCQUE0QixDQUFDO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDNUIsTUFBTTtZQUNSO2dCQUNFLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMzQyxDQUFDOytHQTFFVSxtQkFBbUI7bUdBQW5CLG1CQUFtQixrR0FacEI7Ozs7Ozs7OzthQVNDLG1mQVpELGdCQUFnQixnUEFBRSxPQUFPOzs0RkFleEIsbUJBQW1CO2tCQWxCL0IsU0FBUzsrQkFDRSxjQUFjLGNBQ1osSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGlCQUNyQixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNLFlBQ3JDOzs7Ozs7Ozs7YUFTQzs4QkE4Q0EsSUFBSTtzQkFEZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDbGFzcywgTmdPcHRpbWl6ZWRJbWFnZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFNlY3VyaXR5Q29udGV4dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBpbmplY3QsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR09fU0laRSA9IFsnc20nLCAnbWQnLCAnYmFzZScsICdsZycsICd4bCddIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBMb2dvU2l6ZSA9ICh0eXBlb2YgTE9HT19TSVpFKVtudW1iZXJdO1xyXG5cclxuLyoqICMjIFVzYWdlXHJcbiAqXHJcbiAqICMjIyBJbXBvcnQgdGhlIGNvbXBvbmVudFxyXG4gKlxyXG4gKiBgYGB0c1xyXG4gKiAvLyB3aXRoaW4gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHVzaW5nIHRoZSBsb2dvXHJcbiAqIGltcG9ydCB7IEFwbGF6b0xvZ29Db21wb25lbnQgfSBmcm9tICdAYXB6L3NoYXJlZC11aS9sb2dvJztcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyBEZWNsYXJlIGluIHRoZSBpbXBvcnRzXHJcbiAqXHJcbiAqIGBgYHRzXHJcbiAqIC8vIHdpdGhpbiB0aGUgY29tcG9uZW50IHRoYXQgaXMgdXNpbmcgdGhlIGxvZ29cclxuICogQENvbXBvbmVudCh7XHJcbiAqIC4uLixcclxuICogc3RhbmRhbG9uZTogdHJ1ZSxcclxuICogaW1wb3J0czogW1xyXG4gKiAgLi4uLFxyXG4gKiBBcGxhem9Mb2dvQ29tcG9uZW50LFxyXG4gKiBdLFxyXG4gKiBgYGBcclxuICpcclxuICogIyMjIFVzZSB0aGUgY29tcG9uZW50XHJcbiAqXHJcbiAqIGBgYGh0bWxcclxuICogPGFwbHotdWktbG9nbyBzaXplPVwic21cIj48L2FwbHotdWktbG9nbz5cclxuICogYGBgXHJcbiAqXHJcbiAqID4gTm90ZTogdGhlIE5nT3B0aW1pemVkSW1hZ2UgRGlyZWN0aXZlIHRocm93cyBhIHdhcm5pbmcgaWYgdGhlcmUgaXMgbm8gcHJlY29ubmVjdCB0YWcgaW4gdGhlIGhlYWQgb2YgdGhlIGRvY3VtZW50LlxyXG4gKlxyXG4gKiA+IFByZWNvbm5lY3RpbmcgdG8gdGhlIG9yaWdpbihzKSB0aGF0IHNlcnZlIHByaW9yaXR5IGltYWdlcyBlbnN1cmVzIHRoYXQgdGhlc2UgaW1hZ2VzIGFyZSBkZWxpdmVyZWQgYXMgc29vbiBhcyBwb3NzaWJsZS4gVG8gZml4IHRoaXMsIHBsZWFzZSBhZGQgdGhlIGZvbGxvd2luZyBlbGVtZW50IGludG8gdGhlIDxoZWFkPiBvZiB0aGUgZG9jdW1lbnQ6IDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9hcGxhem9hc3NldHMuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cIj5cclxuICpcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBsei11aS1sb2dvJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtOZ09wdGltaXplZEltYWdlLCBOZ0NsYXNzXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgPHBpY3R1cmUgW25nQ2xhc3NdPVwibG9nb0NvbnRhaW5lckNsYXNzbmFtZXNcIj5cclxuICAgIDxpbWdcclxuICAgICAgcHJpb3JpdHlcclxuICAgICAgYWx0PVwiYXBsYXpvIGxvZ29cIlxyXG4gICAgICBjbGFzcz1cImFwbGF6by1sb2dvXCJcclxuICAgICAgd2lkdGg9XCIxNTJcIlxyXG4gICAgICBoZWlnaHQ9XCIzNVwiXHJcbiAgICAgIFtuZ1NyY109XCJsb2dvVXJsXCJcclxuICAgIC8+XHJcbiAgPC9waWN0dXJlPmAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBsYXpvLWxvZ28uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvTG9nb0NvbXBvbmVudCB7XHJcbiAgcmVhZG9ubHkgI3Nhbml0aXplcjogRG9tU2FuaXRpemVyID0gaW5qZWN0KERvbVNhbml0aXplcik7XHJcblxyXG4gIHJlYWRvbmx5ICNjbGFzc25hbWVzOiB7XHJcbiAgICBiYXNlOiBzdHJpbmc7XHJcbiAgICBzaXplTW9kaWZpZXI6IGBhcGxhem8tbG9nb19fY29udGFpbmVyLS0ke0xvZ29TaXplfWA7XHJcbiAgfSA9IHtcclxuICAgIGJhc2U6ICdhcGxhem8tbG9nb19fY29udGFpbmVyJyxcclxuICAgIHNpemVNb2RpZmllcjogJ2FwbGF6by1sb2dvX19jb250YWluZXItLWJhc2UnLFxyXG4gIH07XHJcblxyXG4gIHJlYWRvbmx5ICNpbWdTaXplOiB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgfSA9IHtcclxuICAgIHdpZHRoOiAxNjAsXHJcbiAgICBoZWlnaHQ6IDM2LjcsXHJcbiAgfTtcclxuXHJcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy4jaW1nU2l6ZS53aWR0aDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLiNpbWdTaXplLmhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldCBsb2dvQ29udGFpbmVyQ2xhc3NuYW1lcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy4jY2xhc3NuYW1lcykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcclxuICB9XHJcblxyXG4gIC8qKiBAaWdub3JlICovXHJcbiAgcmVhZG9ubHkgbG9nb1VybCA9XHJcbiAgICB0aGlzLiNzYW5pdGl6ZXIuc2FuaXRpemUoXHJcbiAgICAgIFNlY3VyaXR5Q29udGV4dC5VUkwsXHJcbiAgICAgICdodHRwczovL2FwbGF6b2Fzc2V0cy5zMy51cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9sb2dvcy9sb2dvLndlYnAnXHJcbiAgICApID8/ICcnO1xyXG5cclxuICAvKiogU2V0cyB0aGUgc2l6ZSBvZiB0aGUgbG9nb1xyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgYmFzZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzaXplKHZhbHVlOiBMb2dvU2l6ZSB8IG51bGwpIHtcclxuICAgIGxldCBtb2RpZmllciA9IHRoaXMuI2NsYXNzbmFtZXMuc2l6ZU1vZGlmaWVyO1xyXG5cclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAnc20nOlxyXG4gICAgICAgIG1vZGlmaWVyID0gJ2FwbGF6by1sb2dvX19jb250YWluZXItLXNtJztcclxuICAgICAgICB0aGlzLiNpbWdTaXplLndpZHRoID0gODA7XHJcbiAgICAgICAgdGhpcy4jaW1nU2l6ZS5oZWlnaHQgPSAxOC4zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgbW9kaWZpZXIgPSAnYXBsYXpvLWxvZ29fX2NvbnRhaW5lci0tbWQnO1xyXG4gICAgICAgIHRoaXMuI2ltZ1NpemUud2lkdGggPSAxMjg7XHJcbiAgICAgICAgdGhpcy4jaW1nU2l6ZS5oZWlnaHQgPSAyOS41O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZyc6XHJcbiAgICAgICAgbW9kaWZpZXIgPSAnYXBsYXpvLWxvZ29fX2NvbnRhaW5lci0tbGcnO1xyXG4gICAgICAgIHRoaXMuI2ltZ1NpemUud2lkdGggPSAxOTI7XHJcbiAgICAgICAgdGhpcy4jaW1nU2l6ZS5oZWlnaHQgPSA0NDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneGwnOlxyXG4gICAgICAgIG1vZGlmaWVyID0gJ2FwbGF6by1sb2dvX19jb250YWluZXItLXhsJztcclxuICAgICAgICB0aGlzLiNpbWdTaXplLndpZHRoID0gMjU2O1xyXG4gICAgICAgIHRoaXMuI2ltZ1NpemUuaGVpZ2h0ID0gNTguODtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBtb2RpZmllciA9ICdhcGxhem8tbG9nb19fY29udGFpbmVyLS1iYXNlJztcclxuICAgICAgICB0aGlzLiNpbWdTaXplLndpZHRoID0gMTYwO1xyXG4gICAgICAgIHRoaXMuI2ltZ1NpemUuaGVpZ2h0ID0gMzYuNztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiNjbGFzc25hbWVzLnNpemVNb2RpZmllciA9IG1vZGlmaWVyO1xyXG4gIH1cclxufVxyXG4iXX0=