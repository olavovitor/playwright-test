const { expect } = require("@playwright/test");
const { elements } = require("../fixtures/elements/home-elements");

exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;

    this.homeLogo = page.locator(elements.OPT_HOME).first();

    this.loginButton = page.locator(elements.BTN_LOGIN);

    this.welcomeLoginLabel = page.locator("h1", { hasText: "Welcome back" });

    this.aboutLink = page.locator(elements.OPT_ABOUT);
    this.aboutTitle = page.locator(elements.TITLE_ABOUT);
  }

  async goto(page) {
    await page.goto(elements.HOME_URL);
    await expect(this.homeLogo).toBeVisible();
  }

  async gotoLogin() {
    await this.loginButton.first().click();
    await expect(this.welcomeLoginLabel).toBeVisible();
  }

  async about() {
    await this.aboutLink.click();
    await expect(this.aboutTitle).toBeVisible();
  }
};
