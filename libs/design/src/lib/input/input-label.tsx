import { InputHTMLAttributes } from 'react';
import styles from './input-label.module.scss';

/* eslint-disable-next-line */
export interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  error?: boolean,
  mandatory?: boolean
}

export function InputLabel({ name, label, required = false, value, onChange, error = false, ...passThrough }: InputLabelProps) {
  return (
    <div className={styles['field-group']} data-cy={'field-group' + name}>
      <label htmlFor={name} className={styles['label'] + ' ' + (required ? styles['mandatory'] : '')}>
        {label}
      </label>
      <input name={name} required={required} {...passThrough} className={styles['input'] + ' ' + (error ? styles['error'] : '')} value={value} onChange={onChange} />
    </div>
  );
}

export default InputLabel;
