import { render } from '@testing-library/react';
import { PEOPLE } from '../../mocks/people.mocks';
import Home from './home';

describe('Home', () => {
  const [firstPerson] = PEOPLE;

  test('should display a section with the class people-home', () => {
    const { container } = render(<Home />);
    const section = container.querySelector<HTMLElement>('section.people-home');
    expect(section).toBeInTheDocument();
  });
  test('should display an image with the correct value', () => {
    const { container } = render(<Home />);
    const image = container.querySelector<HTMLImageElement>('img') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual(firstPerson.photo);
    expect(image.alt).toEqual('person-photo');
  });
  test('should display the name and the firstname of the person', () => {
    const { container } = render(<Home />);
    const name = container.querySelector<HTMLSpanElement>('.MuiCardHeader-title');
    expect(name).toBeInTheDocument();
    expect(name?.textContent).toEqual(`${firstPerson.firstname} ${firstPerson.lastname}`);
  });
  test('should display the date of birth of the person', () => {
    const { container } = render(<Home />);
    const date = container.querySelector<HTMLSpanElement>('.MuiCardHeader-subheader');
    expect(date).toBeInTheDocument();
    expect(date?.textContent).toEqual(firstPerson.birthDate);
  });
  test('should display the email, the phone, the entity and the manager in the card content', () => {
    const { container } = render(<Home />);
    const cardContent = container.querySelector<HTMLDivElement>('.MuiCardContent-root ');
    expect(cardContent?.textContent).toContain(firstPerson.entity);
    expect(cardContent?.textContent).toContain(firstPerson.manager);
    expect(cardContent?.textContent).toContain(firstPerson.email);
    expect(cardContent?.textContent).toContain(firstPerson.phone);
  });
  test('should display two buttons, one for update the card and one for deleting the card', () => {
    const { container } = render(<Home />);
    const buttons = container.querySelectorAll<HTMLButtonElement>('button');
    expect(buttons.length).toEqual(2);

    const deleteButton = buttons.item(0);
    const updateButton = buttons.item(1);
    expect(deleteButton.classList.toString()).toContain('MuiButton-outlined');
    expect(deleteButton.textContent).toEqual('Delete');
    expect(updateButton.textContent).toEqual('Update');
    expect(updateButton.classList.toString()).toContain('MuiButton-contained');
  });
});
