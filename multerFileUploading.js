const express = require('express')
const multer = require('multer')
const app=express()

const mystorage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "uploads")
    },
    filename:function(req, file, cb){
        cb(null, file.originalname)
    }
})

//filtering what extension files can be uploaded by the user
const upload = multer({storage:mystorage, fileFilter:function(req, file, cb){
        if(file.mimetype == "image/jpeg" || file.mimetype == "	image/x-png"){
            cb(null, true)
        }
        else{
            cb(null, false)
            cb(new Error("Valid extensions are jpeg and png"))
        }
    },
    limits:{fileSize:1584675}
})
//fn ln em pwd profilepic
app.post('/signup', upload.single('pfp'), function(req, res){
    //req.file is the 'pfp' file
    //req.body will hold the text fileds, if there were any
    console.log(req.body)
    console.log(req.file)
    res.json({msg:"Signup done", status:200, data:"signup done"})
})

//port
app.listen(9999)