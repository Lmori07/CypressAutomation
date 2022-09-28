describe("My First Cypress Test Suite", () => {
  it("My Second Test Case", () => {
    //Accessing URL
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });
});
