describe("Fluxo de Listagem de Produtos", () => {
  it("Deve listar produtos após login bem-sucedido", () => {
    // 1. Acessa a página de login
    cy.visitBaseUrl();
    
    // 2. Realiza o login
    cy.loginNTT();
    
    // 3. Verifica login bem-sucedido
    cy.contains('Bem Vindo Fulano da Silva').should('be.visible');
    cy.url().should('include', '/home'); // Verifica redirecionamento
    
    // 4. Lista os produtos
    cy.listProducts(); // Note o padrão camelCase minúsculo
    
    // 5. Verifica a listagem
    cy.contains('Lista dos Produtos').should('be.visible');
  });
});