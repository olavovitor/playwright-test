const { elements } = require("../fixtures/elements/cloudapp-elements");

exports.CloudAppPage = class CloudAppPage {
  constructor(page) {
    this.page = page;

    this.backButton = page.locator(elements.BTN_BACK);
    this.profileButton = page.locator(elements.BTN_PROFILE);
    this.settingsButton = page.locator(elements.BTN_SETTINGS);
    this.signOutButton = page.locator(elements.BTN_SIGNOUT);

    this.signedOutToast = page.locator(elements.TST_SIGNEDOUT);
  }

  async goToSettings() {
    await this.profileButton.click();
    await this.settingsButton.click();
  }

  async signOut() {
    await this.profileButton.click();
    await this.signOutButton.click();
  }
};
