import React from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import styles from './MovieDetails.module.css';
import Rating from '../../components/Rating/Rating';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import NavBar from '../../components/NavBar/NavBar';
import useMovie from '../../hooks/useMovie';

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { movie, isLoading, errorMessage } = useMovie(id);

  if (errorMessage) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const genresArray = movie.genres.map((genre) => genre.name);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.MovieTrailer}>
          <img className={styles.movieImage} src={movie.posterPath} />
          <p>{movie.title}</p>
          <NavigationGenre categories={genresArray} />
        </div>
        <Rating value={4} />
        <p className={styles.movieDescription}>{movie.tagline}</p>
        <Button>Watch now</Button>
        <div>
          <p className={styles.artistCardTitle}>Cast</p>

          <div className={styles.artistCards}>
            {movie.actors.map((actor) => (
              <ArtistCard imgSrc={actor.profilePath} artistName={actor.name} />
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <NavBar />
      </footer>
    </div>
  );
}

export default MovieDetails;
