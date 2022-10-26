import AccountPage from '../../page-objects/accounts/accounts'

const accountPagePO = new AccountPage();

describe('Test ability to log in, select item, and add to cart.', () => {
    it("Should be able to login with correct credentials", () => {
        accountPagePO.visitPage();
        accountPagePO.loginForm_Submission();
    });
})