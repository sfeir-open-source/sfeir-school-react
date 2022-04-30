import classnames from 'classnames';
import { HTMLAttributes } from 'react';
import styles from './grid.module.scss';

export type GridProps = HTMLAttributes<HTMLDivElement>;

export function Grid({ children, className, ...passThrough }: GridProps) {
  return (
    <div
      className={classnames(styles['container'], className)}
      {...passThrough}
    >
      {children}
    </div>
  );
}

export default Grid;
