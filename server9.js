//routes - server file 9
//import
const express = require("express")
const app = express()
const productRoute = require("./routes/product.routes")
const mongoose = require("mongoose") // for db
const categoryRoute = require("./routes/category.routes")


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/mean23').then(()=> {console.log("dbConnected...")})

//product routes
app.use("/admin", productRoute)

//category routes
app.use("/admin", categoryRoute)

//port
app.listen(9999)
