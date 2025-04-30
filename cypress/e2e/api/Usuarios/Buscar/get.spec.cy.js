describe("Busca por usuarios", () => {
    it("Listar todos os usuarios", () => {
        cy.GetUsersAll().then((response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.quantidade).to.equal(3);
        })
    })
    it("Listar usuario por ID", () => {
        cy.GetUsersId("0uxuPY0cbmQhpEz1").then((response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.usuarios[0]._id).to.equal('0uxuPY0cbmQhpEz1');
        })
    })
    it("Listar usuario por email", () => {
        cy.GetUsersEmail("inexistente@qa.com").then((response) => {
            expect(response.status).to.be.eq(200)
            expect(response.body.usuarios[0].email).to.be.a('string');
        })
    })


})

