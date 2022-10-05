import { HTMLAttributes } from 'react';
import styles from './title.module.scss';

/* eslint-disable-next-line */
export type TitleProps = HTMLAttributes<HTMLHeadElement>;


export function Title({ children, ...passThrough }: TitleProps) {
  return (
    <h1 className={styles['title']} {...passThrough}>{children}</h1>
  );
}

export default Title;
