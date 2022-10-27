export const accountPage = {
  accountPageURL: "https://automationteststore.com/index.php?rt=account/login",
  accountPagePO: {
    loginName: "#loginFrm_loginname",
    loginPassword: "#loginFrm_password",
    loginSubmitBtn: "#loginFrm > fieldset > .btn",
  },
  user: {
    fullName: "Thor Odinson",
    firstName: 'Thor',
    lastName: "Odinson",
    email: "Strongest@avenger.com",
    password: "GodOfThunder4Real",
  }
  
};

export default class AccountPage {

  //page Actions
  visitPage() {
    cy.visit(accountPage.accountPageURL)
  }
  clickOn_loginBtn(){
    cy.get(accountPage.accountPagePO.loginSubmitBtn).click();
  }

  //assertions
  loginForm_Submission(firstName = accountPage.user.fullName, password = accountPage.user.password) {
    cy.get(accountPage.accountPagePO.loginName).type(firstName);
    cy.get(accountPage.accountPagePO.loginPassword).type(password);
    
    //cy.get(accountPage.accountPagePO.loginSubmitBtn).click();
}

  verifyAccount() {
    cy.get(accountPage.accountPagePO.loginName).contains(accountPage.userName);
    cy.get(accountPage.accountPagePO.loginPassword).contains(accountPage.loginPassword);
  }
}
