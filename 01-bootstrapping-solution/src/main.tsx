import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

/**
 * This is the entry point to the application. It is responsible for bootstrapping the application.
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
