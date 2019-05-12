
module.exports = {
  plugins: {
      'autoprefixer': {
          browsers: ['last 2 versions']
      },
      'cssnano' : {
          autoprefixer: false,
          discardComments: {
            removeAll: true
          }
      }
  }
}