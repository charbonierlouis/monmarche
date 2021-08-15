import { Container, SubContainer } from "../../components/Screen/";
import { useMoovie } from "../../contexts/moovie";
import { useTheme } from "../../contexts/theme";
import { imageUrl } from "../../services/api";
import {
  Title,
  Content,
  TextContainer,
  Description,
  Rate,
  Image,
} from "./styles";
import Header from "../../components/Header";

const MoovieScreen = () => {
  const { selectedMoovie } = useMoovie();
  const { theme } = useTheme();

  if (!selectedMoovie) return null;

  const { title, overview, vote_average, poster_path } = selectedMoovie;

  return (
    <Container background={theme.background}>
      <Header back />
      <SubContainer>
        <Content>
          <TextContainer color={theme.text}>
            <Title>{title}</Title>
            <Description>{overview}</Description>
            <Rate>{vote_average}/10</Rate>
          </TextContainer>
          <Image src={imageUrl + poster_path} />
        </Content>
      </SubContainer>
    </Container>
  );
};

export default MoovieScreen;
