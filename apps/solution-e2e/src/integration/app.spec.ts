describe('sfeir-school-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header', () => {
    cy.contains('SF≡IR People');
  });

  it('should display a list of people', () => {
    function findLeanneWoodardPanel() {
      return cy.get('[data-testid=5763cd4d9d2a4f259b53c901]');
    }

    const expectedPeople = [
      'Leanne Woodard',
      'Castaneda Salinas',
      'Phyllis Donovan',
      'Erika Guzman',
      'Moody Prince',
      'Mercedes Hebert',
      'Howell Mcknight',
      'Lizzie Morris',
      'Roy Nielsen',
      'Mclaughlin Cochran',
    ];

    expectedPeople.forEach((name) => cy.contains(name));

    findLeanneWoodardPanel().contains('Developer');
    findLeanneWoodardPanel()
      .contains('woodard.l@acme.com')
      .should('have.attr', 'href', 'mailto:woodard.l@acme.com');
    findLeanneWoodardPanel()
      .contains('0784112248')
      .should('have.attr', 'href', 'tel:0784112248');
    findLeanneWoodardPanel().contains('Erika');
  });
});
