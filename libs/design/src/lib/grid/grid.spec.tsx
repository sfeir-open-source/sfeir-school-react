import { render, screen } from '@testing-library/react';

import Grid from './grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Grid />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    render(<Grid>Some children</Grid>);
    screen.getByText('Some children');
  });

  it('should handle className and html attributes as props', () => {
    render(
      <Grid data-testid="a-custom-grid" className="my-class">
        Some children
      </Grid>
    );
    expect(screen.getByTestId('a-custom-grid')).toBeInTheDocument();
    expect(screen.getByTestId('a-custom-grid').getAttribute('class')).toContain(
      'my-class'
    );
  });
});
