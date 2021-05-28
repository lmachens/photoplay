import React from 'react';
import styles from './TVShowDetails.module.css';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import Trailer from '../../components/Trailer/Trailer';
import NavBar from '../../components/NavBar/NavBar';

export default function TVShowDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <Trailer headline="Narcos" videoSrc="" />
        <NavigationGenre categories={['Drama', 'Biographical', 'Crime Film']} />
      </header>
      <main>
        <Rating value={5} />
        <p className={styles.movieDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          dignissimos! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Laudantium, dignissimos!
        </p>
        <Button>Watch Now</Button>
        <p className={styles.episodesHeadline}>Episodes</p>
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}
