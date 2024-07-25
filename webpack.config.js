const path = require('path');

module.exports = {
  entry: './src/index.js',  // Ensure this path matches your actual directory structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // Use 'production' for production builds
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Ensure Babel is installed if you use this loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add additional loaders if needed
    ],
  },
};
