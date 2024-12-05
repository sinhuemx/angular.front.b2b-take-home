import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { AplazoElementAppearanceDirective, AplazoElementColorDirective, AplazoElementDisabledDirective, AplazoElementPreventClickDirective, AplazoCommonSizeDirective } from '@apz/shared-ui';
import * as i0 from "@angular/core";
import * as i1 from "@apz/shared-ui";
export class AplazoButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsYXpvLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9idXR0b24vc3JjL2FwbGF6by1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2hDLDJCQUEyQixFQUMzQiw4QkFBOEIsRUFDOUIsa0NBQWtDLEVBQ2xDLHlCQUF5QixFQUMxQixNQUFNLGdCQUFnQixDQUFDOzs7QUE2Q3hCLE1BQU0sT0FBTyxxQkFBcUI7SUFDdkIsaUJBQWlCLEdBQTJCO1FBQ25ELElBQUksRUFBRSxvQkFBb0I7UUFDMUIsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7SUFFRixJQUVJLEtBQUssQ0FBQyxLQUFvQjtRQUM1QixJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFTO1lBQzlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ3pELENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsTUFBTSxHQUFrQixJQUFJLENBQUM7SUFFN0IsSUFDSSxTQUFTLENBQUMsS0FBMEI7UUFDdEMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUN0QyxPQUFPO1FBQ1QsQ0FBQztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQ1csT0FBTyxDQUFDLEtBQTBCO1FBQzNDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztJQUNqRCxDQUFDOytHQS9DVSxxQkFBcUI7bUdBQXJCLHFCQUFxQiw4bUJBeEJ0Qiw2QkFBNkI7OzRGQXdCNUIscUJBQXFCO2tCQXJDakMsU0FBUzsrQkFDRSxtQ0FBbUMsY0FDakMsSUFBSSxXQUNQO3dCQUNQLE9BQU87d0JBQ1AsZ0NBQWdDO3dCQUNoQywyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsa0NBQWtDO3dCQUNsQyx5QkFBeUI7cUJBQzFCLGlCQUNjLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU0sWUFDckMsNkJBQTZCLGtCQUN2Qjt3QkFDZDs0QkFDRSxTQUFTLEVBQUUsZ0NBQWdDOzRCQUMzQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt5QkFDM0I7d0JBQ0Q7NEJBQ0UsU0FBUyxFQUFFLDJCQUEyQjs0QkFDdEMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO3lCQUN0Qjt3QkFDRDs0QkFDRSxTQUFTLEVBQUUsOEJBQThCOzRCQUN6QyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7eUJBQ3JCO3dCQUNEOzRCQUNFLFNBQVMsRUFBRSxrQ0FBa0M7eUJBQzlDO3dCQUNEOzRCQUNFLFNBQVMsRUFBRSx5QkFBeUI7NEJBQ3BDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQzt5QkFDakI7cUJBQ0Y7OEJBWUcsS0FBSztzQkFGUixXQUFXO3VCQUFDLE9BQU87O3NCQUNuQixLQUFLO2dCQXNCRixTQUFTO3NCQURaLEtBQUs7Z0JBV0ssT0FBTztzQkFEakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBcGxhem9FbGVtZW50QXBwZWFyYW5jZURpcmVjdGl2ZSxcclxuICBBcGxhem9FbGVtZW50Q29sb3JEaXJlY3RpdmUsXHJcbiAgQXBsYXpvRWxlbWVudERpc2FibGVkRGlyZWN0aXZlLFxyXG4gIEFwbGF6b0VsZW1lbnRQcmV2ZW50Q2xpY2tEaXJlY3RpdmUsXHJcbiAgQXBsYXpvQ29tbW9uU2l6ZURpcmVjdGl2ZVxyXG59IGZyb20gJ0BhcHovc2hhcmVkLXVpJztcclxuXHJcbmludGVyZmFjZSBCdXR0b25DbGFzc25hbWVzQ29uZmlnIHtcclxuICBiYXNlOiBzdHJpbmc7XHJcbiAgZnVsbFdpZHRoOiBzdHJpbmc7XHJcbiAgcm91bmRlZDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2J1dHRvblthcGx6QnV0dG9uXSwgYVthcGx6QnV0dG9uXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOZ0NsYXNzLFxyXG4gICAgQXBsYXpvRWxlbWVudEFwcGVhcmFuY2VEaXJlY3RpdmUsXHJcbiAgICBBcGxhem9FbGVtZW50Q29sb3JEaXJlY3RpdmUsXHJcbiAgICBBcGxhem9FbGVtZW50RGlzYWJsZWREaXJlY3RpdmUsXHJcbiAgICBBcGxhem9FbGVtZW50UHJldmVudENsaWNrRGlyZWN0aXZlLFxyXG4gICAgQXBsYXpvQ29tbW9uU2l6ZURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXHJcbiAgaG9zdERpcmVjdGl2ZXM6IFtcclxuICAgIHtcclxuICAgICAgZGlyZWN0aXZlOiBBcGxhem9FbGVtZW50QXBwZWFyYW5jZURpcmVjdGl2ZSxcclxuICAgICAgaW5wdXRzOiBbJ2FwbHpBcHBlYXJhbmNlJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcmVjdGl2ZTogQXBsYXpvRWxlbWVudENvbG9yRGlyZWN0aXZlLFxyXG4gICAgICBpbnB1dHM6IFsnYXBsekNvbG9yJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGRpcmVjdGl2ZTogQXBsYXpvRWxlbWVudERpc2FibGVkRGlyZWN0aXZlLFxyXG4gICAgICBpbnB1dHM6IFsnZGlzYWJsZWQnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGlyZWN0aXZlOiBBcGxhem9FbGVtZW50UHJldmVudENsaWNrRGlyZWN0aXZlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkaXJlY3RpdmU6IEFwbGF6b0NvbW1vblNpemVEaXJlY3RpdmUsXHJcbiAgICAgIGlucHV0czogWydzaXplJ11cclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2FwbGF6by1idXR0b24uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvQnV0dG9uQ29tcG9uZW50IHtcclxuICByZWFkb25seSAjYnV0dG9uQ2xhc3NuYW1lczogQnV0dG9uQ2xhc3NuYW1lc0NvbmZpZyA9IHtcclxuICAgIGJhc2U6ICdhcGxhem8tYmFzZS1idXR0b24nLFxyXG4gICAgZnVsbFdpZHRoOiAnJyxcclxuICAgIHJvdW5kZWQ6ICcnLFxyXG4gIH07XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNsYXNzKHZhbHVlOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgdGhpcy4jY2xhc3MgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jY2xhc3MgPSB2YWx1ZTtcclxuICB9XHJcbiAgZ2V0IGNsYXNzKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IG5ldyBTZXQ8c3RyaW5nPihbXHJcbiAgICAgIC4uLk9iamVjdC52YWx1ZXModGhpcy4jYnV0dG9uQ2xhc3NuYW1lcykuZmlsdGVyKEJvb2xlYW4pLFxyXG4gICAgXSk7XHJcbiAgICBpZiAodGhpcy4jY2xhc3MgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLiNjbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGMpID0+IGNsYXNzZXMuYWRkKGMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShjbGFzc2VzKS5qb2luKCcgJyk7XHJcbiAgfVxyXG4gICNjbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGZ1bGxXaWR0aCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuI2J1dHRvbkNsYXNzbmFtZXMuZnVsbFdpZHRoID0gJyc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLiNidXR0b25DbGFzc25hbWVzLmZ1bGxXaWR0aCA9ICdidG4tZnVsbC13aWR0aCc7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcm91bmRlZCh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuI2J1dHRvbkNsYXNzbmFtZXMucm91bmRlZCA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jYnV0dG9uQ2xhc3NuYW1lcy5yb3VuZGVkID0gJ2J0bi1yb3VuZGVkJztcclxuICB9XHJcbn1cclxuIl19