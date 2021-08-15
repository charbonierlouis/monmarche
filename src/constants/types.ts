export interface Moovie {
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  backdrop_path?: string;
  poster_path?: string;
}

export interface Result {
  page: number;
  results: Array<Moovie>;
  total_results: number;
  total_pages: number;
}
