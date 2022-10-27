export const homePage = {
    homePageURL: "https://automationteststore.com/",
    homePagePO: {
    }
}

export default class HomePage {

    // page actions
    visitPage() {
        cy.visit(homePage.homePageURL)
    }

    // assertions
}