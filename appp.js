
var http=require('http')

http.createServer(function(req,res){
res.write("hi yash")
res.end()
}).listen(8080)