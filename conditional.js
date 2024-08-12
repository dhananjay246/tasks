/*4. Create a block of code, such as an if statement or a loop. Inside the block, use let to declare
variables that are only relevant within that block and shouldn't leak outside.*/

function inside(){
    let a=2;
    let b=5;
    if(a>b){
        console.log("wrong")}
        else{
            console.log("right")
        }
    }inside()

console.log(a+b)
