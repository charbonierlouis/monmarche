import { createContext, useContext } from "react";

import { dark, Theme } from "../constants/themes";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: dark,
  setTheme: () => console.warn("no theme provider"),
});

export const useTheme = () => useContext(ThemeContext);
