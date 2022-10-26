import HomePage, { homePage } from "../../page-objects/homepage/homepage";

const homePagePO = new HomePage();

describe('Test ability to log in, select item, and add to cart.', () => {
    it('Add an itme to the cart ', () => {
        homePagePO.visitPage();
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart').click()
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.get('tbody > :nth-child(2) > :nth-child(2) > a').contains('Skinsheen Bronzer Stick');
    });
})