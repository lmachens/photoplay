import React from 'react';
import { PopularMovie } from '../../../types';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Homescreen.module.css';
import NavBar from '../../components/NavBar/NavBar';
import useFetch from '../../hooks/useFetch';

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

function Homescreen(): JSX.Element {
  const { data: popularMovies, isLoading, errorMessage } = useFetch<
    PopularMovie[]
  >('api/movies/popular');

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const [first, ...others] = popularMovies || [];

  return (
    <main className={styles.container}>
      <img
        className={styles.poster}
        src={
          first.posterPath ||
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/PlaceholderLC.png/600px-PlaceholderLC.png'
        }
      />
      <Rating value={4}></Rating>
      <div className={styles.navigationGenre}>
        <NavigationGenre categories={categoriesArray}></NavigationGenre>
      </div>
      <h2 className={styles.watchlistTitle}>Watching</h2>
      <div className={styles.watchlist}>
        {others.map((other) => (
          <MovieCard imgSrc={other.posterPath || ''} />
        ))}
      </div>

      <NavBar />
    </main>
  );
}

export default Homescreen;
