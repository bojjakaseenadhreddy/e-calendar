describe('e-calendar', () => {
  beforeEach(() => cy.visit('/'));

  it('should display E-calendar works message', () => {
    cy.get('h1').should('have.text','E-calendar works');
  });

});
