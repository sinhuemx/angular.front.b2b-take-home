/** Must be the same as in tailwind screens preset */
export declare const SCREENS: {
    readonly xs: "375px";
    readonly sm: "540px";
    readonly md: "720px";
    readonly lg: "960px";
    readonly xl: "1140px";
    readonly '2xl': "1320px";
    readonly '3xl': "1440px";
    readonly '4xl': "1680px";
    readonly '5xl': "1920px";
};
export type Screen = typeof SCREENS[keyof typeof SCREENS];
export type MediaQueryScreen = `screen and (min-width: ${Screen})`;
export interface MediaQueryResult {
    matches: boolean;
}
