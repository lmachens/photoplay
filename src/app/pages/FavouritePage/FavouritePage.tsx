import React from 'react';
import styles from './FavouritePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import usePopularMovies from '../../hooks/usePopularMovies';
import SeriesCard from '../../components/SeriesCard/SeriesCard';

function FavouritePage(): JSX.Element {
  const { popularMovies, isLoading, errorMessage } = usePopularMovies();

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!popularMovies) {
    return <div>Movie not found</div>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {popularMovies.map((popularMovie) => (
          <SeriesCard
            headline={popularMovie.title}
            seriesInfo={'PLACEHOLDER'}
            key={popularMovie.id}
            imgSrc={popularMovie.posterPath || ''}
            imgAlt=""
          />
        ))}
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  );
}

export default FavouritePage;
