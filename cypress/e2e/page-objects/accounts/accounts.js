export const accountPage = {
  accountPageURL: "https://automationteststore.com/index.php?rt=account/login",
  homePageURL: "https://automationteststore.com/",
  accountPagePO: {
    loginName: "#loginFrm_loginname",
    loginPassword: "#loginFrm_password",
    loginSubmitBtn: "#loginFrm > fieldset > .btn",
  },
  user: {
    loginName: "Thor Odinson",
    firstName: "Thor",
    lastName: "Odinson",
    email: "GodofThunder@asgard.com",
    password: "strongestavenger",
    city: "Atlanta",
    state: "Kent",
    zip: "12345",
    address: "Buckhead",
    phoneNumber: "12345567890",
  },
};

export default class AccountPage {
  //page Actions

  clickOn_loginBtn() {
    cy.get(accountPage.accountPagePO.loginSubmitBtn).click();
  }

  loginForm_Submission(
    firstName = accountPage.user.fullName,
    password = accountPage.user.password
  )
  
  //assertions
 {
    cy.get(accountPage.accountPagePO.loginName).type(firstName);
    cy.get(accountPage.accountPagePO.loginPassword).type(password);

    //cy.get(accountPage.accountPagePO.loginSubmitBtn).click();
  }

  verifyAccount() {
    cy.get(accountPage.accountPagePO.loginName).contains(accountPage.userName);
    cy.get(accountPage.accountPagePO.loginPassword).contains(
      accountPage.loginPassword
    );
  }

  retrieveEmail() {
    cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').click();
    cy.get("#forgottenFrm_loginname").type(accountInfo.user.loginName);
    cy.get("#forgottenFrm_email").type(accountInfo.user.email);
    cy.get(".col-md-12 > .btn-orange").click();
  }


}
