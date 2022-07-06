export const getGreeting = () => cy.get('h1');
export const getSearchBar = () => cy.get('[role="search"]');
export const findPersonPanel = (id) => cy.get(`[data-cy='person-panel-${id}']`)
export const findLeanneWoodardPanel = () => findPersonPanel('5763cd4d9d2a4f259b53c901')
export const findReginaldMarche = () => findPersonPanel('5763cd4dfa6f96cd26c65780')

/**
 * Type in the search bar (cleans everytime)
 * @param text
 */
export const typeInSearchBar = (text: string) => getSearchBar().get('input').clear().type(text);
