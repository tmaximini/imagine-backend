const router = require('koa-router')()
import models from '../models'

router
  .get('/', (ctx, next) => {
    ctx.body = 'YO'
  })
  .get('/images/:id', (ctx, next) => {
    ctx.body = ctx.params
  })
  .post('/images', (ctx, next) => {

  })
  .del('/images/:id', (ctx, next) => {

  })
  .put('/images/:id', (ctx, next) => {

  })

export default router
