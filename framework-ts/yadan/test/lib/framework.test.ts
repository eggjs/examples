/// <reference types="mocha" />

import * as assert from 'assert'
import mm from 'egg-mock'
import * as path from 'path'


const key = 'framework-ts-example_123456'

describe('test/lib/framework.test.ts', () => {
  let app

  before(() => {
    app = mm.app({
      baseDir: path.join(__dirname, '../../../app'),
      framework: path.join(__dirname, '../../'),
    })
    return app.ready()
  })
  after(() => app.close())
  afterEach(mm.restore)

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(`hi, ${key}`)
      .expect(200)
  })

  it('should load config', () => {
    assert(app.config.test.key === key)
  })

  it('should load service', async () => {
    const ctx = app.mockContext()
    const data = await ctx.service.test.get(123)
    assert.deepEqual(data, {
      id: 123,
      name: key,
    })
  })
})
