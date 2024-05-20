const path = require('path');

module.exports = {
  mode: 'production', // Set the mode to 'production' or 'development
  entry: './server.js', // Path to your main entry file
  output: {
    filename: 'bundle.js', // Output filename

    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Define loaders for handling different file types
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Example: Babel loader for transpiling JavaScript
        },
      },
      // Add more rules for handling other file types like CSS, images, etc.
    ],
  },
    target: 'node', // Specify the target environment
};
