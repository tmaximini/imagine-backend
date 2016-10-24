import models from '../models'


export async function findAll(ctx) {
  return models.User.findAll()
}

export async function findById(id) {
  return models.User.findOne({
    where: { id }
  })
}

export async function create(params) {
  console.log('...params:', ...params)

  return models.User.create({
    ...params
  })
}