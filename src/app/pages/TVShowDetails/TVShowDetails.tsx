import React from 'react';
import styles from './TVShowDetails.module.css';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import Button from '../../components/Button/Button';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

export default function TVShowDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavigationGenre categories={['Category1', 'Category2']} />
      </header>
      <main>
        <Rating value={5} />
        <Button>Watch Now</Button>
        <EpisodeCard headline="Headline" runtime={120} imgSrc="/matrix.jpg" />
      </main>
      <footer></footer>
    </div>
  );
}

// type InputProps = {
//     categories: Array<string>;
//   };
