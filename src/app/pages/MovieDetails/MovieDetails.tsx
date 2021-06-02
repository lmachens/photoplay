import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import styles from './MovieDetails.module.css';
import Rating from '../../components/Rating/Rating';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import NavBar from '../../components/NavBar/NavBar';

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

type Movie = {
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

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>();

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((response) => response.json())
      .then(setMovie);
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.MovieTrailer}>
          <img className={styles.movieImage} src={movie.posterPath} />
          <p>{movie.title}</p>
          <NavigationGenre categories={categoriesArray} />
        </div>
        <Rating value={4} />
        <p className={styles.movieDescription}>{movie.tagline}</p>
        <Button>Watch now</Button>
        <div>
          <p className={styles.artistCardTitle}>Cast</p>
          <div className={styles.artistCards}>
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
            <ArtistCard
              imgSrc={'./michaelPena.png'}
              artistName="Michael Peña"
            />
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
