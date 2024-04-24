import { createAction } from '@reduxjs/toolkit';
import { Location } from 'react-router-dom';

export const navigateTo = createAction<Location>('navigateTo');
