const express = require("express")
const order = require("./order") // you'll write "./" because it is an user-defined module-order.js
const app = express() // obj of express

app.get("/welcome", function(req, res){
    res.end("Welcome")
})

app.get("/vieworders", order.viewOrders)
app.get("/vieworderbyid", order.viewOrderById)

app.listen(9999) // port can be in between 1-65536, in computer ports after 9000 are all free so, you can take any port from there
