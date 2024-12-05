import * as i0 from "@angular/core";
import * as i1 from "@apz/shared-ui";
export declare class AplazoButtonComponent {
    #private;
    set class(value: string | null);
    get class(): string | null;
    set fullWidth(value: boolean | undefined);
    set rounded(value: boolean | undefined);
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AplazoButtonComponent, "button[aplzButton], a[aplzButton]", never, { "class": { "alias": "class"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; }, {}, never, ["*"], true, [{ directive: typeof i1.AplazoElementAppearanceDirective; inputs: { "aplzAppearance": "aplzAppearance"; }; outputs: {}; }, { directive: typeof i1.AplazoElementColorDirective; inputs: { "aplzColor": "aplzColor"; }; outputs: {}; }, { directive: typeof i1.AplazoElementDisabledDirective; inputs: { "disabled": "disabled"; }; outputs: {}; }, { directive: typeof i1.AplazoElementPreventClickDirective; inputs: {}; outputs: {}; }, { directive: typeof i1.AplazoCommonSizeDirective; inputs: { "size": "size"; }; outputs: {}; }]>;
}
