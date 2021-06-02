import { Movie } from '../../types';
import useFetch from './useFetch';

function useMovie(
  id: string
): {
  movie: Movie | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: movie, isLoading, errorMessage } = useFetch<Movie>(
    `/api/movies/${id}`
  );

  return { movie, isLoading, errorMessage };
}

export default useMovie;
