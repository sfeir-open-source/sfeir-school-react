describe('home page', () => {
  it('should show the home page', () => {
    cy.visit('http://localhost:5173');

    cy.get('main > h2:first-of-type').should('be.visible').should('have.text', "Let's meet!");
  });

  it.skip('should display a message', () => {});
  it.skip('should display a random person', () => {});
});
