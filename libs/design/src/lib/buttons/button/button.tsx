import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from '../button.module.scss';

/* eslint-disable-next-line */
export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...passThrough }: ButtonProps) {
  return (
    <button className={classNames(styles['button'], className)}
      {...passThrough}
    >
      {children}
    </button>
  );
}

export default Button;
