import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class AplazoElementDisabledDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1kaXNhYmxlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1kaXNhYmxlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU05RCxNQUFNLE9BQU8sOEJBQThCO0lBSjNDO1FBT0UsYUFBUSxHQUFHLEtBQUssQ0FBQztLQU1sQjtJQUpDLElBQ2MsY0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7K0dBUlUsOEJBQThCO21HQUE5Qiw4QkFBOEI7OzRGQUE5Qiw4QkFBOEI7a0JBSjFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQUlDLFFBQVE7c0JBRlAsV0FBVzt1QkFBQyxnQkFBZ0I7O3NCQUM1QixLQUFLO2dCQUlRLGNBQWM7c0JBRDNCLFdBQVc7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcGxhem9FbGVtZW50RGlzYWJsZWRdJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvRWxlbWVudERpc2FibGVkRGlyZWN0aXZlIHtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcclxuICBASW5wdXQoKVxyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5kaXNhYmxlZCcpXHJcbiAgcHJvdGVjdGVkIGdldCBuYXRpdmVEaXNhYmxlZCgpOiAnJyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyAnJyA6IG51bGw7XHJcbiAgfVxyXG59XHJcbiJdfQ==