// playwright.config.js
module.exports = {
    use: {
      baseURL: 'https://reqres.in/api',
    },
    projects: [
      {
        name: 'API tests',
        testDir: './tests',
      },
    ],
  };
  