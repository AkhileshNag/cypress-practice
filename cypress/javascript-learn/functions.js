//function is a block of code
function add(a,b){
    return a+b
}

console.log(add(3,4))
//function with out name is anonymous function
let sumOfints = function(c,d){
    return c+d
}
console.log(sumOfints(5,6))//here sumOfints will be the func name

let sumOfnums = (c,d)=>c+d
console.log(sumOfnums(5,6))//here var name sumOfnums will be the func name
//var scope is global/function level
var greet="morning"
if(1==1){
    var greet="afternoon"
}
function add(a,b){
    var greet="evening"
    return a+b
}
console.log(greet)
//let scope is global/bock level(within the braces)
let greeting="morning"
if(1==1){
    let greeting="afternoon"
}
function add(a,b){
    let greeting="evening"
    return a+b
}
console.log(greeting)
//const is to declare constant
const myGreet = "morning"
//myGreet="evening"//this will give error