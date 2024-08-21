const express=require('express')

const expresss=express();

expresss.listen(2121);

expresss.get('/', function(req,res){
    res.send("hello world")
})

expresss.listen(2121, function(req,res){
    ("running..")
})


