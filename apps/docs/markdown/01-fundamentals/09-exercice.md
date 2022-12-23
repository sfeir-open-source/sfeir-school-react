<!-- .slide: class="exercice" -->
# Create your first Component
## Ex 01

1.  Create a Component "Card"
2.  Returns the HTML
3.  Use the Component in the Parent
<!-- .element: class="list-fragment" -->

##--##
<!-- .slide: -->
# Solution 01

card.js
```javascript []
export function Card() {
  return (
    <div>
      <span>Nom - Prénom</span>
    </div>
  );
}
```

main.tsx
```javascript []
import { createRoot } from 'react-dom/client';
import { Card } from './components/card/Card';

// Get the root Container
const rootContainer = document.getElementById('root');

// Create the Root in my Virtual DOM
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootContainer!);

// Render my Card Component
root.render(<Card />);
```