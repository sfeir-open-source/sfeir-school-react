import { render } from '@testing-library/react';
import App from './app';
describe('App', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const { container: host } = render(<App />);
    container = host;
  });

  test('should display in h1 tag the text "Hello Students', () => {
    const h1Element = container.querySelector('h1') as HTMLHeadingElement;
    expect(h1Element.textContent?.trim()).toEqual('Hello Students');
  });
});
