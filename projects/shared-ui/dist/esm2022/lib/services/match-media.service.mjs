/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { combineLatest, fromEvent, map, of, shareReplay, startWith, } from 'rxjs';
import * as i0 from "@angular/core";
/** Simple service to match screen media queries
 *
 * Only works in the browser, so it's important to use it only in components.
 *
 * The screen sizes are the same as in tailwind screens preset.
 * and we have an entity that describes the screen sizes within entities/screens.ts
 *
 * inspired by:
 * https://admin.indepth.dev/responsive-angular/
 *
 */
export class AplazoMatchMediaService {
    constructor() {
        this.#platformId = inject(PLATFORM_ID);
        this.#window = inject(DOCUMENT).defaultView;
        this.matchXsScreen$ = this.match$('screen and (min-width: 375px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 375px)')));
        this.matchSmScreen$ = this.match$('screen and (min-width: 540px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 540px)')));
        this.matchMdScreen$ = this.match$('screen and (min-width: 720px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 720px)')));
        this.matchLgScreen$ = this.match$('screen and (min-width: 960px)').pipe(startWith({ matches: this.#window?.matchMedia('screen and (min-width: 960px)').matches ?? false }));
        this.matchXlScreen$ = this.match$('screen and (min-width: 1140px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1140px)')));
        this.match2xlScreen$ = this.match$('screen and (min-width: 1320px)').pipe(startWith(this.#window?.matchMedia('screen and (min-width: 1320px)')));
        /** Stream with the size of the screen
         * @description
         * The screen sizes are the same as in tailwind screens preset.
         * @example
         * this.aplazoMatchMediaService.screenSize$.subscribe((size) => {
         *  console.log(size); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
         * });
         */
        this.screenSize$ = () => {
            if (!isPlatformBrowser(this.#platformId) || this.#window == null) {
                return of('xs');
            }
            return combineLatest({
                xs: this.matchMedia('screen and (min-width: 375px)'),
                sm: this.matchMedia('screen and (min-width: 540px)'),
                md: this.matchMedia('screen and (min-width: 720px)'),
                lg: this.matchMedia('screen and (min-width: 960px)'),
                xl: this.matchMedia('screen and (min-width: 1140px)'),
                '2xl': this.matchMedia('screen and (min-width: 1320px)'),
                '3xl': this.matchMedia('screen and (min-width: 1440px)'),
                '4xl': this.matchMedia('screen and (min-width: 1680px)'),
                '5xl': this.matchMedia('screen and (min-width: 1920px)'),
            }).pipe(map((sizes) => Object.entries(sizes)
                .map(([size, matches]) => (matches ? size : null))
                .filter(Boolean)
                .pop() ?? 'xs'));
        };
    }
    #platformId;
    #window;
    match$(mediaQueryList) {
        return this.#window == null
            ? of({ matches: false })
            : fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(map((matchEvent) => ({
                matches: matchEvent.matches
            })), shareReplay(1));
    }
    syncMatch(mediaQueryList) {
        return this.#window?.matchMedia(mediaQueryList).matches ?? false;
    }
    matchMedia(mediaQueryList) {
        return fromEvent(this.#window.matchMedia(mediaQueryList), 'change').pipe(startWith(this.#window.matchMedia(mediaQueryList)), map((evt) => evt.matches));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: AplazoMatchMediaService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZXMvbWF0Y2gtbWVkaWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2REFBNkQ7QUFDN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBRUwsYUFBYSxFQUNiLFNBQVMsRUFDVCxHQUFHLEVBQ0gsRUFBRSxFQUNGLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxNQUFNLENBQUM7O0FBSWQ7Ozs7Ozs7Ozs7R0FVRztBQUVILE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFVyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxZQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUVoRCxtQkFBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQ3JFLENBQUM7UUFDRixtQkFBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQ3JFLENBQUM7UUFDRixtQkFBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQ2hFLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQ3JFLENBQUM7UUFDRixtQkFBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQ2hFLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUNuRyxDQUFDO1FBQ0YsbUJBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUNqRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1FBQ0Ysb0JBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1FBRUY7Ozs7Ozs7V0FPRztRQUNILGdCQUFXLEdBQTZCLEdBQUcsRUFBRTtZQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ2pFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxPQUFPLGFBQWEsQ0FBQztnQkFDbkIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUM7Z0JBQ3BELEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDO2dCQUNwRCxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDcEQsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUM7Z0JBQ3BELEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDeEQsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUM7Z0JBQ3hELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxDQUFDO2dCQUN4RCxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUN6RCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FDRCxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ1IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDZixHQUFHLEVBQUUsSUFBSSxJQUFJLENBQ25CLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQztLQTZCSDtJQWxGVSxXQUFXLENBQXVCO0lBQ2xDLE9BQU8sQ0FBZ0M7SUFzRGhELE1BQU0sQ0FBQyxjQUFnQztRQUNyQyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUN6QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxTQUFTLENBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQ3ZDLFFBQVEsQ0FDVCxDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxVQUFVLENBQUMsT0FBTzthQUM1QixDQUFDLENBQUMsRUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQ2YsQ0FBQztJQUNSLENBQUM7SUFFRCxTQUFTLENBQUMsY0FBZ0M7UUFDeEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO0lBQ25FLENBQUM7SUFFTyxVQUFVLENBQUMsY0FBZ0M7UUFDakQsT0FBTyxTQUFTLENBQ2QsSUFBSSxDQUFDLE9BQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQ3hDLFFBQVEsQ0FDVCxDQUFDLElBQUksQ0FDSixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsRUFDbkQsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDOytHQWxGVSx1QkFBdUI7bUhBQXZCLHVCQUF1QixjQURWLE1BQU07OzRGQUNuQix1QkFBdUI7a0JBRG5DLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvbiAqL1xyXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQTEFURk9STV9JRCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgT2JzZXJ2YWJsZSxcclxuICBjb21iaW5lTGF0ZXN0LFxyXG4gIGZyb21FdmVudCxcclxuICBtYXAsXHJcbiAgb2YsXHJcbiAgc2hhcmVSZXBsYXksXHJcbiAgc3RhcnRXaXRoLFxyXG59IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZWRpYVF1ZXJ5U2NyZWVuLCBNZWRpYVF1ZXJ5UmVzdWx0LCBTQ1JFRU5TIH0gZnJvbSAnLi4vZW50aXRpZXMvc2NyZWVucyc7XHJcblxyXG5cclxuLyoqIFNpbXBsZSBzZXJ2aWNlIHRvIG1hdGNoIHNjcmVlbiBtZWRpYSBxdWVyaWVzXHJcbiAqXHJcbiAqIE9ubHkgd29ya3MgaW4gdGhlIGJyb3dzZXIsIHNvIGl0J3MgaW1wb3J0YW50IHRvIHVzZSBpdCBvbmx5IGluIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIFRoZSBzY3JlZW4gc2l6ZXMgYXJlIHRoZSBzYW1lIGFzIGluIHRhaWx3aW5kIHNjcmVlbnMgcHJlc2V0LlxyXG4gKiBhbmQgd2UgaGF2ZSBhbiBlbnRpdHkgdGhhdCBkZXNjcmliZXMgdGhlIHNjcmVlbiBzaXplcyB3aXRoaW4gZW50aXRpZXMvc2NyZWVucy50c1xyXG4gKlxyXG4gKiBpbnNwaXJlZCBieTpcclxuICogaHR0cHM6Ly9hZG1pbi5pbmRlcHRoLmRldi9yZXNwb25zaXZlLWFuZ3VsYXIvXHJcbiAqXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXBsYXpvTWF0Y2hNZWRpYVNlcnZpY2Uge1xyXG4gIHJlYWRvbmx5ICNwbGF0Zm9ybUlkID0gaW5qZWN0KFBMQVRGT1JNX0lEKTtcclxuICByZWFkb25seSAjd2luZG93ID0gaW5qZWN0KERPQ1VNRU5UKS5kZWZhdWx0VmlldztcclxuXHJcbiAgbWF0Y2hYc1NjcmVlbiQgPSB0aGlzLm1hdGNoJCgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdz8ubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCknKSlcclxuICApO1xyXG4gIG1hdGNoU21TY3JlZW4kID0gdGhpcy5tYXRjaCQoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpJykucGlwZShcclxuICAgIHN0YXJ0V2l0aCh0aGlzLiN3aW5kb3c/Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTQwcHgpJykpXHJcbiAgKTtcclxuICBtYXRjaE1kU2NyZWVuJCA9IHRoaXMubWF0Y2gkKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KScpLnBpcGUoXHJcbiAgICBzdGFydFdpdGgodGhpcy4jd2luZG93Py5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KScpKVxyXG4gICk7XHJcbiAgbWF0Y2hMZ1NjcmVlbiQgPSB0aGlzLm1hdGNoJCgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHsgbWF0Y2hlczogdGhpcy4jd2luZG93Py5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KScpLm1hdGNoZXMgPz8gZmFsc2UgfSksXHJcbiAgKTtcclxuICBtYXRjaFhsU2NyZWVuJCA9IHRoaXMubWF0Y2gkKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExNDBweCknKS5waXBlKFxyXG4gICAgc3RhcnRXaXRoKHRoaXMuI3dpbmRvdz8ubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQwcHgpJykpXHJcbiAgKTtcclxuICBtYXRjaDJ4bFNjcmVlbiQgPSB0aGlzLm1hdGNoJCgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzIwcHgpJykucGlwZShcclxuICAgIHN0YXJ0V2l0aCh0aGlzLiN3aW5kb3c/Lm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMyMHB4KScpKVxyXG4gICk7XHJcblxyXG4gIC8qKiBTdHJlYW0gd2l0aCB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIHNjcmVlbiBzaXplcyBhcmUgdGhlIHNhbWUgYXMgaW4gdGFpbHdpbmQgc2NyZWVucyBwcmVzZXQuXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiB0aGlzLmFwbGF6b01hdGNoTWVkaWFTZXJ2aWNlLnNjcmVlblNpemUkLnN1YnNjcmliZSgoc2l6ZSkgPT4ge1xyXG4gICAqICBjb25zb2xlLmxvZyhzaXplKTsgLy8gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnMnhsJyB8ICczeGwnIHwgJzR4bCcgfCAnNXhsJ1xyXG4gICAqIH0pO1xyXG4gICAqL1xyXG4gIHNjcmVlblNpemUkOiAoKSA9PiBPYnNlcnZhYmxlPHN0cmluZz4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMuI3BsYXRmb3JtSWQpIHx8IHRoaXMuI3dpbmRvdyA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBvZigneHMnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHtcclxuICAgICAgeHM6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCknKSxcclxuICAgICAgc206IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCknKSxcclxuICAgICAgbWQ6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCknKSxcclxuICAgICAgbGc6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknKSxcclxuICAgICAgeGw6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTQwcHgpJyksXHJcbiAgICAgICcyeGwnOiB0aGlzLm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTMyMHB4KScpLFxyXG4gICAgICAnM3hsJzogdGhpcy5tYXRjaE1lZGlhKCdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCknKSxcclxuICAgICAgJzR4bCc6IHRoaXMubWF0Y2hNZWRpYSgnc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjgwcHgpJyksXHJcbiAgICAgICc1eGwnOiB0aGlzLm1hdGNoTWVkaWEoJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KScpLFxyXG4gICAgfSkucGlwZShcclxuICAgICAgbWFwKFxyXG4gICAgICAgIChzaXplcykgPT5cclxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHNpemVzKVxyXG4gICAgICAgICAgICAubWFwKChbc2l6ZSwgbWF0Y2hlc10pID0+IChtYXRjaGVzID8gc2l6ZSA6IG51bGwpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgIC5wb3AoKSA/PyAneHMnXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgbWF0Y2gkKG1lZGlhUXVlcnlMaXN0OiBNZWRpYVF1ZXJ5U2NyZWVuKTogT2JzZXJ2YWJsZTxNZWRpYVF1ZXJ5UmVzdWx0PiB7XHJcbiAgICByZXR1cm4gdGhpcy4jd2luZG93ID09IG51bGxcclxuICAgICAgPyBvZih7IG1hdGNoZXM6IGZhbHNlIH0pXHJcbiAgICAgIDogZnJvbUV2ZW50PE1lZGlhUXVlcnlMaXN0RXZlbnQ+KFxyXG4gICAgICAgICAgdGhpcy4jd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeUxpc3QpLFxyXG4gICAgICAgICAgJ2NoYW5nZSdcclxuICAgICAgICApLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKG1hdGNoRXZlbnQpID0+ICh7XHJcbiAgICAgICAgICAgIG1hdGNoZXM6IG1hdGNoRXZlbnQubWF0Y2hlc1xyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgc2hhcmVSZXBsYXkoMSlcclxuICAgICAgICApO1xyXG4gIH1cclxuXHJcbiAgc3luY01hdGNoKG1lZGlhUXVlcnlMaXN0OiBNZWRpYVF1ZXJ5U2NyZWVuKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy4jd2luZG93Py5tYXRjaE1lZGlhKG1lZGlhUXVlcnlMaXN0KS5tYXRjaGVzID8/IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKG1lZGlhUXVlcnlMaXN0OiBNZWRpYVF1ZXJ5U2NyZWVuKSB7XHJcbiAgICByZXR1cm4gZnJvbUV2ZW50PE1lZGlhUXVlcnlMaXN0RXZlbnQ+KFxyXG4gICAgICB0aGlzLiN3aW5kb3chLm1hdGNoTWVkaWEobWVkaWFRdWVyeUxpc3QpLFxyXG4gICAgICAnY2hhbmdlJ1xyXG4gICAgKS5waXBlKFxyXG4gICAgICBzdGFydFdpdGgodGhpcy4jd2luZG93IS5tYXRjaE1lZGlhKG1lZGlhUXVlcnlMaXN0KSksXHJcbiAgICAgIG1hcCgoZXZ0KSA9PiBldnQubWF0Y2hlcylcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==