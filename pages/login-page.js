const { faker } = require("@faker-js/faker");
const { login, loginFail } = require("../fixtures/userData");
const { elements } = require("../fixtures/elements/login-elements");

const CREDENTIALS = {
  EMAIL: faker.internet.email(),
  PASSWORD: faker.internet.password(10, false, /^[a-zA-Z0-9-]+$/),
};

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.signUpButton = page.locator(elements.BTN_SIGNUP);
    this.signInButton = page.locator(elements.BTN_SIGNIN);

    this.emailField = page.locator(elements.INP_EMAIL);
    this.passwordField = page.locator(elements.INP_PASSWORD);
    this.nameEmailField = page.locator(elements.INP_NAME_EMAIL);
    this.namePasswordField = page.locator(elements.INP_NAME_PASSWORD);

    this.accountCreatedToast = page.locator(elements.TST_ACCOUNT_CREATED);

    this.invalidLoginError = page.locator(elements.ERR_INVALID_LOGIN);

    this.signUpOption = page.locator(elements.OPT_SIGNUP);
    this.signOutOption = page.locator(elements.BTN_SIGNOUT);
  }

  async signIn() {
    await this.emailField.fill(login.EMAIL);
    await this.passwordField.fill(login.PASSWORD);
    await this.signInButton.click();
  }

  async signUp() {
    await this.signUpOption.click();
    await this.nameEmailField.fill(CREDENTIALS.EMAIL);
    await this.namePasswordField.fill(CREDENTIALS.PASSWORD);
    await this.signUpButton.click();
  }

  async failSigninIn() {
    await this.emailField.fill(loginFail.EMAIL);
    await this.passwordField.fill(loginFail.PASSWORD);
    await this.signInButton.click();
  }
};
