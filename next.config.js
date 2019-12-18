/* eslint-disable */
const withCss = require('@zeit/next-css')

module.exports = withCss({
    target: `serverless`,
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
})

exports.default = {
  env: {
    TINY_MCE_API_KEY: process.env.TINY_MCE_API_KEY,
    GOOGLE_MAPS: process.env.GOOGLE_MAPS,
  },
}
