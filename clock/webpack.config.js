var path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['es2015', 'react', 'stage-2']
          }
        }
      }
    ]
  }
};
