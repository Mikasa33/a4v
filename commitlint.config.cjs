const childProcess = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')

const apps = fs.readdirSync(path.resolve(__dirname, 'apps'))
const packages = fs.readdirSync(path.resolve(__dirname, 'packages'))

const gitStatus = childProcess.execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')

const scopeComplete = gitStatus
  .find(r => ~r.indexOf('packages'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%((?:\w|-)*)/)?.[1]

const subjectComplete = gitStatus
  .find(r => ~r.indexOf('packages/components/src'))
  ?.replace(/\//g, '%%')
  ?.match(/packages%%components%%src%%((?:\w|-)*)/)?.[1]

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@a4v/commitline-config'],
  prompt: {
    scopes: [
      'project',
      'docs',
      ...apps,
      ...packages,
    ],
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
    defaultScope: scopeComplete,
    defaultSubject: subjectComplete && `[${subjectComplete}] `,
  },
}
