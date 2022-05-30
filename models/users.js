const Sequelize = require('sequelize')
// const sequelize = require('../utils/database')

module.exports = (sequelize, Sequelize) => {
const User = sequelize.define('user', {
  
    firstname: { 
        type: Sequelize.STRING, 
        allowNull:false 
    },

    lastname: { 
        type: Sequelize.STRING, 
        allowNull:false 
    },
  
    email: { 
        type: Sequelize.STRING, 
        allowNull:false 
    },

    password : { 
        type: Sequelize.STRING, 
        allowNull:false 
    },

    isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

}, {timestamps: true},)

return User
}


  