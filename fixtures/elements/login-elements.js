const elements = {
  // BUTTON
  BTN_SIGNIN: `[data-testid="regular-login-submit"]`,
  BTN_SIGNUP: `[data-testid="regular-signup-submit"]`,
  BTN_SIGNOUT: `//div//span[contains(text(),'olavovitorfs@gmail.com')]/../..//a[@data-testid='dropdown-link-sign_out']`,

  // INPUT
  INP_EMAIL: `[data-testid="regular-login-email"]`,
  INP_PASSWORD: `[data-testid="regular-login-password"]`,
  INP_NAME_EMAIL: `input[name="email"]`,
  INP_NAME_PASSWORD: `input[name="password"]`,

  // TOAST
  TST_ACCOUNT_CREATED: `text=Account created successfully`,
  TST_DUPLICATED_EMAIL: `text=Validation failed: Email has already been taken`,

  // MESSAGE
  ERR_INVALID_LOGIN: `//div[text()='Invalid email / password combination']`,

  // OPTION
  OPT_SIGNUP: `text=Sign up for free`,
};

module.exports = {
  elements,
};
