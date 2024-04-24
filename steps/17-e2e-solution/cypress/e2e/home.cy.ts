describe('home page', () => {
  it('should show the home page', () => {
    cy.visit('http://localhost:5173');

    cy.get('main > h2:first-of-type').should('be.visible').should('have.text', "Let's meet!");
  });

  it('should display a message', () => {
    cy.visit('http://localhost:5173');

    cy.get('[role="alert"]').should('contain.text', 'New mission for Leanne Woodard at Planet Express');
  });
  it('should display a random person', () => {
    cy.visit('http://localhost:5173');

    cy.get('main').find('article.MuiCard-root').should('have.length', 2);
  });
});
