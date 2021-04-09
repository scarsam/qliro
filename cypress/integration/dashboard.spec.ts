/// <reference types="cypress" />

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads the default user to the header input", () => {
    cy.fixture("user").then((userFixture) => {
      cy.get("[data-testid=search]").should(
        "have.value",
        `${userFixture.firstName} ${userFixture.lastName} (${userFixture.dateOfBirth})`,
      );
    });
  });

  it("shows the search results", () => {
    cy.wait(500);
    cy.fixture("users").then((usersFixture) => {
      cy.get('[type="text"]').focus().clear().clear();
      cy.get("[data-testid=search]").type("a");
      cy.get("header").contains(
        `${usersFixture[0].firstName} ${usersFixture[0].lastName} (${usersFixture[0].dateOfBirth})`,
      );
      cy.get("header").contains(
        `${usersFixture[1].firstName} ${usersFixture[1].lastName} (${usersFixture[1].dateOfBirth})`,
      );
    });
  });

  it("updates the pagination", () => {
    cy.wait(500);
    cy.get("nav").contains("Next").click();
    cy.get("nav")
      .contains("Next")
      .invoke("attr", "class")
      .should("contain", "back");
    cy.get("nav").contains("Back").click();
    cy.get("nav")
      .contains("Next")
      .invoke("attr", "class")
      .should("contain", "next");
  });
});
