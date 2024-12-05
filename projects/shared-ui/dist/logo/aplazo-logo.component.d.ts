import * as i0 from "@angular/core";
export declare const LOGO_SIZE: readonly ["sm", "md", "base", "lg", "xl"];
export type LogoSize = (typeof LOGO_SIZE)[number];
/** ## Usage
 *
 * ### Import the component
 *
 * ```ts
 * // within the component that is using the logo
 * import { AplazoLogoComponent } from '@apz/shared-ui/logo';
 * ```
 *
 * ### Declare in the imports
 *
 * ```ts
 * // within the component that is using the logo
 * @Component({
 * ...,
 * standalone: true,
 * imports: [
 *  ...,
 * AplazoLogoComponent,
 * ],
 * ```
 *
 * ### Use the component
 *
 * ```html
 * <aplz-ui-logo size="sm"></aplz-ui-logo>
 * ```
 *
 * > Note: the NgOptimizedImage Directive throws a warning if there is no preconnect tag in the head of the document.
 *
 * > Preconnecting to the origin(s) that serve priority images ensures that these images are delivered as soon as possible. To fix this, please add the following element into the <head> of the document: <link rel="preconnect" href="https://aplazoassets.s3.us-west-2.amazonaws.com">
 *
 */
export declare class AplazoLogoComponent {
    #private;
    get width(): number;
    get height(): number;
    get logoContainerClassnames(): string;
    /** @ignore */
    readonly logoUrl: string;
    /** Sets the size of the logo
     *
     * @default base
     */
    set size(value: LogoSize | null);
    static ɵfac: i0.ɵɵFactoryDeclaration<AplazoLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AplazoLogoComponent, "aplz-ui-logo", never, { "size": { "alias": "size"; "required": false; }; }, {}, never, never, true, never>;
}
