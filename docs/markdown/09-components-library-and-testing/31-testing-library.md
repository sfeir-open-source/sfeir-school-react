<!-- .slide: class="transition" -->

# Testing Library

##==##

# Testing Library

![center](./assets/images/testing-library.png)

##==##

<!-- .slide: class="with-code" -->

# How to use?

```TypeScript [1-5|6,17|7-8|10-12|14-16]
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Fetch from './fetch';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Fetch url="/greeting" />);

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'));
  await screen.findByRole('heading');

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  expect(screen.getByRole('button')).toBeDisabled();
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Query

```TypeScript []
screen.getByText('Load Greeting');
screen.findByText('Load Greeting');
screen.getByLabelText('Load Greeting');
screen.findByLabel('Load Greeting');
screen.getByRole('button');
screen.findByRole('textbox');
// ...
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Act

```TypeScript []
await userEvent.click(screen.getByText('Load Greeting'));
await userEvent.type(screen.getByLabelText('Search'), 'Matt');
await userEvent.paste(screen.getByLabelText('Search'), 'Matt');
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Assertion

```TypeScript []
expect(screen.getByRole('heading')).toHaveTextContent('hello there');
expect(screen.getByRole('button')).toBeDisabled();
expect(screen.getByRole('button')).toBeInTheDocument();
expect(screen.getByRole('button')).toBeVisible();
```

<!-- .element: class="big-code" -->
