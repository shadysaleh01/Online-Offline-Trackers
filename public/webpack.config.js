const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
   entry: {
      app: "./index.js"
   },
   output: {
      path: __dirname + "/dist",
      filename: "app.bundle.js"
   },
};

module.exports = config;