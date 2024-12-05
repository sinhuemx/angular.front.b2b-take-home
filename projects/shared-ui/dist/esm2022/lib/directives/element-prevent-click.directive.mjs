import { Directive, HostListener, inject } from '@angular/core';
import { AplazoElementDisabledDirective } from './element-disabled.directive';
import * as i0 from "@angular/core";
export class AplazoElementPreventClickDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1wcmV2ZW50LWNsaWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9lbGVtZW50LXByZXZlbnQtY2xpY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFNOUUsTUFBTSxPQUFPLGtDQUFrQztJQUNwQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsOEJBQThCLEVBQUU7UUFDbkUsUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUMsQ0FBQztJQUlILE9BQU8sQ0FBQyxDQUFRO1FBQ2QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLENBQUM7WUFDdEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDOytHQWJVLGtDQUFrQzttR0FBbEMsa0NBQWtDOzs0RkFBbEMsa0NBQWtDO2tCQUo5QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFTQyxPQUFPO3NCQUZOLFlBQVk7dUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOztzQkFDaEMsWUFBWTt1QkFBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwbGF6b0VsZW1lbnREaXNhYmxlZERpcmVjdGl2ZSB9IGZyb20gJy4vZWxlbWVudC1kaXNhYmxlZC5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBsYXpvRWxlbWVudFByZXZlbnRDbGlja10nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGxhem9FbGVtZW50UHJldmVudENsaWNrRGlyZWN0aXZlIHtcclxuICByZWFkb25seSAjZGlzYWJsZWREaXJlY3RpdmUgPSBpbmplY3QoQXBsYXpvRWxlbWVudERpc2FibGVkRGlyZWN0aXZlLCB7XHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgIHNlbGY6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayhlOiBFdmVudCkge1xyXG4gICAgaWYgKHRoaXMuI2Rpc2FibGVkRGlyZWN0aXZlPy5kaXNhYmxlZCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==