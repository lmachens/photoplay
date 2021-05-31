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
  value,
  type,
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
        onChange={(event) => onChange(event.target.value)}
        required={required}
      />
    </label>
  );
}

export default LabeledInput;
