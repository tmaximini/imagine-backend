import Router from 'koa-router'
const imageRouter = new Router({ prefix: '/images'})
import * as ImageActions from '../services/image'

imageRouter
  .get('/', async (ctx, next) => {
    try {
      await ImageActions.findAll()
        .then(images => ctx.body = images)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/:id', async (ctx, next) => {
    try {
      await ImageActions.findById(ctx.params.id)
        .then(image => ctx.body = image)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/', async (ctx, next) => {
    try {
      await ImageActions.create(ctx.request.body)
        .then(image => ctx.body = image)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .del('/:id', (ctx, next) => {

  })
  .put('/:id', (ctx, next) => {

  })

export default imageRouter
