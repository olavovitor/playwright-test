const { test, expect } = require("@playwright/test");
const { UserHandler } = require("../utils/userHandler");
const { HomePage } = require("../pages/home-page");
const { LoginPage } = require("../pages/login-page");
const { CloudAppPage } = require("../pages/cloudapp-page");
const { SettingsPage } = require("../pages/settings-page");

test.describe("Exception Flow", () => {
  test.describe("Upload Image Too Large", () => {
    test("should present an error message about the file size", async ({
      page,
    }) => {
      const userHandler = new UserHandler(page);
      const cloudAppPage = new CloudAppPage(page);
      const settingsPage = new SettingsPage(page);

      await userHandler.authenticate(page);
      await cloudAppPage.goToSettings(page);
      await settingsPage.failToChangeAvatar(page);
      await expect(settingsPage.avatarMaxSize).toBeVisible();
    });
  });

  test.describe("Login Failed", () => {
    test("should present an error message about wrong password/email", async ({
      page,
    }) => {
      const homePage = new HomePage(page);
      const loginPage = new LoginPage(page);

      await homePage.goto(page);
      await homePage.gotoLogin(page);
      await loginPage.failSigninIn(page);
      await expect(loginPage.invalidLoginError).toBeVisible();
    });
  });
});
