import React, { useState } from 'react';
import styles from './NavigationGenre.module.css';

type InputProps = {
  categories: Array<string>;
};

function NavigationGenre({ categories }: InputProps): JSX.Element {
  const [clickedCategorie, setClickedCategorie] = useState<string>('');
  return (
    <div className={styles.container}>
      {console.log(clickedCategorie)}
      {categories.map((categorie) => (
        <a
          onClick={() => setClickedCategorie(categorie)}
          key={categorie}
          className={`${categorie === clickedCategorie && styles.highlight}`}
        >
          {categorie}
        </a>
      ))}
    </div>
  );
}

export default NavigationGenre;
