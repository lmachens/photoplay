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
