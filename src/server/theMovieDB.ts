import fetch from 'node-fetch';

const { THE_MOVIE_DB_KEY } = process.env;

if (!THE_MOVIE_DB_KEY) {
  throw new Error('process.env.THE_MOVIE_DB_KEY is missing');
}

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

type ErrorResult = {
  status_message: string;
  status_code: number;
};
async function fetchTheMovieDB<T>(path: string, query = ''): Promise<T> {
  let url = `${BASE_URL}${path}?`;
  if (query) {
    url += `${query}&`;
  }
  url += `api_key=${THE_MOVIE_DB_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    throw {
      message: errorResult.status_message,
      code: errorResult.status_code,
    };
  }
  const result: T = await response.json();
  return result;
}

type PopularMoviesResult = {
  page: number;
  results: {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }[];
  total_results: number;
  total_pages: number;
};

type PopularMovie = {
  id: number;
  title: string;
  genreIds: number[];
  posterPath: string | null;
};
/**
 * Get a list of the current popular movies on TMDB. This list updates daily.
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export async function getPopularMovies(): Promise<PopularMovie[]> {
  const result = await fetchTheMovieDB<PopularMoviesResult>('/movie/popular');
  const popularMovies = result.results.map((result) => ({
    id: result.id,
    title: result.title,
    posterPath: `${IMAGE_BASE_URL}${result.poster_path}`,
    genreIds: result.genre_ids,
  }));
  return popularMovies;
}
