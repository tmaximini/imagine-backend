import Router from 'koa-router'
const userRouter = new Router({ prefix: '/users'})
import * as UserActions from '../services/user'

userRouter
  .get('/', async (ctx, next) => {
    try {
      await UserActions.findAll()
        .then(users => ctx.body = users)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .get('/:id', async (ctx, next) => {
    try {
      await UserActions.findById(ctx.params.id)
        .then(user => ctx.body = user)
    } catch(e) {
      console.log(e)
      next(e)
    }
  })
  .post('/', async (ctx, next) => {
    try {
      await UserActions.create(ctx.request.body)
        .then(user => ctx.body = user)
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
