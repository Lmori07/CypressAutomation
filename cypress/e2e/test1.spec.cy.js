describe("My First Cypress Test Suite", () => {
  it("My First Test Case", () => {
    //Fixture folder - hold all the test data that our script can use.
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.close();
  });
});
