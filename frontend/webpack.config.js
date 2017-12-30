const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('../static/assets/js/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader",
        }]
      },
      { test: /\css$/, loader: 'css-loader' }
    ]
  }
}
