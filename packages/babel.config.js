module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    'minify'
  ],
  plugins: ['@emotion'],
  ignore: [
    '**/node_modules/',
    '**/dist/',
    '**/*.stories.tsx',
    ...(process.env.NODE_ENV === 'test' ? [] : ['**/*.spec.ts', '**/*.spec.tsx'])
  ],
  comments: false
}
