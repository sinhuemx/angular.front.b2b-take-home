import * as i0 from "@angular/core";
export declare const COMMON_SIZE: readonly ["xs", "sm", "md", "lg", "xl", "2xl"];
export type CommonSize = typeof COMMON_SIZE[number];
export declare class AplazoCommonSizeDirective {
    #private;
    set size(value: CommonSize | null);
    get class(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoCommonSizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AplazoCommonSizeDirective, "[aplzCommonSize]", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
