const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(module.filename)
const databaseConfig = require('../config').database

const database = {}

const sequelizeInstance = new Sequelize(databaseConfig.name, databaseConfig.user, databaseConfig.password, databaseConfig)

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
  })
  .forEach((file) => {
    let model = sequelizeInstance.import(path.join(__dirname, file))
    database[model.name] = model
  })

database['sequelizeInstance'] = sequelizeInstance

module.exports = database
