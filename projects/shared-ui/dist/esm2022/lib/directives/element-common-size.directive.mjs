import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const COMMON_SIZE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
export class AplazoCommonSizeDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jb21tb24tc2l6ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1jb21tb24tc2l6ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBVSxDQUFDO0FBTzFFLE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsSUFDSSxJQUFJLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLE9BQU87UUFDVCxDQUFDO1FBRUQsUUFBUSxLQUFLLEVBQUUsQ0FBQztZQUNkLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLElBQUk7Z0JBQ1AsSUFBSSxDQUFDLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQztnQkFDNUMsTUFBTTtZQUNSLEtBQUssSUFBSTtnQkFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLHlCQUF5QixDQUFDO2dCQUM1QyxNQUFNO1lBQ1IsS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxVQUFVLEdBQUcseUJBQXlCLENBQUM7Z0JBQzVDLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FBQztnQkFDN0MsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxVQUFVLEdBQThDLEVBQUUsQ0FBQzsrR0FwQ2hELHlCQUF5QjttR0FBekIseUJBQXlCOzs0RkFBekIseUJBQXlCO2tCQUpyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFHSyxJQUFJO3NCQURQLEtBQUs7Z0JBZ0NGLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBDT01NT05fU0laRSA9IFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnLCAnMnhsJ10gYXMgY29uc3Q7XHJcbmV4cG9ydCB0eXBlIENvbW1vblNpemUgPSB0eXBlb2YgQ09NTU9OX1NJWkVbbnVtYmVyXTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwbHpDb21tb25TaXplXScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b0NvbW1vblNpemVEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNpemUodmFsdWU6IENvbW1vblNpemUgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAhQ09NTU9OX1NJWkUuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICd4cyc6XHJcbiAgICAgICAgdGhpcy4jY2xhc3NTaXplID0gJ2FwbGF6by1lbGVtZW50LXNpemUtLXhzJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc20nOlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICdhcGxhem8tZWxlbWVudC1zaXplLS1zbSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21kJzpcclxuICAgICAgICB0aGlzLiNjbGFzc1NpemUgPSAnYXBsYXpvLWVsZW1lbnQtc2l6ZS0tbWQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdsZyc6XHJcbiAgICAgICAgdGhpcy4jY2xhc3NTaXplID0gJ2FwbGF6by1lbGVtZW50LXNpemUtLWxnJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneGwnOlxyXG4gICAgICAgIHRoaXMuI2NsYXNzU2l6ZSA9ICdhcGxhem8tZWxlbWVudC1zaXplLS14bCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJzJ4bCc6XHJcbiAgICAgICAgdGhpcy4jY2xhc3NTaXplID0gJ2FwbGF6by1lbGVtZW50LXNpemUtLTJ4bCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy4jY2xhc3NTaXplID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgY2xhc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLiNjbGFzc1NpemU7XHJcbiAgfVxyXG4gICNjbGFzc1NpemU6IGBhcGxhem8tZWxlbWVudC1zaXplLS0ke0NvbW1vblNpemV9YCB8ICcnID0gJyc7XHJcbn1cclxuIl19