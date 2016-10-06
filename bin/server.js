import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import passport from 'koa-passport'
import serve from 'koa-static'

import config from '../config'
import { errorMiddleware } from '../src/middleware'
import routes from '../src/routes'

const app = new Koa()
app.keys = [config.session]


app.use(convert(logger()))
app.use(bodyParser())
app.use(session())
app.use(errorMiddleware())


// require('../config/passport')
// app.use(passport.initialize())
// app.use(passport.session())

app
  .use(routes.routes())
  .use(routes.allowedMethods());


app.listen(config.port, () => {
  console.log(`Server started on ${config.port}`)
})

export default app
