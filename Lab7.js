// function => it s just piece of a code which will run and you can reuse when ever you need them

// mainly 4 types of functions 

function line(){
    console.log("---------------------------------");
}

line()

// return type of function 
function A(){
    var varA = 10
    return varA*varA
}

function B(){
    var varB = 5
    return varB*varB
}

function C(){
    var varC = 2
    return varC*varC
}

function finalFunc(){
    let result = A() + B() +C()
    console.log(result);
}

finalFunc()
line()
// paramaterized function without return type

function addNumber(a,b){
    console.log("Addition of two numbers", a+b);
}

addNumber(80,70)
// tell me the output of below code if we wrap them in conosole.log
addNumber(40,90)

line()

//paramaterized function with return type

function subNumber(a,b){
    return a-b;
}

console.log(subNumber(5,5))

// create a mini calculator by using paramaterized with return, parmaterized without return, return , normal function 