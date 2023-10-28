import { render } from '@testing-library/react';
import App from './app';
describe('App', () => {
  let container: HTMLElement;
  let asFragment: any;

  beforeEach(() => {
    const { asFragment: snapshot, container: host } = render(<App />);
    asFragment = snapshot;
    container = host;
  });

  test('should display a snapshot of App', () => {
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  test('should display in h1 tag the text "Hello Students', () => {
    const h1Element = container.querySelector('h1') as HTMLHeadingElement;
    expect(h1Element.textContent?.trim()).toEqual('Hello Students');
  });
});
