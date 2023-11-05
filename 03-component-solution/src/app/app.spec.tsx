import { render } from '@testing-library/react';
import App from './app';
describe('App', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const { container: host } = render(<App />);

    container = host;
  });
  test('should display the main tag with the class people-application', () => {
    const mainElement = container.querySelector('main.people-application') as HTMLElement;
    expect(mainElement).toBeTruthy();
  });
  test('should display the component header into the main tag', () => {
    const header = container.querySelector('Header') as HTMLElement;
    expect(header).toBeTruthy();
  });
});
