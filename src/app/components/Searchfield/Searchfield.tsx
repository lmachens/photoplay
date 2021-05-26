import React from 'react';
import classes from './Searchfield.module.css';

type InputProps = {
  placeholder: string;
};

const imageSrc = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15.644"
    height="16.204"
    viewBox="0 0 15.644 16.204"
  >
    <path
      d="M16.39,14.759l-3.856-4.011a6.54,6.54,0,1,0-5.007,2.336A6.472,6.472,0,0,0,11.274,11.9l3.886,4.041a.853.853,0,1,0,1.23-1.183ZM7.526,1.707A4.836,4.836,0,1,1,2.691,6.542,4.841,4.841,0,0,1,7.526,1.707Z"
      transform="translate(-0.984)"
    />
  </svg>
);

function Searchfield({ placeholder }: InputProps): JSX.Element {
  return (
    <label className={classes.searchField}>
      <div className={classes.search__image}>{imageSrc}</div>
      <input className={classes.search__input} placeholder={placeholder} />
    </label>
  );
}

export default Searchfield;
