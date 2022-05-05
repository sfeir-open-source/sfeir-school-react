import { render, screen } from '@testing-library/react';

import Panel from './panel';

describe('Panel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Panel />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<Panel>Some children</Panel>);
    screen.getByText('Some children');
  });

  it('should handle className and html attributes as props', () => {
    render(<Panel data-testid="panel" className="something-specific" />);
    expect(screen.getByTestId('panel')).toBeInTheDocument();
    expect(screen.getByTestId('panel').getAttribute('class')).toContain(
      'something-specific'
    );
  });
});
