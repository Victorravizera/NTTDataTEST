Cypress.Commands.add("AddProduct", () => {
    cy.AcessToken();
    const payload = require ("../fixtures/payloads/product.json")
    cy.get('@token').then((token) => {
      return cy.request({
        method: "POST",
        url: "https://serverest.dev/produtos", 
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: payload,
        failOnStatusCode: false
    });
  });
});