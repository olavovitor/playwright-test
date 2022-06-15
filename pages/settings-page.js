const path = require("path");
const { user_profile } = require("../fixtures/userData");
const { elements } = require("../fixtures/elements/settings-elements");

exports.SettingsPage = class SettingsPage {
  constructor(page) {
    this.page = page;

    this.backButton = page.locator(elements.BTN_BACK_DASHBOARD);

    this.submitAvatarButton = page.locator(elements.BTN_SUBMIT_AVATAR);
    this.fullNameInput = page.locator(elements.INP_FULLNAME);
    this.companyInput = page.locator(elements.INP_COMPANY);

    this.avatarMaxSize = page.locator(elements.TST_AVATAR_MAX_SIZE_ERROR);
  }

  async changeAvatar(page) {
    const filePath = path.join(__dirname, user_profile.AVATAR);
    await page.setInputFiles(elements.INP_AVATAR, filePath);
    await this.fullNameInput.fill(user_profile.FULL_NAME);
    await this.companyInput.fill(user_profile.COMPANY);
    await page.locator(elements.INP_ROLE).selectOption(user_profile.ROLE);

    await this.submitAvatarButton.click();
  }

  async failToChangeAvatar(page) {
    const filePath = path.join(__dirname, user_profile.AVATAR_LARGE);
    await page.setInputFiles(elements.INP_AVATAR, filePath);
    await this.fullNameInput.fill(user_profile.FULL_NAME);
    await this.companyInput.fill(user_profile.COMPANY);
    await page.locator(elements.INP_ROLE).selectOption(user_profile.ROLE);

    await this.submitAvatarButton.click();
  }
};
