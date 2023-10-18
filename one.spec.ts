describe("My First Test", () => {
  it("will fail the first time", () => {
    cy.exec('cat foo').its('code').should('eq', 0)
    cy.exec('touch foo');
  });
});
