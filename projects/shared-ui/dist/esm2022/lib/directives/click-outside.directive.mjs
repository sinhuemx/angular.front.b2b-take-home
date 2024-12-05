import { Directive, ElementRef, EventEmitter, inject, Output, } from '@angular/core';
import * as i0 from "@angular/core";
/**
 *
 * idea from
 * https://plainenglish.io/blog/creating-an-angular-directive-to-detect-clicking-outside-an-object-afd6c07212ef
 */
export class AplazoClickOutsideDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0FBRXZCOzs7O0dBSUc7QUFTSCxNQUFNLE9BQU8sMkJBQTJCO0lBUnhDO1FBU1csZ0JBQVcsR0FBNEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztLQVl6RDtJQWRVLFdBQVcsQ0FBK0M7SUFJbkUsU0FBUyxDQUFDLEtBQWlCLEVBQUUsYUFBMEI7UUFDckQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25CLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxhQUFhLEdBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztJQUNILENBQUM7K0dBZFUsMkJBQTJCO21HQUEzQiwyQkFBMkI7OzRGQUEzQiwyQkFBMkI7a0JBUnZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFVBQVUsRUFBRSxJQUFJO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsa0NBQWtDO3FCQUN2RDtpQkFDRjs4QkFJVyxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgaW5qZWN0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBpZGVhIGZyb21cclxuICogaHR0cHM6Ly9wbGFpbmVuZ2xpc2guaW8vYmxvZy9jcmVhdGluZy1hbi1hbmd1bGFyLWRpcmVjdGl2ZS10by1kZXRlY3QtY2xpY2tpbmctb3V0c2lkZS1hbi1vYmplY3QtYWZkNmMwNzIxMmVmXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1thcGx6Q2xpY2tPdXRzaWRlXScsXHJcbiAgZXhwb3J0QXM6ICdjbGlja091dHNpZGUnLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnX19vbkNsaWNrKCRldmVudCwgJGV2ZW50LnRhcmdldCknLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGxhem9DbGlja091dHNpZGVEaXJlY3RpdmUge1xyXG4gIHJlYWRvbmx5ICNlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiA9IGluamVjdChFbGVtZW50UmVmKTtcclxuXHJcbiAgQE91dHB1dCgpIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgX19vbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPVxyXG4gICAgICB0aGlzLiNlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XHJcbiAgICBpZiAoIWNsaWNrZWRJbnNpZGUpIHtcclxuICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==