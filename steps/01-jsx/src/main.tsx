import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import packageJson from '../package.json';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../common/index.css';

document.title = packageJson.name;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
