/// <reference types="cypress" />

describe("check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.intercept("POST", "http://localhost:3000/", {
      fixture: "example.json",
    }).as("post");
  });

  it("header is not visable", () => {
    cy.get('[data-qa="c-header"]').should("exist");
  });

  // it('not visible', () => {
  //   cy.get('[data-qa="c-button"]').click().then(()=>{
  //     cy.get('[data-qa="c-header"]').should('not.be.visible')
  //   })
  //   cy.get('[data-qa="c-button"]').click()
  // })
  it("h1 not exist", () => {
    cy.get('[data-qa="c-button"]').click();
    cy.get('[data-qa="c-header"]').should("not.exist");
    // cy.wait('@post')
  });
  it("h1 exist ", () => {
    cy.get('[data-qa="c-button"]').click();
    cy.get('[data-qa="c-header"]').should("not.exist");
    // cy.wait('@post')
  });

  it("test the input", () => {
    cy.get('[data-qa="c-input"]').as("gogog");
    cy.get('[data-qa="c-input"]').type("gooogle");
    cy.log("x", x);
  });

  it("link", () => {
    cy.get("@go").should("exist");
  });
});
