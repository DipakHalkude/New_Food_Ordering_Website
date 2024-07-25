
const path = require('path');

module.exports = {
  entry: './src/index.js', // Update this if your entry file is located elsewhere
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};

