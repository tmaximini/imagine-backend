import models from '../models'
import uuid from 'uuid'
import bcrypt from 'bcrypt-as-promised'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'SomeReallyHardToGuessString'

export async function findAll (ctx) {
  return models.User.findAll()
}

export async function findById (id) {
  return models.User.findOne({
    where: { id }
  })
}

export async function findByUuid (uuid) {
  return models.User.findOne({
    where: { uuid }
  })
}

export async function findByUsername (username) {
  return models.User.findOne({
    where: { username }
  })
}

export async function create (params) {
  return models.User.create({
    uuid: uuid.v4(),
    ...params
  })
}

export async function login ({ username, password }) {
  console.log('username:', username)

  try {
    const user = await findByUsername(username)
    const loginMatch = await _handleLogin(user, password)
    const claim = {
      uuid: user.uuid
    }

    console.log('loginMatch:', loginMatch)

    return !loginMatch ? false : {
      token: jwt.sign(claim, JWT_SECRET)
    }
  } catch (e) {
    return false
  }
}

async function _handleLogin (user, clearTextPw) {
  try {
    const loginMatch = await bcrypt.compare(clearTextPw, user.password)
    return loginMatch
  } catch (e) {
    return false
  }
}
