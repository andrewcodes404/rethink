/* eslint-disable */
const withCss = require('@zeit/next-css')

module.exports = withCss({


  env: {
    TINY_MCE_API_KEY: 'wj3gr7di9eazkcvql2oehc86d43j1mnfi41mfo1rozfdodpx'
  },
    target: `serverless`,
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
})
