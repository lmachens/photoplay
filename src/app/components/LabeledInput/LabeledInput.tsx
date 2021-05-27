import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  label: string;
  placeholder: string;
};

function LabeledInput({ label, placeholder }: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles.container__input}
        type="text"
        placeholder={`${placeholder}` + ' here'}
      />
    </label>
  );
}

export default LabeledInput;
