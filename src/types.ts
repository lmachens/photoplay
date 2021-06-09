import { ObjectId } from 'bson';

export type PopularMovie = {
  id: number;
  title: string;
  genreIds: number[];
  posterPath: string | null;
};

export type Movie = {
  id: number;
  title: string;
  tagline: string | null;
  video: boolean;
  posterPath: string;
  genres: {
    id: number;
    name: string;
  }[];
  actors: {
    id: number;
    name: string;
    profilePath: string;
  }[];
};

export type User = {
  _id?: ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  imgSrc?: string;
};

export type MultiSearch = {
  movies: {
    id: number;
    title: string;
    posterPath: string | null;
  }[];
  tvShows: {
    id: number;
    name: string;
    posterPath: string | null;
  }[];
  actors: {
    id: number;
    name: string;
    profilePath: string | null;
  }[];
};
