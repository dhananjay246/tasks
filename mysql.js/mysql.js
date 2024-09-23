var mysql=require("mysql")

var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"D246246246",
    database:"yash"
})
con.connect(function(error){
    if(error){
        console.log(error)
    }
else{
    console.log("connected")
}
}
)