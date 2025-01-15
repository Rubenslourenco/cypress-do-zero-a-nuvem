Cypress.Commands.add("fillMandatoryFieldsSubmit", (data) => {
  cy.get("#firstName").type("data.firstName");
  cy.get("#lastName").type("data.lastName");
  cy.get("#email").type("data.email");
  cy.get("#phone").type("data.phone");
  cy.get("#open-text-area").type("data.text");
  cy.get('.button[type="submit"]').click();
});
