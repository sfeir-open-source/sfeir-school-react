import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  mandatory?: boolean
}

export function Input({ name, label, required = false, value, onChange, ...passThrough }: InputProps) {
  return (
    <div className={styles['field-group']} data-cy={'field-group' + name}>
      <label htmlFor={name} className={styles['label'] + ' ' + (required ? styles['mandatory'] : '')}>
        {label}
      </label>
      <input name={name} required={required} {...passThrough} className={styles['input']} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
