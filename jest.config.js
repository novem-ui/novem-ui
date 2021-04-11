module.exports = {
  roots: ['packages'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 82,
      functions: 82,
      lines: 82,
      statements: 82
    }
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^packages/(.*)$': '<rootDir>/packages/$1',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.base.json'
    }
  }
}
