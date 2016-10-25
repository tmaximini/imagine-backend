import jwt from 'jsonwebtoken'
import { findByUuid } from '../services/user'
import { getToken } from '../utils/auth'

const JWT_SECRET = process.env.JWT_SECRET || 'SomeReallyHardToGuessString'

export async function ensureUser(ctx, next) {
  const token = getToken(ctx)

  if (!token) {
    ctx.status = 401
  }

  let decoded = null
  try {
    decoded = jwt.verify(token, JWT_SECRET)
  } catch (err) {
    ctx.status = 401
  }

  ctx.state.user = await findByUuid(decoded.uuid)
  if (!ctx.state.user) {
    ctx.status = 401
  }

  return next()
}
