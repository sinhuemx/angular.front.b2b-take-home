/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class AplazoLowercaseDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG93ZXItY2FzZS10ZXh0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9sb3dlci1jYXNlLXRleHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDtBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVMzQyxNQUFNLE9BQU8sd0JBQXdCO0lBQzFCLFdBQVcsR0FBaUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9ELFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQ3RDLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsS0FBaUI7UUFDN0Isd0NBQXdDO1FBQ3hDLDZDQUE2QztRQUM3QyxxQ0FBcUM7SUFDdkMsQ0FBQzsrR0FYVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qjs7NEZBQXhCLHdCQUF3QjtrQkFQcEMsU0FBUzttQkFBQztvQkFDVCxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRSx1QkFBdUI7cUJBQ25DO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHkgKi9cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBzZWxlY3RvcjogJ2lucHV0W2FwbGF6b0xvd2VyY2FzZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoaW5wdXQpJzogJ3Nhbml0aXplVmFsdWUoJGV2ZW50KScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b0xvd2VyY2FzZURpcmVjdGl2ZSB7XHJcbiAgcmVhZG9ubHkgI2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZik7XHJcbiAgcmVhZG9ubHkgI25nQ29udHJvbCA9IGluamVjdChOZ0NvbnRyb2wsIHtcclxuICAgIHNlbGY6IHRydWUsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgc2FuaXRpemVWYWx1ZShldmVudDogSW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gVE9ETzogc2FuaXRpemUgdGhlIHZhbHVlIHRvIGxvd2VyY2FzZVxyXG4gICAgLy8gVE9ETzogcHJvcGFnYXRlIHRoZSB2YWx1ZSB0byB0aGUgTmdDb250cm9sXHJcbiAgICAvLyBUT0RPOiBwcmVzZXJ2ZSB0aGUgY3Vyc29yIHBvc2l0aW9uXHJcbiAgfVxyXG59XHJcbiJdfQ==