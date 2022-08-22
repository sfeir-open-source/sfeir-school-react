import styles from './iconized.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface IconizedProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconDefinition;
  size?: SizeProp;
}

export function Iconized({
  icon,
  children,
  className,
  size,
  ...passThrough
}: IconizedProps) {
  return (
    <div
      className={classnames(styles['container'], className)}
      {...passThrough}
    >
      <FontAwesomeIcon icon={icon} size={size} />
      {children}
    </div>
  );
}

export default Iconized;
