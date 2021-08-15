import { Result } from "../constants/types";

const apikey = "9238b69ba1204ef60aa9f6a68d7a6508";

const baseURL = "https://api.themoviedb.org/3";

const apiCall = (url: string): Promise<Result> =>
  fetch(`${url}&api_key=${apikey}`).then((data) => data.json());

export const imageUrl = "https://image.tmdb.org/t/p/original";

export const getPopularMoovies = async (): Promise<Result> =>
  await apiCall(`${baseURL}/movie/popular?language=fr-FR`);

export const searchMoovie = async (value: string): Promise<Result> =>
  await apiCall(`${baseURL}/search/movie?query=${value}&language=fr-FR`);
