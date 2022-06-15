const { test, expect } = require("@playwright/test");
const { UserHandler } = require("../utils/userHandler");
const { HomePage } = require("../pages/home-page");
const { LoginPage } = require("../pages/login-page");
const { CloudAppPage } = require("../pages/cloudapp-page");
const { SettingsPage } = require("../pages/settings-page");

test.describe("Happy Path", () => {
  test.describe("Sign Up Flow", () => {
    test("should register a new account", async ({ page }) => {
      const homePage = new HomePage(page);
      const loginPage = new LoginPage(page);

      await homePage.goto(page);
      await homePage.gotoLogin(page);
      await loginPage.signUp(page);
      await expect(loginPage.accountCreatedToast).toBeVisible();
    });
  });

  test.describe("Successful Authentication + Sign Out", () => {
    test("should log into the CloudApp", async ({ page }) => {
      const cloudAppPage = new CloudAppPage(page);
      const userHandler = new UserHandler(page);

      await userHandler.authenticate(page);
      await expect(cloudAppPage.profileButton).toBeEnabled();

      await cloudAppPage.signOut();
      await expect(cloudAppPage.signedOutToast).toBeVisible();
    });
  });

  test.describe("Settings > Change Avatar", () => {
    test("should allow changing the user Avatar", async ({ page }) => {
      const cloudAppPage = new CloudAppPage(page);
      const settingsPage = new SettingsPage(page);
      const userHandler = new UserHandler(page);

      await userHandler.authenticate(page);
      await cloudAppPage.goToSettings(page);
      await settingsPage.changeAvatar(page);
      await expect(settingsPage.backButton).toBeVisible();
    });
  });
});
