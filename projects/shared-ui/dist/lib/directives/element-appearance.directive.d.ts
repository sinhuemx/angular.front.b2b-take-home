import * as i0 from "@angular/core";
export declare const ELEMENT_APPEARANCES: readonly ["solid", "stroked", "basic"];
export type ElementAppearance = typeof ELEMENT_APPEARANCES[number];
export declare class AplazoElementAppearanceDirective {
    #private;
    set aplzAppearance(value: ElementAppearance | null);
    get class(): "aplazo-element-appearance--solid" | "aplazo-element-appearance--stroked" | "aplazo-element-appearance--basic";
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoElementAppearanceDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AplazoElementAppearanceDirective, "[aplzAppearance]", never, { "aplzAppearance": { "alias": "aplzAppearance"; "required": false; }; }, {}, never, never, true, never>;
}
