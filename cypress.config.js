const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    //npenv: { grepFilterSpecs: true, grepOmitFiltered: true },
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook-16",
    },
  },

  e2e: {
    baseUrl: "https://www.edenentradas.com.ar/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
