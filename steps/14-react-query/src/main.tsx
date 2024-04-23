import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import packageJson from '../package.json';
import { AppRouter } from './pages/router.tsx';
import { store } from './store/index.ts';
import { AppConfigProvider } from './config.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../common/index.css';

document.title = packageJson.name;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <AppConfigProvider>
      <ReduxProvider store={store}>
        <AppRouter />
      </ReduxProvider>
    </AppConfigProvider>
  </React.StrictMode>
);
