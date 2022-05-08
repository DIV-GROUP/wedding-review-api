//importing modules
const express = require('express')
const PORT = process.env.PORT || 8080

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log(`server is running at ${PORT}`))