export interface Theme {
  colors: Colors;
  size: number[];
  typography: Typography;
}

export interface Colors {
  orange: WeightedColor;
  green: WeightedColor;
  red: WeightedColor;
  darkGrey: string;
}

export interface WeightedColor {
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
}

export interface Typography {
  fontFamily: string;
}
