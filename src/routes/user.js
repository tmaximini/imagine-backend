import Router from 'koa-router'


const userRouter = new Router({ prefix: '/users'})
import * as UserService from '../services/user'

userRouter
  .get('/', async (ctx, next) => {
    try {
      await UserService.findAll()
        .then(users => ctx.body = users)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/:id', async (ctx, next) => {
    try {
      await UserService.findById(ctx.params.id)
        .then(user => ctx.body = user)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/name/:username', async (ctx, next) => {
    try {
      await UserService.findByUsername(ctx.params.username)
        .then(user => ctx.body = user)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/', async (ctx, next) => {
    try {
      await UserService.create(ctx.request.body)
        .then(user => ctx.body = user)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/login', async (ctx, next) => {
    try {
      console.log('ctx.request.body:', ctx.request.body);
      const result = await UserService.login(ctx.request.body)

      if (!result) {
        ctx.status = 401
      } else {
        ctx.body = result
      }

    } catch(e) {

      console.log(e)
      next(e)
    }
  })
  .del('/:id', (ctx, next) => {

  })
  .put('/:id', (ctx, next) => {

  })

export default userRouter
