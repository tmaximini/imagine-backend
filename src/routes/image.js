import Router from 'koa-router'
const imageRouter = new Router({ prefix: '/images'})
import * as ImageService from '../services/image'
import { ensureUser } from '../middleware/auth'

imageRouter
  .use(async (ctx, next) => await ensureUser(ctx, next))
  .get('/', async (ctx, next) => {
    try {
      await ImageService.findAll()
        .then(images => ctx.body = images)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/:id', async (ctx, next) => {
    try {
      await ImageService.findById(ctx.params.id)
        .then(image => ctx.body = image)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/', async (ctx, next) => {
    try {
      await ImageService.create(ctx.request.body)
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
