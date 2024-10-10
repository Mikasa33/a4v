import { plugin as BemPlugin } from '@css-render/plugin-bem'
import { CssRender } from 'css-render'

const namespace = 'a'
const prefix = `.${namespace}-`
const elementPrefix = '__'
const modifierPrefix = '--'

const cssr = CssRender()
const plugin = BemPlugin({
  blockPrefix: prefix,
  elementPrefix,
  modifierPrefix,
})
cssr.use(plugin)

const { c, find } = cssr
const { cB, cE, cM, cNotM } = plugin

export {
  c,
  cB,
  cE,
  cM,
  cNotM,
  find,
  namespace,
  prefix,
}
