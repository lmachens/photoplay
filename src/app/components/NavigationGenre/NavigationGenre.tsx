import React from 'react';
import styles from './NavigationGenre.module.css';

type InputProps = {
  categories: Array<string>;
};

function NavigationGenre({ categories }: InputProps): JSX.Element {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <a href="#" key={category} className={styles.navLink}>
          {category}
        </a>
      ))}
    </div>
  );
}

export default NavigationGenre;
