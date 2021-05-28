import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import ProfileIcon from '../../components/Icons/ProfileIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
// import michaelPenaImage from '../../components/ArtistCard/ArtistCard';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import styles from './MovieDetails.module.css';
import Rating from '../../components/Rating/Rating';
import NavigationGenre from '../../components/NavigationGenre/NavigationGenre';

const categoriesArray = ['Movie', 'Adventure', 'Comedy', 'Family'];

function MovieDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.MovieTrailer}>
          {/* <<MovieTrailer/>> */}
          <p>Insert movie trailer here</p>
          <NavigationGenre categories={categoriesArray} />
        </div>
        <Rating value={4} />
        <p className={styles.movieDescription}>
          Having spent most of her life exploring the jungle, nothing could
          prepare Dora for her most dangerous adventure yet — high school.
        </p>
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
        <div className={styles.navBar}>
          <NavBarLink icon={<HomeIcon />} text="Home" />
          <NavBarLink icon={<SearchIcon />} text="Search" />
          <NavBarLink icon={<DownloadIcon />} text="Download" />
          <NavBarLink icon={<ProfileIcon />} text="Profile" />
        </div>
      </footer>
    </div>
  );
}

export default MovieDetails;
