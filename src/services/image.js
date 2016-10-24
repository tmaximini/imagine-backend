import models from '../models'


export async function findAll(ctx) {
  return models.Image.findAll()
}

export async function findById(id) {
  return models.Image.findOne({
    where: { id }
  })
}

export async function create(params) {
  console.log('...params:', ...params)

  return models.Image.create({
    ...params
  })
}