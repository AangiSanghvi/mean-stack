const express = require("express")
const sessionController = require("./controller/sessionController")
const app = express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//controller
app.post("/signup", sessionController.signup)
app.get("/getallusers", sessionController.getAllUsers)
app.post("/login", sessionController.login)
                    
//server - port
app.listen(9999)