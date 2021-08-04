const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y'
  ],
  reactDocgenTypescriptOptions: {
    propFilter: (prop) => (prop.parent ? !/node_modules\/(?!@novem-ui\/).*/.test(prop.parent.fileName) : true)
  },
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, 'emotion']
    // any extra options you want to set
  }),
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        }
      }
    }
  }
}
