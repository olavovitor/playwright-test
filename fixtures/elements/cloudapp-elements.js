const elements = {
  // BUTTON
  BTN_PROFILE: `//a[@id='main-menu']`,
  BTN_SETTINGS: `[data-testid="dropdown-link-settings"]`,
  BTN_SIGNOUT: `[data-testid="dropdown-link-sign_out"]`,

  // TOAST
  TST_SIGNEDOUT: `text=Successfully Logged Out`,
};

module.exports = {
  elements,
};
