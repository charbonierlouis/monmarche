import { useTheme } from "../../contexts/theme";
import {
  Container,
  Title,
  LeftContainer,
  CenterContainer,
  RightContainer,
} from "./styles";
import BackButton from "../BackButton";
import SwitchTheme from "../SwitchTheme";

interface Props {
  back?: boolean;
}

const Header = ({ back }: Props) => {
  const { theme } = useTheme();
  return (
    <Container backgroundColor={theme.header} color={theme.white}>
      <LeftContainer>{back && <BackButton />}</LeftContainer>
      <CenterContainer>
        <Title>Moovies</Title>
      </CenterContainer>
      <RightContainer>
        <SwitchTheme />
      </RightContainer>
    </Container>
  );
};

export default Header;
