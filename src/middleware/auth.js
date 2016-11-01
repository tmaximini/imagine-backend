import jwt from 'jsonwebtoken'
import { findByUuid } from '../services/user'
import { getToken } from '../utils/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'SomeReallyHardToGuessString'

export async function ensureUser(ctx, next) {
  const token = getToken(ctx)


  if (!token) {
    console.error('no token found')
    ctx.status = 401
    return next()
  }

  let decoded = null
  try {
    decoded = jwt.verify(token, JWT_SECRET)
  } catch (err) {
    console.error('token not valid')
    ctx.status = 401
    return next()
  }

  ctx.state.user = await findByUuid(decoded.uuid)
  if (!ctx.state.user) {
    console.error('no user for token')
    ctx.status = 401
  }

  return next()
}
