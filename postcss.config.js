module.exports = {
  plugins: [
    require('autoprefixer') ({
      browsers: ['last 2 versions', 'ie 11'],
      cascade: false,
      grid: true
    }),
    require('postcss-modules')({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    })
  ]
}
