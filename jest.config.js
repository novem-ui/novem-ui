const path = require('path')

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}', '!**/node_modules/**', '!**/*.{spec,stories}.{ts,tsx}'],
  coverageDirectory: path.resolve(__dirname, 'coverage'),
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    },
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
}
