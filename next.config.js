const path = require('path');
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
    pngquant: true
  }],
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    }
  },
  {
    images: {
      disableStaticImages: true
    }
  }
])