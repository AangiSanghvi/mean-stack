const express = require("express")
const royalcalc = require("./royalcalc")
const app = express()

//middleware, bodyparser(another middleware)
app.use(express.urlencoded({extended:true})) // extended:true- supports emojis & special characters
app.use(express.json())

//import
// this is post mapping
app.post("/add", royalcalc.add)
app.post("/sub", royalcalc.sub)
app.post("/mul", royalcalc.mul)

app.listen(9999)