
export default class CommonMethods {
  // visit given page given url
  visitPage(url) {
    cy.visit(url);
  }

  // verify given page given url
  verifyPage(url) {
    cy.url().should("equals", url);
  }
}


