import React from 'react';
import Star from './Star';
import styles from './Rating.module.css';

type RatingProps = {
  value: number;
};
function Rating({ value }: RatingProps): JSX.Element {
  return (
    <section className={styles.container}>
      <span className={styles.count}>{value.toFixed(1)}</span>
      <div className={styles.stars}>
        <Star checked={value >= 1} />
        <Star checked={value >= 3} />
        <Star checked={value >= 5} />
        <Star checked={value >= 7} />
        <Star checked={value >= 9} />
      </div>
    </section>
  );
}

export default Rating;
