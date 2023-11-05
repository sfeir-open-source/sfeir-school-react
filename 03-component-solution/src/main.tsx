import { createRoot } from 'react-dom/client';
import App from './app/app';

/**
 * This is the entry point to the application. It is responsible for bootstrapping the application.
 */
const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<App />);
