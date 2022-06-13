export enum ColorKey {
    PRIMARY = "PRIMARY",
    BACKGROUND = "BACKGROUND"
}

export type ColorPalatte = {
    [key in ColorKey]: string;
};

export const COLORS = {
    DARK_GREEN: "#043400",
    OFF_WHITE: "#FFFAFA",
    BLACK: "#000000"
};

export const LIGHT_COLORS: ColorPalatte = {
    PRIMARY: "#043400",
    BACKGROUND: "#FFFAFA"
};

export const DARK_COLORS: ColorPalatte = {
    PRIMARY: "#4ECDC4",
    BACKGROUND: "#121212"
};

export function getColor(colorKey: keyof ColorPalatte) {
    var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches;
    return prefersDarkScheme ? DARK_COLORS[colorKey] : LIGHT_COLORS[colorKey];
}
