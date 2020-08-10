import '@testing-library/jest-dom'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import rmRecursive from '../utils/rm-recursive'
import { testEnvironments } from '../config/build-time'

const testEnvironmentsFiles = readdirSync(testEnvironments)

testEnvironmentsFiles.forEach(filename => {
  if (/^\.docs/.test(filename)) {
    rmRecursive(resolve(testEnvironments, filename))
  }
})
