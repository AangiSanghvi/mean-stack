//about code - db connection (mongodb)

//import
const express = require("express")
const mongoose = require("mongoose")
const productController = require("./controller/productControllerDb")
const categoryController = require("./controller/categoryController")
const industryController = require("./controller/industryController")
const equityController = require("./controller/equityController")
const app = express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//db connection
mongoose.connect('mongodb://127.0.0.1:27017/mean23').then(()=> {console.log("dbConnected...")})

//product routes - mapping
app.post("/addproduct2", productController.addProduct)
app.get("/products", productController.getAllProducts)
app.get("/getproduct/:productId", productController.getProductById)
app.delete("/deleteproduct/:productId", productController.deleteProductById)
app.delete("/deleteall", productController.deleteAll)
app.post("/products/filter", productController.filterProduct)
app.put("/updateproduct", productController.updateProduct)

//category routes - mapping
app.post("/addcategory", categoryController.addCategory)
app.get("/allcategories", categoryController.getAllCategories)
app.get("/getcategorybyid/:categoryId", categoryController.getCategoryById)
app.delete("/delcategorybyid/:categoryId", categoryController.deleteCategoryById)
app.delete("/delallcategories", categoryController.deleteAllCategories)

//industry routes - mapping
app.post("/industryUpload", industryController.uploadIndustry)

//equity routes
app.post("/equityUpload", equityController.uploadEquity)
app.get("/getallequity", equityController.getAllEquity)

//port
app.listen(9999)