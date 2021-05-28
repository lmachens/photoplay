import React from 'react';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';
import Rating from '../../components/Rating/Rating';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Homescreen.module.css';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import HomeIcon from '../../components/Icons/HomeIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import ProfileIcon from '../../components/Icons/ProfileIcon';

type HomescreenProps = {
  imgSrc: string;
};

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

function Homescreen({ imgSrc }: HomescreenProps): JSX.Element {
  return (
    <main className={styles.container}>
      <img className={styles.poster} src={imgSrc} />
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
      <div className={styles.navBar}>
        <NavBarLink icon={<HomeIcon />} text="Home" />
        <NavBarLink icon={<SearchIcon />} text="Search" />
        <NavBarLink icon={<DownloadIcon />} text="Download" />
        <NavBarLink icon={<ProfileIcon />} text="Profile" />
      </div>
    </main>
  );
}

export default Homescreen;
