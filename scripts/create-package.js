#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const CWD = process.cwd()
const packageJsonPath = path.join(CWD, 'package.json')
const readmePath = path.join(CWD, 'README.md')

const {
  name,
  version,
  description,
  author,
  homepage,
  license,
  repository,
  bugs,
  peerDependencies,
  dependencies
} = JSON.parse(fs.readFileSync(packageJsonPath))

const folderName = path.basename(CWD)
const newPackageJsonPath = path.resolve(__dirname, '..', 'dist', folderName, 'package.json')
const readmeCopyPath = path.resolve(__dirname, '..', 'dist', folderName, 'README.md')

const cleanPackage = {
  name,
  version,
  description,
  author,
  homepage,
  license,
  repository,
  bugs,
  peerDependencies,
  dependencies,
  main: './index.js',
  types: './index.d.ts',
  publishConfig: {
    access: 'public'
  },

  files: ['**/*.js', '**/*.ts', '**/*.map', 'README.md']
}

fs.writeFileSync(newPackageJsonPath, JSON.stringify(cleanPackage, null, 2))
fs.copyFileSync(readmePath, readmeCopyPath)
