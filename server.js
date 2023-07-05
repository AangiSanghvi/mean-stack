http = require("http")
//console.log(http)

//create server
http.createServer(function(req,res){
    console.log("server works...")
   // var url = req.url
   // if 
    res.end("hi")
}).listen(9999)
