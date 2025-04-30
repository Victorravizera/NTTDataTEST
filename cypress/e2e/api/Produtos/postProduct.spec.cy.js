describe("Busca por usuarios", () => {
    it("Listar todos os usuarios", () => {
        cy.AddProduct().then((response) => {
            expect(response.status).to.be.eq(201)
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
            expect(response.body._id).to.exist;
            expect(response.body._id).to.not.be.empty;
        })
    })
})