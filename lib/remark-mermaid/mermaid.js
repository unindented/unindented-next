const { execSync } = require('child_process')

const { readFileSync, writeFileSync } = require('fs-extra')
const tmp = require('tmp')
const which = require('which')

const mmdc = which.sync('mmdc')

const render = src => {
  const { name: input } = tmp.fileSync({ postfix: '.mmd' })
  const { name: output } = tmp.fileSync({ postfix: '.svg' })
  writeFileSync(input, src, 'utf8')
  execSync(`${mmdc} -i ${input} -o ${output} -b transparent`)
  return readFileSync(output, 'utf8')
}

module.exports = {
  render,
}
