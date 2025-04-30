Cypress.Commands.add("AcessToken", () => {
  const payload = require ("../fixtures/payloads/login.json")
  return cy.request({
    method: "POST",
    url: "https://serverest.dev/login",
    body: payload
  }).then((response) => {
    const token = response.body.authorization.split(' ')[1];
    
    cy.wrap(token).as('token');
    
    return cy.wrap(response);
  });
});