import React, { ReactNode } from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  children: ReactNode;
};

function LabeledInput({ children }: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.LabeledInput}>
      {children}
      <input
        className={styles.LabeledInput__input}
        type="text"
        placeholder={`${children}` + ' here'}
      >
        {}
      </input>
    </label>
  );
}

export default LabeledInput;

// Beispiel react input element:
// {
//   /* <label>
//     Name:
//     <input type="text" name="name" />
//   </label> */
// }
