//importing modules
const express = require("express");
const mysql = require('mysql2/promise');
const db = require('./models')
const userRoutes = require ('./routes/userRoute')
const cookieParser = require('cookie-parser')
const {Sequelize} = require('sequelize');

//setting up port
const PORT = process.env.PORT || 8800;

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)

// listening to server connection
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
