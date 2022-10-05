import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LinkButton from './link-button';

describe('LinkButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrowserRouter><LinkButton to="/">Go to</LinkButton></BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
