import { getSearchBar, findLeanneWoodardPanel, findReginaldMarche, typeInSearchBar } from "../support/app.po";

describe('sfeir-school-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header', () => {
    cy.contains('SF≡IR People');
  });

  it('should display a list of people', () => {
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

  describe('Search Bar', () => {
    it('should display the search bar', () => {
      getSearchBar().should('be.visible');
    })

    it('should input the search correctly', () => {
      typeInSearchBar("wood").should('have.value', 'wood');
    })

    it('should filter the people list by their firstname', () => {
      typeInSearchBar('Leanne');
      cy.contains('Leanne Woodard');
    })

    it('should filter the people list by their lastname', () => {
      typeInSearchBar('Woodard');
      cy.contains('Leanne Woodard');
    })

    it('should display the person typed regardless of accent', () => {
      typeInSearchBar('Marché').should('have.value', 'Marché');
      findReginaldMarche().should('be.visible');
      findLeanneWoodardPanel().should('not.exist');

      typeInSearchBar('marche').should('have.value', 'marche');
      findReginaldMarche().should('be.visible');
      findLeanneWoodardPanel().should('not.exist');
    })

    it('should ignore case', () => {
      typeInSearchBar('WoOdArD')
      findLeanneWoodardPanel().should('be.visible');
    })
  })
});
