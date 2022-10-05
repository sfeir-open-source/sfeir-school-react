import { screen, render } from '@testing-library/react';

import Title from './title';

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title>Test</Title>);
    expect(baseElement).toBeTruthy();
  });
  it('should render the title', () => {
    render(<Title data-testid="title">Test title</Title>);
    expect(screen.getByText('Test title')).toBeTruthy();
  });
});
