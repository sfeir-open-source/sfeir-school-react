import styles from './iconized.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface IconizedProps extends HTMLAttributes<HTMLDivElement> {
  //icon: IconDefinition;
  icon: FontAwesomeIconProps;
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
      <FontAwesomeIcon {...icon} />
      {children}
    </div>
  );
}

export default Iconized;
