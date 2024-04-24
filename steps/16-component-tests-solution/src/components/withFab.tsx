import MuiFab from '@mui/material/Fab';
import React from 'react';

interface WithFabProps {
  onClick: VoidFunction;
}

type FabWrappedProps<TInnerProps> = WithFabProps & JSX.IntrinsicAttributes & TInnerProps;

export function withFab<TProps extends JSX.IntrinsicAttributes>(Inner: React.ComponentType<TProps>, label: string) {
  return ({ onClick, ...props }: FabWrappedProps<TProps>) => {
    return (
      <MuiFab size="small" color="default" aria-label={label} onClick={onClick}>
        <Inner {...(props as TProps)} />
      </MuiFab>
    );
  };
}
