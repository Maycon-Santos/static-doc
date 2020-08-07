import { spawnSync } from 'child_process'
import { existsSync, readdirSync } from 'fs'
import { resolve } from 'path'
import { version } from '../../package.json'
import {
  rootPath,
  docsDestinyPath,
  userBuildDirDefault,
  userBuildStaticDirDefault
} from '../../config/build-time'

describe('cli', () => {
  beforeEach(() => {
    spawnSync('node', ['bin', 'setup-test'])
  })

  it('should print help text', () => {
    const result = spawnSync('node', ['bin', '--help'])
    const stdout = result.stdout.toString()
    expect(stdout).toContain('--version')
  })

  it('should print the current version', () => {
    const result = spawnSync('node', ['bin', '--version'])
    const stdout = result.stdout.toString()
    expect(stdout.trim()).toBe(version)
  })

  it('should generate the build', () => {
    spawnSync('node', ['bin', 'build', '--dir', 'test-environments/simple'])
    const outputFiles = resolve(
      rootPath,
      'test-environments',
      userBuildDirDefault
    )
    const buildDone = existsSync(outputFiles)
    expect(buildDone).toBe(true)
  })

  it('should generate the build as static files', () => {
    spawnSync('node', [
      'bin',
      'build:static',
      '--dir',
      'test-environments/simple'
    ])
    const outputFiles = resolve(
      rootPath,
      'test-environments',
      userBuildStaticDirDefault
    )
    const buildDone = existsSync(outputFiles)
    expect(buildDone).toBe(true)
  })

  it('should link .mdx files in pages', () => {
    spawnSync('node', ['bin', 'link', '--dir', 'test-environments/simple'])
    const mdxFiles = readdirSync(resolve(rootPath, 'test-environments/simple'))
    const pageFiles = readdirSync(docsDestinyPath)
    mdxFiles.forEach(file => {
      expect(pageFiles.includes(file)).toBe(true)
    })
  })

  it('should start dev server', () => {
    const { error } = spawnSync(
      'node',
      ['bin', 'dev', '--dir', 'test-environments/simple'],
      {
        timeout: 2000
      }
    )

    // If the error is timeout it means that the process probably went well
    // @ts-ignore
    expect(error.code).toBe('ETIMEDOUT')
  })

  it('should start production server', () => {
    spawnSync('node', ['bin', 'build', '--dir', 'test-environments/simple'])
    const { error } = spawnSync(
      'node',
      ['bin', 'start', '--dir', 'test-environments/simple'],
      {
        timeout: 2000
      }
    )

    // If the error is timeout it means that the process probably went well
    // @ts-ignore
    expect(error.code).toBe('ETIMEDOUT')
  })
})
