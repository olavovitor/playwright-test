const { HomePage } = require("../pages/home-page");
const { LoginPage } = require("../pages/login-page");

exports.UserHandler = class UserHandler {
  async authenticate(page) {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.goto(page);
    await homePage.gotoLogin(page);
    await loginPage.signIn(page);
  }
};
