describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });
  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenchernos campos obrigatorios e envia o formulario", () => {
    const longText = Cypress._.repeat("Obrigado", 30);
    cy.get("#firstName").type("Rubens");
    cy.get("#lastName").type("Lourenco");
    cy.get("#email").type("rubens@gmail.com");
    cy.get("#phone").type("11999999999");
    cy.get("#open-text-area").type("teste");
    cy.get('.button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });

  it.only("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Rubens");
    cy.get("#lastName").type("Lourenco");
    cy.get("#email").type("rubens@gmail,com");
    cy.get("#phone").type("11999999999");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('.button[type="submit"]').click();
  });
});
