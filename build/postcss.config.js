module.exports = {
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('css-mqpacker')
  ],
  'local-plugins': true,
  autoprefixer: {
    browsers: '>0.1%'
  }
};
