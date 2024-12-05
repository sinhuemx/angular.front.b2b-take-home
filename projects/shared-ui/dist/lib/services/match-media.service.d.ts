import { Observable } from 'rxjs';
import { MediaQueryScreen, MediaQueryResult } from '../entities/screens';
import * as i0 from "@angular/core";

export declare class AplazoMatchMediaService {
    #private;
    matchXsScreen$: Observable<MediaQueryResult | MediaQueryList | undefined>;
    matchSmScreen$: Observable<MediaQueryResult | MediaQueryList | undefined>;
    matchMdScreen$: Observable<MediaQueryResult | MediaQueryList | undefined>;
    matchLgScreen$: Observable<MediaQueryResult | {
        matches: boolean;
    }>;
    matchXlScreen$: Observable<MediaQueryResult | MediaQueryList | undefined>;
    match2xlScreen$: Observable<MediaQueryResult | MediaQueryList | undefined>;

    screenSize$: () => Observable<string>;
    match$(mediaQueryList: MediaQueryScreen): Observable<MediaQueryResult>;
    syncMatch(mediaQueryList: MediaQueryScreen): boolean;
    private matchMedia;
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoMatchMediaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AplazoMatchMediaService>;
}
