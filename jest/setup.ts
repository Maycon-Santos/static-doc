import '@testing-library/jest-dom'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import rmRecursive from '../utils/rm-recursive'
import { testEnvironmentsPath } from '../config/build-time'

const testEnvironmentsFiles = readdirSync(testEnvironmentsPath)

testEnvironmentsFiles.forEach(filename => {
  if (/^\.docs/.test(filename)) {
    rmRecursive(resolve(testEnvironmentsPath, filename))
  }
})
