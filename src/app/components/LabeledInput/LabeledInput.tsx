import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  label: string;
  placeholder: string;
};

function LabeledInput({ label, placeholder }: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.LabeledInput}>
      {label}
      <input
        className={styles.LabeledInput__input}
        type="text"
        placeholder={`${placeholder}` + ' here'}
      />
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
