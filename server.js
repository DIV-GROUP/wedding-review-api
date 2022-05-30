const express = require("express");
const mysql = require('mysql2/promise');
const {
    Sequelize
} = require('sequelize');
const PORT = process.env.PORT || 8800;

const app = express();


// initialize();

async function initialize() {
 
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: "kally_la1ng_SQL"
    });

    await connection.query('CREATE DATABASE IF NOT EXISTS weddingSite');

    // connection.end();

    // connect to db
    const sequelize = new Sequelize('weddingSite', 'root', 'kally_la1ng_SQL', {
        host: 'localhost',
        dialect: 'mysql'
    });

    //connecting to the db

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // sync all models with database
    await sequelize.sync();
}







app.listen(PORT, () => console.log(`Server running on ${PORT}`));