/*
let => let keyword is like blocked scope variable {}
var  => var keyword is it accessible even outside of blocked scope
const => its a constant ( outside blocked scope), you can not rechange the value
*/

/* var a = 10
a=20
console.log(a);

let b = 10
b = 19
console.log(b);

const c = 10
c = 89
console.log(c); */

/* var a = 10
function A(){
    if(true){
        var b = 9
        console.log("inside if block");
        
        console.log(b);   
    }
    console.log("inside A function");
    
    console.log(b);
}
A()
console.log(a);
 */
let a = 10
function A(){
    if(true){
        let b = 9
        console.log("inside if block");
        
        console.log(b);   
    }
    console.log("inside A function");
    
    console.log(b);
}
A()
console.log(a);



