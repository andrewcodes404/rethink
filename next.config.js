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
