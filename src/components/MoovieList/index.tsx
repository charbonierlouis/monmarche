import { Moovie } from "../../constants/types";
import { Container } from "./styles";
import MoovieCard from "../MoovieCard";

interface Props {
  moovies: Array<Moovie>;
}

const FilmList = ({ moovies }: Props) => {
  return (
    <Container>
      {moovies.map((moovie, key) => (
        <MoovieCard key={key} moovie={moovie} />
      ))}
    </Container>
  );
};

export default FilmList;
