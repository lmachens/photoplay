import fetch from 'node-fetch';
import { Movie, PopularMovie } from '../types';

const { THE_MOVIE_DB_KEY } = process.env;

if (!THE_MOVIE_DB_KEY) {
  throw new Error('process.env.THE_MOVIE_DB_KEY is missing');
}

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

type ErrorResult = {
  status_message: string;
  status_code: number;
};
async function fetchTheMovieDB<T>(path: string, query = ''): Promise<T> {
  let url = `${BASE_URL}${path}?`;
  if (query) {
    url += `query=${query}&`;
  }
  url += `api_key=${THE_MOVIE_DB_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorResult: ErrorResult = await response.json();
    throw {
      message: errorResult.status_message,
      theMovieDBCode: errorResult.status_code,
      status: response.status,
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

/**
 * Get a list of the current popular movies on TMDB. This list updates daily.
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 */
export async function getPopularMovies(): Promise<PopularMovie[]> {
  const result = await fetchTheMovieDB<PopularMoviesResult>('/movie/popular');
  const popularMovies: PopularMovie[] = result.results.map((result) => ({
    id: result.id,
    title: result.title,
    posterPath: `${IMAGE_BASE_URL}${result.poster_path}`,
    genreIds: result.genre_ids,
  }));
  return popularMovies;
}

type MovieResult = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | unknown;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type CreditsResult = {
  id: number;
  cast: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: string;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: string;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
};

/**
 * Get the primary information about a movie.
 * https://developers.themoviedb.org/3/movies/get-movie-details
 */
export async function getMovieById(id: string): Promise<Movie> {
  const [movieResult, creditsResult] = await Promise.all([
    fetchTheMovieDB<MovieResult>(`/movie/${id}`),
    fetchTheMovieDB<CreditsResult>(`/movie/${id}/credits`),
  ]);

  const movie: Movie = {
    id: movieResult.id,
    title: movieResult.title,
    tagline: movieResult.tagline,
    video: movieResult.video,
    posterPath: `${IMAGE_BASE_URL}${movieResult.poster_path}`,
    genres: movieResult.genres,
    actors: creditsResult.cast.map((actor) => ({
      id: actor.id,
      name: actor.name,
      profilePath: `${IMAGE_BASE_URL}${actor.profile_path}`,
    })),
  };
  return movie;
}

type TVShowResult = {
  poster_path: string | null;
  popularity: number;
  id: number;
  overview: string;
  backdrop_path: string | null;
  vote_average: number;
  media_type: string;
  first_air_date: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
};

type ActorResult = {
  profile_path: string | null;
  adult: boolean;
  id: number;
  media_type: string;
  name: string;
  popularity: number;
  known_for: MovieResult | TVShowResult;
};

type MultiSearchResult = {
  page: number;
  results: (MovieResult | TVShowResult | ActorResult)[];
};

export async function getMultiSearch(
  query: string
): Promise<MultiSearchResult> {
  return await fetchTheMovieDB<MultiSearchResult>('/search/multi', query);
}
