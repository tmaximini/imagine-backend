export function errorMiddleware () {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      console.log('hello from errorhandler:', ctx.status)
      ctx.status = err.status || 500
      ctx.body = err.message
      ctx.app.emit('error', err, ctx)
    }
  }
}
