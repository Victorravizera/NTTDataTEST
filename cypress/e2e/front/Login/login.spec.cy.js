describe("Realizar o Login na pagina", () => {
    it("Realizar o login", () => {
      cy.visitBaseUrl();           
      cy.loginNTT();         
      
      
      cy.contains('Bem Vindo Fulano da Silva').should('be.visible');
    });
})