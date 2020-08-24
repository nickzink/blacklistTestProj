const dotenv = require("dotenv");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

dotenv.config();

module.exports = () => {
  /* eslint-disable */
  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(
      path.resolve(__dirname + "/styles/blacklist-theme.less"),
      "utf8"
    )
  );
  // fix: prevents error when .less files are required by node
  if (typeof require !== "undefined") {
    require.extensions[".less"] = file => {};
  }
  return withCss(
      withLess({
        lessLoaderOptions: {
          cssModules: true,
          javascriptEnabled: true,
          modifyVars: themeVariables, // make your antd custom effective
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]"
          }
        },
        webpack: (config, { isServer }) => {
          if (isServer) {
            const antStyles = /antd\/.*?\/style.*?/;
            const origExternals = [...config.externals];
            config.externals = [
              (context, request, callback) => {
                if (request.match(antStyles)) return callback();
                if (typeof origExternals[0] === "function") {
                  origExternals[0](context, request, callback);
                } else {
                  callback();
                }
              },
              ...(typeof origExternals[0] === "function" ? [] : origExternals)
            ];

            config.node = {
              fs: "empty"
            };

            config.module.rules.unshift({
              test: antStyles,
              use: "null-loader"
            });
          }
          return config;
        },
        exportPathMap: function() {
          return {
            "/": { page: "/" },
            "/counter": { page: "/counter"},
            "/testComponents": { page: "/testComponents"},
            "/getStarted": { page: "/getStarted"},
            "/counter": { page: "/counter"},
          }
        },
        onDemandEntries: {
          // Make sure entries are not getting disposed.
          maxInactiveAge: 1000 * 60 * 60
        }
      })
  );
};
