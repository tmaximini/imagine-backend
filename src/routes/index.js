const router = require('koa-router')()
import models from '../models'

router
  .get('/', (ctx, next) => {
    ctx.body = 'YO'
  })
  .get('/images', async (ctx, next) => {
    try {
      await models.Image.findAll()
        .then(images => {
          ctx.body = images
        })
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/images/:id', async (ctx, next) => {
    try {
      await models.Image
        .findOne({
          where: {
            id: ctx.params.id
          }
        })
        .then(image => {
          ctx.body = image
        })
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/images', (ctx, next) => {

  })
  .del('/images/:id', (ctx, next) => {

  })
  .put('/images/:id', (ctx, next) => {

  })

export default router
