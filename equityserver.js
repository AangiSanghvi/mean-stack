const express = require("express")
const mongoose = require("mongoose")
const equityController = require("./controller/equityController")
const app = express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/mean23').then(()=> {console.log("dbConnected...")})

//equity routes
app.post("/insertScript", equityController.insertScript)

//port
app.listen(9999)