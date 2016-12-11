import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import logger from 'koa-logger'
import session from 'koa-generic-session'
import passport from 'koa-passport'
import serve from 'koa-static'
import json from 'koa-json'
import cors from 'koa-cors'

import config from '../config'
import { errorMiddleware } from '../src/middleware'
import routes from '../src/routes'
import db from '../src/models'

const env = process.env.NODE_ENV || 'development'

const app = new Koa()
app.keys = [config.session]


app.use(convert(logger()))
app.use(cors())
app.use(json())
app.use(bodyParser())
app.use(session())
app.use(errorMiddleware())


// require('../config/passport')
// app.use(passport.initialize())
// app.use(passport.session())

app.use(routes)

db.sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(config.http_port, () => {
      console.log(`Server started on ${config.http_port} in ${env}`)
  })
})

export default app
