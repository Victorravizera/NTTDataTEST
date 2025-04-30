Cypress.Commands.add("GetUsersAll", () => {
    cy.AcessToken();  
    cy.get('@token').then((token) =>{
      return cy.request({
        method: "GET",
        url: `https://serverest.dev/usuarios`,
        headers:{
              Authorization: `Bearer ${token}`
        },
        failOnStatusCode: false
      })
    })
  })
  
  Cypress.Commands.add("GetUsersId", (_id) => {
    cy.AcessToken();
    cy.get('@token').then((token) => {
      return cy.request({
        method: "GET",
        url: "https://serverest.dev/usuarios", 
        headers: {
          Authorization: `Bearer ${token}`
        },
        qs: {
          _id: _id 
        },
        failOnStatusCode: false
      });
    });
  });
  
  Cypress.Commands.add("GetUsersEmail", (email) => {
    cy.AcessToken();
    cy.get('@token').then((token) => {
      return cy.request({
        method: "GET",
        url: "https://serverest.dev/usuarios?email=${email}", 
        headers: {
          Authorization: `Bearer ${token}`
        },
        qs: {
          email: `${email}`
        },
        failOnStatusCode: false
      });
    });
  });