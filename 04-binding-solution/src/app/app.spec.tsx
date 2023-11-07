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
    expect(header).toBeInTheDocument();
  });
  test('should display the section which contain the application', () => {
    const containerApplication = container.querySelector('section.people-application__pages') as HTMLElement;
    expect(containerApplication).toBeInTheDocument();
  });

  test('should display the card of the component home into the section', () => {
    const card = container.querySelector('.MuiCard-root') as HTMLElement;
    expect(card).toBeInTheDocument();
  });
});
