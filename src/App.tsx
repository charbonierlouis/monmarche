import * as React from "react";

import { MooviePersistorProvider } from "./contexts/moovie";
import { Theme, light } from "./constants/themes";
import { ThemeContext } from "./contexts/theme";
import AppNavigator from "./navigation/app";

export default () => {
  const [theme, setTheme] = React.useState<Theme>(light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MooviePersistorProvider>
        <AppNavigator />
      </MooviePersistorProvider>
    </ThemeContext.Provider>
  );
};
