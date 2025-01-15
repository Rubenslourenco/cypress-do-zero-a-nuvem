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
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('.button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Rubens");
    cy.get("#lastName").type("Lourenco");
    cy.get("#email").type("rubens@gmail,com");
    cy.get("#phone").type("11999999999");
    cy.get("#open-text-area").type("teste");
    cy.get('.button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it("Campo telefone Continua vazio quando preenchido com um valor não numerico", () => {
    cy.get("#phone").type("asdf").should("have.value", "");
  });

  it("Preencher e limpa os campos nome, sobrenome, email, telefone", () => {
    cy.get("#firstName")
      .type("Rubens")
      .should("have.value", "Rubens")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Lourenco")
      .should("have.value", "Lourenco")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("rubens@gmail.com")
      .should("have.value", "rubens@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("119999999")
      .should("have.value", "119999999")
      .clear()
      .should("have.value", "");
  });

  it.only("Envia o formulario com sucesso usando um comando customizado", () => {
    const data = {
      firstName: "Lorenna",
      lastName: "Caetano",
      email: "lorenna@gmail.com",
      text: "teste02",
    };

    cy.fillMandatoryFieldsSubmit(data);

    cy.get(".success").should("be.visible");
  });
});
