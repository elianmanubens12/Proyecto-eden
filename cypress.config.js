const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    env: { grepFilterSpecs: true, grepOmitFiltered: true },
    viewportmobile: {
      device: "iphone-xr",
    },
    viewportdesktop: {
      device: "macbook-16",
    },
  },
  
});