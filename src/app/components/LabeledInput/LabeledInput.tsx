import React from 'react';
import styles from './LabeledInput.module.css';

type LabeledInputProps = {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function LabeledInput({
  label,
  placeholder,
  type,
  value,
  required,
  onChange,
}: LabeledInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      {label}
      <input
        className={styles.container__input}
        type={type}
        placeholder={`${placeholder}` + ' here'}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default LabeledInput;
