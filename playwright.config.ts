export default {
  timeout: 30 * 1000,

  use: {
    browserName: 'chromium',

    headless: false,

    viewport: {
      width: 1920,
      height: 1080
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 10000,

    navigationTimeout: 30000
  }
};