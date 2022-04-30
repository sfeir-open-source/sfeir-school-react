import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import styles from './panel.module.scss';

export type PanelProps = HTMLAttributes<HTMLDivElement>;

export function Panel({ children, className, ...passThrough }: PanelProps) {
  return (
    <div
      className={classnames(styles['container'], className)}
      {...passThrough}
    >
      {children}
    </div>
  );
}

export default Panel;
