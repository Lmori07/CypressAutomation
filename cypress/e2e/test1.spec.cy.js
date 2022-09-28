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

    //Each will iterate on the array generated by the find, $el represent the element, $index represent the index, $list is total size of the array.
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        //Here we are using $el basically because we are working inside the array, we are not searching for any other element outside of it.
        const textVeg = $el.find("h4.product-name").text();
        //Includes will search inside a sintr ex:"Cashews - 1kg" in that long string he will looks if it have the text we are looking for. from the array.
        if (textVeg.includes("Cashews")) {
          //Once he find it we just proceed to find the only property for that element that have "Add to Car" in this case is button and click it.
          $el.find("button").click();
        }
      });

    /*When im assigning a cypress method into a variable my promises behavior breakes and i have to handle it my self. Because all cypres method
      are handled by cypress engine to work sync that does not mean that cypress is not asyn due its javascript nature is, so anything that is not
      cypress related will compromise the promise behavior and i have to resolve it myself.*/
    const logo = cy.get(".brand").then(function (logoelement) {
      cy.log(logoelement.text());
      cy.get(".brand").should("have.text", logoelement.text());
    });

    it("My Second Test Case", () => {
      //Accessing URL
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      cy.get("#checkBoxOption1").check().should("be.checked");
    });
  });
});
