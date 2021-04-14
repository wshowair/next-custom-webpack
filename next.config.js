const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, {}) => ({
  /* config options here */
  assetPrefix: phase === PHASE_DEVELOPMENT_SERVER ? '': 'https://my-cdn.com',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'static/images',
          publicPath: `https://my-cdn.com/_next/static/images`,
        }
      }]
    });

    return config
  },
})