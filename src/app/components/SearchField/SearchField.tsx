import React from 'react';
import styles from './SearchField.module.css';
import SearchFieldIcon from '../Icons/SearchFieldIcon';

type InputProps = {
  placeholder: string;
};

function SearchField({ placeholder }: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      <div className={styles.label__iconContainer}>
        <SearchFieldIcon className={styles.label__icon} />
      </div>
      <input className={styles.label__input} placeholder={placeholder} />
    </label>
  );
}

export default SearchField;
