export enum ColorKey {
    PRIMARY = "PRIMARY",
    BACKGROUND = "BACKGROUND"
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
    PRIMARY: "#043400",
    BACKGROUND: "#FFFAFA"
};

export const DARK_COLORS: ColorPalette = {
    PRIMARY: "#4ECDC4",
    BACKGROUND: "#121212"
};

export function getColor(colorKey: keyof ColorPalette) {
    var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}