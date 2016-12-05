import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../config'

const sequelize = new Sequelize(config.database, config.username, config.password, config)
const db = {}

// iterate over all models and import them to sequelize
fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

for (const modelName in db) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
}

console.log('db:', db)

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
