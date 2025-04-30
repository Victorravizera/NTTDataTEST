describe("Login", () => {
  it("Recuperar token", () => {
    cy.AcessToken().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
    });
  });
});