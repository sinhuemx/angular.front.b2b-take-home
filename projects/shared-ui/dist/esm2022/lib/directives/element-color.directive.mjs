import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
export const ELEMENT_COLORS = [
    'light',
    'dark',
    'aplazo',
    'accent',
    'success',
    'danger',
    'warning',
    'info',
    'disabled',
];
export class AplazoElementColorDirective {
    set aplzColor(value) {
        if (value == null || !ELEMENT_COLORS.includes(value)) {
            this.#color = 'aplazo-element-color--light';
            return;
        }
        switch (value) {
            case 'dark':
                this.#color = 'aplazo-element-color--dark';
                break;
            case 'aplazo':
                this.#color = 'aplazo-element-color--aplazo';
                break;
            case 'accent':
                this.#color = 'aplazo-element-color--accent';
                break;
            case 'success':
                this.#color = 'aplazo-element-color--success';
                break;
            case 'danger':
                this.#color = 'aplazo-element-color--danger';
                break;
            case 'warning':
                this.#color = 'aplazo-element-color--warning';
                break;
            case 'info':
                this.#color = 'aplazo-element-color--info';
                break;
            case 'disabled':
                this.#color = 'aplazo-element-color--disabled';
                break;
            case 'light':
            default:
                this.#color = 'aplazo-element-color--light';
        }
    }
    get class() {
        return this.#color;
    }
    #color = 'aplazo-element-color--light';
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: AplazoElementColorDirective, isStandalone: true, selector: "[aplzColor]", inputs: { aplzColor: "aplzColor" }, host: { properties: { "class": "this.class" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoElementColorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[aplzColor]',
                    standalone: true,
                }]
        }], propDecorators: { aplzColor: [{
                type: Input
            }], class: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1jb2xvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2RpcmVjdGl2ZXMvZWxlbWVudC1jb2xvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUc7SUFDNUIsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0NBQ0YsQ0FBQztBQU9YLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsSUFDSSxTQUFTLENBQUMsS0FBMEI7UUFDdEMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsNkJBQTZCLENBQUM7WUFFNUMsT0FBTztRQUNULENBQUM7UUFFRCxRQUFRLEtBQUssRUFBRSxDQUFDO1lBQ2QsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLDhCQUE4QixDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsK0JBQStCLENBQUM7Z0JBQzlDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyw4QkFBOEIsQ0FBQztnQkFDN0MsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsTUFBTSxHQUFHLCtCQUErQixDQUFDO2dCQUM5QyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsNEJBQTRCLENBQUM7Z0JBQzNDLE1BQU07WUFDUixLQUFLLFVBQVU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQ0FBZ0MsQ0FBQztnQkFDL0MsTUFBTTtZQUNSLEtBQUssT0FBTyxDQUFDO1lBQ2I7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBNkIsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQ0ksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTSxHQUNKLDZCQUE2QixDQUFDOytHQTdDckIsMkJBQTJCO21HQUEzQiwyQkFBMkI7OzRGQUEzQiwyQkFBMkI7a0JBSnZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFHSyxTQUFTO3NCQURaLEtBQUs7Z0JBd0NGLEtBQUs7c0JBRFIsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjb25zdCBFTEVNRU5UX0NPTE9SUyA9IFtcclxuICAnbGlnaHQnLFxyXG4gICdkYXJrJyxcclxuICAnYXBsYXpvJyxcclxuICAnYWNjZW50JyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2RhbmdlcicsXHJcbiAgJ3dhcm5pbmcnLFxyXG4gICdpbmZvJyxcclxuICAnZGlzYWJsZWQnLFxyXG5dIGFzIGNvbnN0O1xyXG5leHBvcnQgdHlwZSBFbGVtZW50Q29sb3IgPSB0eXBlb2YgRUxFTUVOVF9DT0xPUlNbbnVtYmVyXTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwbHpDb2xvcl0nLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGxhem9FbGVtZW50Q29sb3JEaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGFwbHpDb2xvcih2YWx1ZTogRWxlbWVudENvbG9yIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgIUVMRU1FTlRfQ09MT1JTLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0tbGlnaHQnO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAnZGFyayc6XHJcbiAgICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWRhcmsnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhcGxhem8nOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1hcGxhem8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdhY2NlbnQnOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1hY2NlbnQnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICB0aGlzLiNjb2xvciA9ICdhcGxhem8tZWxlbWVudC1jb2xvci0tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XHJcbiAgICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWRhbmdlcic7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS13YXJuaW5nJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWluZm8nO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkaXNhYmxlZCc6XHJcbiAgICAgICAgdGhpcy4jY29sb3IgPSAnYXBsYXpvLWVsZW1lbnQtY29sb3ItLWRpc2FibGVkJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbGlnaHQnOlxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuI2NvbG9yID0gJ2FwbGF6by1lbGVtZW50LWNvbG9yLS1saWdodCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBnZXQgY2xhc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jY29sb3I7XHJcbiAgfVxyXG4gICNjb2xvcjogYGFwbGF6by1lbGVtZW50LWNvbG9yLS0ke0VsZW1lbnRDb2xvcn1gID1cclxuICAgICdhcGxhem8tZWxlbWVudC1jb2xvci0tbGlnaHQnO1xyXG59XHJcbiJdfQ==