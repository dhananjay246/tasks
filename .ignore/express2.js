var express=require('express')

var app=express()

app.get('/',function(req,res){
    res.end('server started')

}).listen(8223,console.log("listening.."))