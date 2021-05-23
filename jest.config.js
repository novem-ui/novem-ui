const path = require('path')

const basename = path.basename(process.cwd())

module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.{spec,stories}.{ts,tsx}',
    '!packages/theme/*.ts',
    '!packages/badge/*.ts',
    '!packages/button/*.ts',
    '!packages/core/*.ts',
    '!packages/base/*.ts',
    '!packages/text/*.ts'
  ],

  coverageDirectory: path.resolve(__dirname, 'coverage', basename),
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: path.resolve(__dirname, './tsconfig.spec.json')
    }
  },
  snapshotSerializers: ['@emotion/jest/serializer']
}
