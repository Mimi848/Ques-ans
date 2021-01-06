const { environment } = require('@rails/webpacker')
var webpack = require('webpack');
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery/src/jquery', // I've also tried with just 'jquery' rather than referring specifically to the src folder.
  jQuery: 'jquery/src/jquery', // Same comment as above.
  popper: ['popper.js', 'default']
}));

module.exports = environment
