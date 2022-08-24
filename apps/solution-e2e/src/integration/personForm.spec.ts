import {
  findLeanneWoodardEditButton,
  findLeanneWoodardPanel,
} from '../support/app.po';

describe('sfeir-school-react | edit page', () => {
  beforeEach(() => {
    cy.visit('/');
    findLeanneWoodardPanel().contains('Leanne Woodard').click();
    findLeanneWoodardEditButton().click();
  });
  it('should display the edit page of Leanne Woodard', () => {
    cy.contains('Castaneda Salinas').should('not.exist');
  });

  it('should display submit button', () => {
    cy.contains('Submit');
  });

  it('should display the edit button', () => {
    findLeanneWoodardEditButton().should('be.visible');
  });

  it('should display the delete button', () => {
    findLeanneWoodardEditButton().should('be.visible');
  });

  it('should display the form', () => {
    cy.get('form').should('be.visible');
  });

  it('should display Leanne Woodard details', () => {
    cy.get('input[name="firstname"]').should('have.value', 'Leanne');
    cy.get('input[name="lastname"]').should('have.value', 'Woodard');
    cy.get('input[name="position"]').should('have.value', 'Developer');
    cy.get('input[name="email"]').should('have.value', 'woodard.l@acme.com');
    cy.get('input[name="phone"]').should('have.value', '0784112248');
    cy.get('select[name="manager"]').should('have.value', 'Erika');
  });
});
