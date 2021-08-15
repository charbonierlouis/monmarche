export enum ThemeType {
  Light,
  Dark,
}

export interface Theme {
  type: ThemeType;
  header: string;
  background: string;
  text: string;
  white: string;
}

export const light = {
  type: ThemeType.Light,
  header: "#60A5FA",
  background: "#FFFFFF",
  text: "#000000",
  white: "#FFFFFF",
};

export const dark = {
  type: ThemeType.Dark,
  header: "#1F2937",
  background: "#4B5563",
  text: "#FFFFFF",
  white: "#FFFFFF",
};
