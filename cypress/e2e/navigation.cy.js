describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('Navigates to Card Set page', () => {
    cy.get('[data-cy="card-set"]').click();
    cy.url().should('include', '/card-set');
  });

  it('Navigates to About page', () => {
    cy.get('[data-cy="about"]').click();
    cy.url().should('include', '/about');
  });

  it('Navigates to Home page', () => {
    cy.get('[data-cy="home"]').click();
    cy.url().should('include', '/');
  });
});
