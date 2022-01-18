#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const CWD = process.cwd()
const packageJsonPath = path.join(CWD, 'package.json')

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
  }
}

fs.writeFileSync(newPackageJsonPath, JSON.stringify(cleanPackage, null, 2))
