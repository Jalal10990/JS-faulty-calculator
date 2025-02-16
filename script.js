console.log("Faulty Calculator")
//create a faulty calculator using js
//This faulty calculator does following;
// it takes two numbers as input from user
//it performs wrong operations as follow
//+ ----> -
//* ---> +
// - ---> /
// / ---> **

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

//create object
let  obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
// use  eval fuuncion 

if(random > 0.1){
    //perform correcct calculations
    console.log('The  result is ${a} ${c} ${b}')
    alert(`the result is ${eval(`${a}  ${c}  ${b}`)}`)



}
else{
    //perform correcct calculations
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);

}
