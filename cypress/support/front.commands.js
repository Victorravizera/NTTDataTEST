
Cypress.Commands.add("visitBaseUrl", () => {
    return cy.visit("https://front.serverest.dev/login", { timeout: 10000 })
      .then(() => {
        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
      })
  })
  
 
  Cypress.Commands.add("loginNTT", (email = 'fulano@qa.com', password = 'teste') => {
    cy.get('input[name="email"]').clear().type(email)
    cy.get('input[name="password"]').clear().type(password)
    cy.get('button[type="submit"]').click().then(() => {
      
    })
  })
  

  Cypress.Commands.add("listProducts", () => {
    cy.get('[data-testid="listarProdutos"]').click().then(() => {
    })
  })
  
 
Cypress.Commands.add("editProduct", (productName = 'Logitech MX Vertical') => {
    cy.contains('tr', productName)
      .should('be.visible')
      .within(() => {
        cy.get('.btn-info')
          .should('be.visible')
          .click();
        });
})

Cypress.Commands.add("deleteProduct", (productName = 'Logitech MX Vertical') => {
    cy.contains('tr', productName)
      .should('be.visible')
      .within(() => {
        cy.get('.btn-danger')
          .should('be.visible')
          .click();
        });
})