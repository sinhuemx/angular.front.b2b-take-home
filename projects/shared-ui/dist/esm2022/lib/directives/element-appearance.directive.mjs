import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const ELEMENT_APPEARANCES = ['solid', 'stroked', 'basic'];
export class AplazoElementAppearanceDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1hcHBlYXJhbmNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9lbGVtZW50LWFwcGVhcmFuY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFOUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBVSxDQUFDO0FBTzFFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsSUFDSSxjQUFjLENBQUMsS0FBK0I7UUFDaEQsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQztZQUV0RCxPQUFPO1FBQ1QsQ0FBQztRQUVELFFBQVEsS0FBSyxFQUFFLENBQUM7WUFDZCxLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQztnQkFDdEQsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsV0FBVyxHQUFHLG9DQUFvQyxDQUFDO2dCQUN4RCxNQUFNO1lBQ1IsS0FBSyxPQUFPLENBQUM7WUFDYjtnQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLGtDQUFrQyxDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxXQUFXLEdBQ1Qsa0NBQWtDLENBQUM7K0dBM0IxQixnQ0FBZ0M7bUdBQWhDLGdDQUFnQzs7NEZBQWhDLGdDQUFnQztrQkFKNUMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBR0ssY0FBYztzQkFEakIsS0FBSztnQkFzQkYsS0FBSztzQkFEUixXQUFXO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfQVBQRUFSQU5DRVMgPSBbJ3NvbGlkJywgJ3N0cm9rZWQnLCAnYmFzaWMnXSBhcyBjb25zdDtcclxuZXhwb3J0IHR5cGUgRWxlbWVudEFwcGVhcmFuY2UgPSB0eXBlb2YgRUxFTUVOVF9BUFBFQVJBTkNFU1tudW1iZXJdO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBsekFwcGVhcmFuY2VdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvRWxlbWVudEFwcGVhcmFuY2VEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFwbHpBcHBlYXJhbmNlKHZhbHVlOiBFbGVtZW50QXBwZWFyYW5jZSB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICFFTEVNRU5UX0FQUEVBUkFOQ0VTLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLiNhcHBlYXJhbmNlID0gJ2FwbGF6by1lbGVtZW50LWFwcGVhcmFuY2UtLWJhc2ljJztcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ3NvbGlkJzpcclxuICAgICAgICB0aGlzLiNhcHBlYXJhbmNlID0gJ2FwbGF6by1lbGVtZW50LWFwcGVhcmFuY2UtLXNvbGlkJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3Ryb2tlZCc6XHJcbiAgICAgICAgdGhpcy4jYXBwZWFyYW5jZSA9ICdhcGxhem8tZWxlbWVudC1hcHBlYXJhbmNlLS1zdHJva2VkJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYmFzaWMnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuI2FwcGVhcmFuY2UgPSAnYXBsYXpvLWVsZW1lbnQtYXBwZWFyYW5jZS0tYmFzaWMnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNsYXNzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2FwcGVhcmFuY2U7XHJcbiAgfVxyXG4gICNhcHBlYXJhbmNlOiBgYXBsYXpvLWVsZW1lbnQtYXBwZWFyYW5jZS0tJHtFbGVtZW50QXBwZWFyYW5jZX1gID1cclxuICAgICdhcGxhem8tZWxlbWVudC1hcHBlYXJhbmNlLS1iYXNpYyc7XHJcbn1cclxuIl19