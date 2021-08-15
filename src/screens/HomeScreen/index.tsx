import * as React from "react";

import { Container, SubContainer } from "../../components/Screen";
import { Moovie } from "../../constants/types";
import { useTheme } from "../../contexts/theme";
import { getPopularMoovies, searchMoovie } from "../../services/api";
import Header from "../../components/Header";
import FilmList from "../../components/MoovieList";
import SearchBar from "../../components/SearchBar";

const HomeScreen = () => {
  const [popularMoovies, setPopularMoovies] = React.useState<Array<Moovie>>([]);
  const [searchedMoovies, setSearchedMoovies] = React.useState<Array<Moovie>>(
    []
  );
  const [haveSearch, setHaveSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { theme } = useTheme();

  React.useEffect(() => {
    const loadData = async () => {
      const resPopularMoovies = await getPopularMoovies();
      setPopularMoovies(resPopularMoovies.results);
    };
    loadData();
  }, []);

  React.useEffect(() => {
    const loadSearch = async () => {
      const resSearchedMoovies = await searchMoovie(searchValue);
      setHaveSearch(true);
      setSearchedMoovies(resSearchedMoovies.results);
    };

    if (searchValue) {
      loadSearch();
    } else {
      setHaveSearch(false);
      setSearchedMoovies([]);
    }
  }, [searchValue]);

  return (
    <Container background={theme.background}>
      <Header />
      <SubContainer>
        <SearchBar onChange={setSearchValue} />
        <FilmList moovies={haveSearch ? searchedMoovies : popularMoovies} />
      </SubContainer>
    </Container>
  );
};

export default HomeScreen;
