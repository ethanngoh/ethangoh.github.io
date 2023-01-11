export enum ColorKey {
    PRIMARY = "PRIMARY",
    BACKGROUND = "BACKGROUND",
    HEADING = "HEADING"
}

export type ColorPalette = {
    [key in ColorKey]: string;
};

export const COLORS = {
    DARK_GREEN: "#043400",
    OFF_WHITE: "#FFFAFA",
    BLACK: "#000000"
};

export const LIGHT_COLORS: ColorPalette = {
    PRIMARY: "#000",
    BACKGROUND: "#FFFAFA",
    HEADING: "#043400"
};

export const DARK_COLORS: ColorPalette = {
    PRIMARY: "#FFF",
    BACKGROUND: "#1E1E26",
    HEADING: "#1DCEF5"
};

export function getColor(colorKey: keyof ColorPalette) {
    var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
