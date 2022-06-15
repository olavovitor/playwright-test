const elements = {
  // BUTTON
  BTN_SUBMIT_AVATAR: `[data-testid="onboarding-submit-about-you-form"]`,
  BTN_BACK_DASHBOARD: `[data-testid="settings-back-dashboard"]`,

  // INPUT
  INP_AVATAR: `input[name="user\\[avatar\\]"]`,
  INP_FULLNAME: `[data-testid="settings-about-you-name-field"]`,
  INP_COMPANY: `[data-testid="settings-about-you-company-field"]`,
  INP_ROLE: `[data-testid="settings-about-you-profile-field"]`,

  // TOAST
  TST_AVATAR_MAX_SIZE_ERROR: `text=Avatar Max size is 500x500px`,

  // SUB-MENU
  SUB_PROFILE: `[data-testid="profile-settings"]`,
};

module.exports = {
  elements,
};
