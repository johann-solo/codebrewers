import test from 'ava'
import Nuxt from 'nuxt'
import { resolve } from 'path'

let nuxt = null
let server = null

test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await nuxt.build()
  server = new nuxt.Server(nuxt)
  server.listen(4000, 'localhost')
})

// Example of testing via dom checking
test('tests button component', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('cb-button'))
})


// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', t => {
  server.close()
  nuxt.close()
})
