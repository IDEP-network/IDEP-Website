const path = require('path')

module.exports = {
  assetPrefix: './',
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}