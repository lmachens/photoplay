import { PopularMovie } from '../../types';
import useFetch from './useFetch';

function usePopularMovies(): {
  popularMovies: PopularMovie[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const { data: popularMovies, isLoading, errorMessage } = useFetch<
    PopularMovie[]
  >('/api/movies/popular');

  return { popularMovies, isLoading, errorMessage };
}

export default usePopularMovies;
