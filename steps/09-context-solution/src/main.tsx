import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import packageJson from '../package.json';
import { AppRouter } from './pages/router.tsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../common/index.css';
import { AppConfigProvider } from './config.tsx';

document.title = packageJson.name;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <AppConfigProvider>
      <AppRouter />
    </AppConfigProvider>
  </React.StrictMode>
);
