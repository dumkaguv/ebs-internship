type ShadeKey =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type ColorType = "grey" | "primary";

type ShadePalette<Color extends ColorType> = {
  [key in `${Color}${ShadeKey}`]: string;
};

type ColorPalette = {
  grey: ShadePalette<"grey">;
  primary: ShadePalette<"primary">;
};

type ThemeCommon = {
  common: { black: string; white: string };
};

type FullTokenCustom = ThemeCommon & ColorPalette;

declare module "antd-style" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
  interface FullToken extends FullTokenCustom {}
}

const GREY = {
  grey100: "#f1f5f9",
  grey200: "#EAECF0",
  grey300: "#cbd5e1",
  grey400: "#98A2B3",
  grey500: "#667085",
  grey600: "#475467",
  grey700: "#334155",
  grey800: "#1d2939",
  grey900: "#0F172A",
};

const PRIMARY = {
  primary100: "#e0f2fe",
  primary200: "#E9FBC7",
  primary300: "#DAFB99",
  primary400: "#CBFC6A",
  primary500: "#3b82f6",
  primary600: "#A3D831",
  primary700: "#84B41F",
  primary800: "#699016",
  primary900: "#384D0B",
};

export const customThemePalette: FullTokenCustom = {
  common: { black: "#000000", white: "#FFFFFF" },
  primary: PRIMARY,
  grey: GREY,
};
