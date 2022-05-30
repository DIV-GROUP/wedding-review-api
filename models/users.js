const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const User = sequelize.define('User', {
  
    user_id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
         allowNull:false,
         primaryKey:true
     },

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
    }
})

User.sync({ force: true });

module.exports = User
  