const express = require('express')
const app = express()
require('dotenv').config()
const crudRoutes = require('./src/routes/crudRoutes')


app.use(express.json({extended: false})) //req.body

// Routes
app.use('/api', crudRoutes)


// Port Listening
app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})