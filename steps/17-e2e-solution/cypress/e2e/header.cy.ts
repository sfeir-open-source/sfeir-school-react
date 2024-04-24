describe('header', () => {
  it('should be able to navigate with header links', () => {
    cy.visit('http://localhost:5173');

    cy.get('a[href="/people"]').click();
    cy.location('pathname').should('eq', '/people');
    cy.get('a[href="/"]').click({ multiple: true });
    cy.location('pathname').should('eq', '/');
  });
});
