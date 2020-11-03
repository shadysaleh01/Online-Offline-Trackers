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
   mode: "development",
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"],
               },
            },
         },
      ],
   },
   plugins: [
      new WebpackPwaManifest({
         fingerpints: false,
         name: "Budget tracker app",
         short_name: "Budget tracker",
         description: "An application that allows user add expenses and deposits to their budget with or without a connection.",
         start_url: "/",
         icons: [
            {
               src: path.resolve("/icons"),
               sizes: [96, 128, 192, 256, 384, 512],
               destination: path.join("public", "icons"),
            },
         ],
      }),
   ],
};

module.exports = config;