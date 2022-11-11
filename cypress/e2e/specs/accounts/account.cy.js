import AccountPage from '../../page-objects/accounts/accounts';
import CommonMethods from '../../page-objects/common/common';


const homePageURL = "https://automationteststore.com/index.php?rt=account/login"

const commonMethods = new CommonMethods();
const accountPage = new AccountPage();

// beforeEach(() => {
//     accountPage.visitPage();
// });

describe('Test ability to log in, select item, and add to cart.', () => {
    // it("Should be able to login with corre ct credentials", () => {
    //     accountPage.visitPage();
    //     accountPage.loginForm_Submission();
    // });

    // it("Should take you to email retrieval", () => {
    //     accountPage.retrieveEmail();
    // });

    it("Should take you to correct page given URL", () => {
       commonMethods.visitPage(homePageURL);
       commonMethods.verifyPage(homePageURL);
    });
})