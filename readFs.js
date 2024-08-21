var fs=require('fs')

fs.appendFile('foorLoop.js','console.log("adding..")', function(err){
    console.log("adding.....")
})
