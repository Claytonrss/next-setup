const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [
    withImages({
      esModule: true,
    }),
  ],
  {
    images: {
      disableStaticImages: true,
    },
    reactStrictMode: true,
  }
)
