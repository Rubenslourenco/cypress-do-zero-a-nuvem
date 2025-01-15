Cypress.Commands.add("fillMandatoryFieldsSubmit", () => {
  cy.get("#firstName").type("Rubens");
  cy.get("#lastName").type("Lourenco");
  cy.get("#email").type("rubens@gmail,com");
  cy.get("#phone").type("11999999999");
  cy.get("#open-text-area").type("teste");
  cy.get('.button[type="submit"]').click();
});
