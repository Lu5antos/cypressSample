# cypressSample

 1. Setup
 2. Design/ Architecture
 3. Writing Test Cases
 4. Next steps
## 1. Setup

1. Copy and paste git clone url from gituhb repo
2. Create folder on your desktop labeled `cypressSample`
3. Open project in Visual Studio Code and open a terminal
4. `cd` into folder you just created
5. run `git init`
6. go to github repo <https://github.com/kylesmmns/cypressSample>
7. copy ` ctrl + v` git clone url for either https or ssh. You will need to setup ssh keys if you choose that option. 
8. Go back to Visual Studio Code and run `git clone` plus the copied url from github
9. `cd` into the new folder cloned and run `yarn add cypress --dev`

## 2. Design/ Architechture

For this test automation we will use Page Object Model (POM). So there is predefined folder hierachy that will be used to store the test executor methods and another set of folders to store the page element selectors and page action functions. You will export the page actions to the test executor methods to conduct the tests. In the folders that contain the page actions you will also create assertions to validate the behavior. The assertions will use the chai assertion library. <https://github.com/chaijs/chai>. 


1. You will need to create the following folders. under `cypress` folder create a `e2e` folder
2. in the `e2e` folder create two folders, `page-objects` and `specs`
3. In the page objects you file create folders for each page on your website. i.e `login` , `homepage` , `cart` , `accounts` 
4. Inside each of these folder you create a `.js` file to where you store classes of page element variables and page action methods. Label the `.js.` file with the same naming convetion as the folder it is in. For the page element classe use the following object `export const accountPage = { 
    pageElement : 'htmlId',
    thisIsAJsonObject : 'andItStoresAllTheElementSelectors'
    }`
5. Underneath that export const invoke the following code

`export default class AccountPage {` <br>
    `//page actions ` <br>
`clickAccount(){`<br>
    `cy.get(accountPage.pageElement).click();`<br>
  `};`<br>
  ` // assertions`<br>
`verifyAccount(){` <br>
   ` cy.contains('HTML Text that needs to be true')` <br>
  `};`<br>
`};`<br>
This needs to be formatted

6. This can be done as a setup but can't be completed until you begin writing your test cases.

## 3. Writing a Test case

1. In the specs file create a similar folder structure as in the page obect folder.
2. in the spec folder make a `account..cy.js` file. Here you will begin your test cases.
3. insert the following import `import AccoutPage from ../../pageobjects/account.account-page.js`
4. declare a new variable `accountPage = new AccountPage();`
5. begin your test case
6. `describe('this is my test behavior', function () {`  <br>
    `it('go to the url and login', function () {` <br>
        `accountPage.visit();` <br>
        `accountPage.login();` <br>
    `});`<br>
`});`<br>

7. you will need to build the `.visit()` and `login()` method in the POM file by use the html selectors and page action methods. Chain the actions with the native cypress methods such as `.get()` , `.contains()` , `.click()`
8. reference the cypress docs for questions <https://docs.cypress.io/guides/overview/why-cypress>. 

## 4. Next steps

1. Make your code go to <https://www.saucedemo.com/> check out an item and verify that item is in you shopping cart.
2. to test use command `yarn test:open` in your command line in the project root folder.
