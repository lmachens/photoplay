import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './TVShowDetails.module.css';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import Trailer from '../../components/Trailer/Trailer';
import NavBar from '../../components/NavBar/NavBar';
import BackButton from '../../components/BackButton/BackButton';
import useMovie from '../../hooks/useMovie';

function TVShowDetails(): JSX.Element {
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

  return (
    <div className={styles.container}>
      <header>
        <BackButton />
        <Trailer
          headline={movie.title}
          videoSrc=""
          imageSrc={movie.posterPath}
        />
        <NavigationGenre categories={['Drama', 'Biographical', 'Crime Film']} />
      </header>
      <main>
        <Rating value={5} />
        <p className={styles.movieDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laudantium, dignissimos!
        </p>
        <div className={styles.button}>
          <Button>Watch Now</Button>
        </div>
        <p className={styles.episodesHeadline}>Episodes</p>
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
      </main>
      <footer className={styles.navBar}>
        <NavBar />
      </footer>
    </div>
  );
}
export default TVShowDetails;
