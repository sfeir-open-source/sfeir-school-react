import { createRoot } from 'react-dom/client';
import { Card } from './components/card/Card';

// Get the root Container
const rootContainer = document.getElementById('root');

// Create the Root in my Virtual DOM
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootContainer!);

// Render my Card Component
root.render(<Card />);
