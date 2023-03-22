const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    plugins: [
        new NodePolyfillPlugin()
    ],
    optimization: {
        minimizer: [new TerserPlugin({ extractComments: false })],
      },
}