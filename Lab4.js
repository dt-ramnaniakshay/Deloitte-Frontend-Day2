// opearnds = '==' '===' '!='

var isStudent = true

if(isStudent == true){
    console.log("You are a student");
}

if(!isStudent){
    console.log("You are a student");
}

//ternary operator

var numOne = 80
var numTwo = 80
var numThree = 70

if(numOne===numTwo){
    console.log("Both values are same");
}
// ==  will check for value only
// === will check for value and data type as well

if(numOne!=numTwo){
    console.log("Both values are diifferent");
}else{
    console.log("Both values are same");
}

// && checking if both conditions are true
// || true if any one condition is true
console.log("--------------------------------------------");

if((numOne == numTwo) || (numTwo == numThree)){
    console.log("All the number are same");
}else{
    console.log("all the numbers are different");   
}

const age = 16

let isAdult = age>= 18 ? "Adult" : "minor"

/* if(age>=18){
    isAdult = "Adult"
}else{
    isAdult = "minor"
} */

console.log(isAdult);





// nest if else, if elseif, switch conditions as well

//few more operators 
// ++ => increment 
// -- => Decrement operator

var count  = 1
//what happens so that count ++ goes
count+=1
//count++
console.log(count);
