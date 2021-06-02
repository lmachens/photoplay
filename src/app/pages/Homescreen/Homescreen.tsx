import React from 'react';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Homescreen.module.css';
import NavBar from '../../components/NavBar/NavBar';
import usePopularMovies from '../../hooks/usePopularMovies';

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

function Homescreen(): JSX.Element {
  const { popularMovies, isLoading, errorMessage } = usePopularMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!popularMovies) {
    return <div>Movie not found</div>;
  }

  return (
    <main className={styles.container}>
      <img className={styles.poster} src={popularMovies[0].posterPath || ''} />
      <Rating value={4}></Rating>
      <div className={styles.navigationGenre}>
        <NavigationGenre categories={categoriesArray}></NavigationGenre>
      </div>
      <h2 className={styles.watchlistTitle}>Watching</h2>
      <div className={styles.watchlist}>
        <MovieCard imgSrc="/narcos.png"></MovieCard>
        <MovieCard imgSrc="/deadpool.png"></MovieCard>
        <MovieCard imgSrc="/annabelle.png"></MovieCard>
        <MovieCard imgSrc="/toystory.png"></MovieCard>
      </div>
      <NavBar />
    </main>
  );
}

export default Homescreen;
