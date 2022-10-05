import { Link, To } from 'react-router-dom';
import styles from '../button.module.scss';

/* eslint-disable-next-line */
export interface LinkButtonProps {
  to: To,
  children: string
}

export function LinkButton({ to, children, ...passThrough }: LinkButtonProps) {
  return (
    <Link to={to} className={styles['button']} {...passThrough}>{children}</Link>
  );
}

export default LinkButton;
