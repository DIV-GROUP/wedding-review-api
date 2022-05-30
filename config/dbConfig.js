//Database configuration
const dotenv = require('dotenv').config()


//
module.exports = {
    HOST : 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'weddings',
    dialect: 'mysql',
    PORT: 3306,
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
}


