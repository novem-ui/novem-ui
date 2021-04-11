module.exports = {
  roots: ['packages'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
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
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '^packages/(.*)$': '<rootDir>/packages/$1',
  },
  globals: {
    'ts-jest': {
      "babelConfig": true,
      tsconfig: './tsconfig.base.json'
    }
  }
}
