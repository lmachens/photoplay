import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import CastPortrait from '../../components/CastPortrait/CastPortrait';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import HomeIcon from '../../components/Icons/HomeIcon';
import ProfileIcon from '../../components/Icons/ProfileIcon';
import SearchIcon from '../../components/Icons/SearchIcon';
import MovieCard from '../../components/MovieCard/MovieCard';
import NavBarLink from '../../components/NavBarLink/NavBarLink';
import styles from './Cast.module.css';

function Cast(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <BackButton></BackButton>
      </header>
      <main className={styles.main}>
        <div className={styles.castPortrait}>
          <CastPortrait
            imgSrc="https://ca.slack-edge.com/TTHG21AH3-UTRGVUVQX-504c15efb0fd-512"
            firstName="Philipp"
            lastName="Gartz"
          />
        </div>
        <p className={styles.castDescription}>
          Philipp Gartz was born and raised on the moon. One day he fell from
          the sky and landed in a pond of new fishes! He is a giant, talented
          and good looking - an astonishing guy! Watch his movies (or code...)!
        </p>
        <div>
          <p className={styles.movieCardTitle}>Known for</p>
          <div className={styles.movieCards}>
            <MovieCard imgSrc="./antMan.png" />
            <MovieCard imgSrc="./endOfWatch.png" />
            <MovieCard imgSrc="./americanHustle.png" />
            <MovieCard imgSrc="./crash.png" />
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

export default Cast;
