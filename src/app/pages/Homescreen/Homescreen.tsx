import React from 'react';
import Rating from '../../components/Rating/Rating';
import styles from './Homescreen.module.css';

type HomescreenProps = {
  imgSrc: string;
};

function Homescreen({ imgSrc }: HomescreenProps): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <img className={styles.poster} src={imgSrc} />
        <Rating value={4}></Rating>
      </main>
    </div>
  );
}

export default Homescreen;
