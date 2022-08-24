describe("My First Cypress Test Suite", () => {
  it("My First Test Case", () => {
    //Fixture folder - hold all the test data that our script can use. In cypress you can skip ";" at the end becauase he concatenated all the commands.
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    //Even cypress come with smart wait in here we are letting him know there are some elements effect taking place that he need to wait.
    cy.wait(2000);
    /*Cypress will bring all element that match the locator pattern we need to be aware that visible and not visible will be capute.
    That's why "visible" command is present to only select element that have that loc*/
    cy.get(".product:visible").should("have.length", 4);
    // Parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();
  });
});
