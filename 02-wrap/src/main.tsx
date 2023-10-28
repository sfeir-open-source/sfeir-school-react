import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * This is the entry point to the application. It is responsible for bootstrapping the application.
 */
const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <StrictMode>
    <div>
      <h1>Hello Students</h1>
    </div>
  </StrictMode>
);
