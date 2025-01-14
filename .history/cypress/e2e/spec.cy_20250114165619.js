describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it.only("preenchernos campos dos obrigatorios e envia o formulario", () => {
    cy.get("#firstName").type("Rubens");
    cy.get("#lastName").type("Lourenco");
    cy.get("#email").type("rubens@gmail.com");
    cy.get("#phone").type("11999999999");
  });
});
