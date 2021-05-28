import React from 'react';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Homescreen.module.css';

type HomescreenProps = {
  imgSrc: string;
};

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

function Homescreen({ imgSrc }: HomescreenProps): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <img className={styles.poster} src={imgSrc} />
        <Rating value={4}></Rating>
        <div className={styles.navigationGenre}>
          <NavigationGenre categories={categoriesArray}></NavigationGenre>
        </div>
        <div className={styles.watchlist}>
          <h2>Watching</h2>
          <MovieCard imgSrc="/narcos.png"></MovieCard>
          <MovieCard imgSrc="/deadpool.png"></MovieCard>
          <MovieCard imgSrc="/annabelle.png"></MovieCard>
          <MovieCard imgSrc="/toystory.png"></MovieCard>
        </div>
      </main>
    </div>
  );
}

export default Homescreen;
