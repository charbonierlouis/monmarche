import * as React from "react";
import { Redirect } from "react-router-dom";

import { Moovie } from "../../constants/types";
import { useMoovie } from "../../contexts/moovie";
import { imageUrl } from "../../services/api";
import { Container, Overlay, Image, Content, Title } from "./styles";
import _routes from "../../constants/routes";

interface Props {
  moovie: Moovie;
}

const MoovieCard = ({ moovie }: Props) => {
  const { setSelectedMoovie } = useMoovie();
  const [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setSelectedMoovie(moovie);
    setRedirect(true);
  };

  if (redirect) return <Redirect to={_routes.Moovie} />;

  return (
    <Container onClick={handleClick}>
      <Overlay />
      <Image src={imageUrl + moovie.poster_path} />
      <Content>
        <Title>{moovie.title}</Title>
      </Content>
    </Container>
  );
};

export default MoovieCard;
