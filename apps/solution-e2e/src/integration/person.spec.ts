import {
  findLeanneWoodardEditButton,
  findLeanneWoodardPanel,
} from '../support/app.po';

describe('sfeir-school-react | edit page', () => {
  beforeEach(() => {
    cy.visit('/');
    findLeanneWoodardPanel().contains('Leanne Woodard').click();
  });
  it('should display the edit page of Leanne Woodard', () => {
    cy.contains('Castaneda Salinas').should('not.exist');
  });

  it('should display Leanne Woodard details', () => {
    cy.contains('Leanne Woodard');
  });

  it('should display Leanne Woodard details', () => {
    cy.contains('Developer');
    cy.contains('woodard.l@acme.com').should(
      'have.attr',
      'href',
      'mailto:woodard.l@acme.com'
    );
    cy.contains('0784112248').should('have.attr', 'href', 'tel:0784112248');
    cy.contains('Erika');
  });

  it('should display the edit button', () => {
    findLeanneWoodardEditButton().should('be.visible');
  });

  it('should display the delete button', () => {
    findLeanneWoodardEditButton().should('be.visible');
  });
});
