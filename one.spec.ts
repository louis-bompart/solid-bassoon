describe("My First Test", () => {
  it("will fail the first time", () => {
    cy.exec("cat foo", { failOnNonZeroExit: false })
      .its("code")
      .should("eq", 0);
    cy.exec("touch foo");
  });
});
