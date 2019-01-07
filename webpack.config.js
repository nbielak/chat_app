const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./public/javascripts/index.js",
    output: {
        path: path.resolve(__dirname, "public", "javascripts", "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    devtool: "source-map"
}