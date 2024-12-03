//for loop
//while loop
//do while loop

// we will be printing first 10 elements
for( let i =0; i< 5; i++){
    if(i==3){
        console.log("we are at the middle");
    }
    console.log(i);
}

//with while loop
let count = 0;

while(count<5){
    console.log(count);
    count++;
}
// to run in infinte conditinds make use of menu driven programs
console.log("----------------------");

//do while loop
let x = 0;

do{
console.log(x);
x++;
}while ( x<5)

// continuue and break keyword
/*
print even and odd numbers between 10 to 20
while loop for odd numbers
for loop to print even numbers

*/

// contniute => will skip that iteration
//break  => it will end that iteration

for (let i =0; i<5; i++){
    if(i==3){
        break;
        //continue
    }
    console.log(i);
}

//you will make exception for admin person