//importing modules

// const  Sequelize  = require('sequelize')
const {Sequelize, DataTypes} = require('sequelize')

const dbConfig = require('../config/dbConfig')
const dotenv = require('dotenv').config()



//database connction
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  
//checking if connection is done


     sequelize.authenticate().then(() => {
         console.log(`Database connected to ${dbConfig.DB} `)
     }).catch((err) => {
         console.log(err)
     })
    
     const db = {}

     db.Sequelize = Sequelize
     db.sequelize = sequelize

//connecting to model
db.users = require('./users') (sequelize, DataTypes)
db.tokens = require('./token') (sequelize, DataTypes)



//relationship of users and token
db.users.hasOne(db.tokens, {
    as: 'token',
    foreignKey:"userId"
  })
  
  db.tokens.belongsTo(db.users, {
    as: 'user',
    foreignKey:"userId"
  })
  

//exporting the module
module.exports = db

