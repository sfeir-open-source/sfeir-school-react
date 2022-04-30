import styles from './iconized.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface IconizedProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconDefinition;
}

export function Iconized({
  icon,
  children,
  className,
  ...passThrough
}: IconizedProps) {
  return (
    <div
      className={classnames(styles['container'], className)}
      {...passThrough}
    >
      <FontAwesomeIcon icon={icon} />
      {children}
    </div>
  );
}

export default Iconized;
