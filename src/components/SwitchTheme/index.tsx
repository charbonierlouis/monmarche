import * as React from "react";
import Switch from "@material-ui/core/Switch";

import { ThemeType, light, dark } from "../../constants/themes";
import { useTheme } from "../../contexts/theme";
import { Container, Left, Right, Icon } from "./styles";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = React.useState(theme.type === ThemeType.Dark);

  const handleChangeTheme = () => {
    setChecked(!checked);
    switch (theme.type) {
      case ThemeType.Light:
        setTheme(dark);
        break;
      case ThemeType.Dark:
        setTheme(light);
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Left>
        <Icon className="material-icons">light_mode</Icon>
      </Left>
      <Switch
        size="small"
        checked={checked}
        onChange={handleChangeTheme}
        color="default"
      />
      <Right>
        <Icon className="material-icons">mode_night</Icon>
      </Right>
    </Container>
  );
};

export default SwitchTheme;
