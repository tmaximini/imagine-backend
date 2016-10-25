import models from '../models'
import uuid from 'uuid'


export async function findAll(ctx) {
  return models.Image.findAll()
}

export async function findById(id) {
  return models.Image.findOne({
    where: { id }
  })
}

export async function create(params) {
  return models.Image.create({
    uuid: uuid.v4(),
    ...params
  })
}