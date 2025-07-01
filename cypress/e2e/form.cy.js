describe('Basic Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Page has the correct header', () => {
    cy.get('[data-cy="header"]').should('exist').and('contain.text', 'Study Night');
  });

 
  it('Navigation menu exists', () => {
    cy.get('nav.primary_nav_bar').should('exist');
    cy.get('#homePage').should('exist').and('contain.text', 'Home');
    cy.get('#aboutPage').should('exist').and('contain.text', 'About');
    cy.get('#cardSetPage').should('exist').and('contain.text', 'Card Sets');
  });
});
