import React from 'react';
import styles from './TVShowDetails.module.css';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import {
  Download,
  Home,
  Profile,
  Search,
} from '../../components/NavBarLink/NavBarLink.stories';
import Trailer from '../../components/Trailer/Trailer';

export default function TVShowDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.trailer}>
        <div className={styles.movieInfos}>
          <Trailer headline="Narcos" videoSrc="" />
          <NavigationGenre
            categories={[
              'Drama',
              'Biographical',
              'Crime Film',
              'Crime Fiction',
            ]}
          />
        </div>
      </header>

      <main>
        <Rating value={5} />
        <p>ToDo: Movie Description</p>
        <Button>Watch Now</Button>
        <p>Episodes</p>
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
      </main>

      <footer className={styles.navBar}>
        <Home />
        <Search />
        <Download />
        <Profile />
      </footer>
    </div>
  );
}
