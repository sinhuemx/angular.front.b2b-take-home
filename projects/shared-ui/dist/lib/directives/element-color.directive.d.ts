import * as i0 from "@angular/core";
export declare const ELEMENT_COLORS: readonly ["light", "dark", "aplazo", "accent", "success", "danger", "warning", "info", "disabled"];
export type ElementColor = typeof ELEMENT_COLORS[number];
export declare class AplazoElementColorDirective {
    #private;
    set aplzColor(value: ElementColor | null);
    get class(): "aplazo-element-color--light" | "aplazo-element-color--dark" | "aplazo-element-color--aplazo" | "aplazo-element-color--accent" | "aplazo-element-color--success" | "aplazo-element-color--danger" | "aplazo-element-color--warning" | "aplazo-element-color--info" | "aplazo-element-color--disabled";
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoElementColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AplazoElementColorDirective, "[aplzColor]", never, { "aplzColor": { "alias": "aplzColor"; "required": false; }; }, {}, never, never, true, never>;
}
