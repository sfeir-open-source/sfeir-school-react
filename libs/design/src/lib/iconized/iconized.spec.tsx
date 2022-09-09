import { render, screen } from '@testing-library/react';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Iconized from './iconized';

describe('Iconized', () => {
  it('should render successfully', () => {
    const { container } = render(
      <Iconized icon={solid('user')}>a label</Iconized>
    );
    expect(screen.getByText('a label')).toBeInTheDocument();
    expect(container.querySelector('[data-icon="user"]')).toBeTruthy();
  });

  it('should handle className and html attributes as props', () => {
    render(
      <Iconized
        data-testid="iconized"
        className="my-class"
        icon={solid('user')}
      >
        a label
      </Iconized>
    );
    expect(screen.getByTestId('iconized')).toBeInTheDocument();
    expect(screen.getByTestId('iconized').getAttribute('class')).toContain(
      'my-class'
    );
  });
});
