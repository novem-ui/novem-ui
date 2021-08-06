const path = require('path')

const basename = path.basename(process.cwd())

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './packages/babel.config.js' }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    },
    // this is not a good practice for us and should not be repeated
    'packages/input/src/text-field/index.tsx': {
      branches: 88
    }
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/cypress/'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cypress/'
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.{spec,stories}.{ts,tsx}',
    '!packages/theme/*.ts',
    '!packages/checkbox/*.ts',
    '!packages/badge/*.ts',
    '!packages/button/*.ts',
    '!packages/core/*.ts',
    '!packages/base/*.ts',
    '!packages/text/*.ts',
    '!packages/input/*.ts',
    '!packages/switch/*.ts',
    '!packages/layout/*.ts',
    '!packages/**/types.ts',
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
