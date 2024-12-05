/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Directive, ElementRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as i0 from "@angular/core";
export class AplazoNoWhiteSpaceDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8td2hpdGUtc3BhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmVzL25vLXdoaXRlLXNwYWNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4REFBOEQ7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRM0MsTUFBTSxPQUFPLDJCQUEyQjtJQUM3QixXQUFXLEdBQWlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRCxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRTtRQUN0QyxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsYUFBYTtRQUNYLGtEQUFrRDtRQUNsRCw2Q0FBNkM7UUFDN0MscUNBQXFDO0lBQ3ZDLENBQUM7K0dBWFUsMkJBQTJCO21HQUEzQiwyQkFBMkI7OzRGQUEzQiwyQkFBMkI7a0JBUHZDLFNBQVM7bUJBQUM7b0JBQ1QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsaUJBQWlCO3FCQUM3QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5ICovXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQERpcmVjdGl2ZSh7XHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBzZWxlY3RvcjogJ2lucHV0W2FwbGF6b05vV2hpdGVTcGFjZV0nLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoaW5wdXQpJzogJ3Nhbml0aXplVmFsdWUoKScsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwbGF6b05vV2hpdGVTcGFjZURpcmVjdGl2ZSB7XHJcbiAgcmVhZG9ubHkgI2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZik7XHJcbiAgcmVhZG9ubHkgI25nQ29udHJvbCA9IGluamVjdChOZ0NvbnRyb2wsIHtcclxuICAgIHNlbGY6IHRydWUsXHJcbiAgICBvcHRpb25hbDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgc2FuaXRpemVWYWx1ZSgpOiB2b2lkIHtcclxuICAgIC8vIFRPRE86IHNhbml0aXplIHRoZSB2YWx1ZSB0byByZW1vdmUgd2hpdGUgc3BhY2VzXHJcbiAgICAvLyBUT0RPOiBwcm9wYWdhdGUgdGhlIHZhbHVlIHRvIHRoZSBOZ0NvbnRyb2xcclxuICAgIC8vIFRPRE86IHByZXNlcnZlIHRoZSBjdXJzb3IgcG9zaXRpb25cclxuICB9XHJcbn1cclxuIl19