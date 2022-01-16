console.log("Hello World!");
var message = "Welcome to the Dojo";
console.log(message);

function sayMyName(myName) {
    /*     if (EXPRESSION) // EXPRESSION is evaluated upon reaching this line
        {
            body of 'IF': code runs only if EXPRESSION evaluates to true
        }
        else
        {
            body of 'ELSE': code runs only if EXPRESSION evaluates to false
        } */

    if (myName == "Martin") {
        console.log("Hey there Martin, how's it going?");
    }
    else {
        console.log("Greetings Earthling " + myName + ". Have a great day!");
    }

}

sayMyName("foo");


//     A ;         B ;         D
for (var num = 1; num < 6; num = num + 1) {
    // C
    console.log("I'm counting! The number is ", num);
}
// E
console.log("We are done. Goodbye world!");

/* for(INITIALIZATION; TEST; INCREMENT/DECREMENT)
{
    BODY of the loop –
    this runs repeatedly as long as TEST is true
} */

var counter = 5;
counter = counter - 1; // counter now holds a value of 4
counter--; // counter is now 3
counter *= 6; // counter is 18
counter /= 2; // counter == 9
counter++; // counter == 10
console.log(counter);


var num = 1;
while (num < 5) {
    if (num == 3) {
        break;
        // if you have code here, it will never run!
    }
    console.log("I'm counting! The number is ", num);
    num = num + 1; // if we break, these lines won't run
}
//I'm counting! The number is 1
//I'm counting! The number is 2


for (var num = 1; num < 5; num += 1) {
    if (num == 3) {
        continue;
        // if you have additional code down here, it will never run!
    }
    console.log("I'm counting! The number is ", num);
}
//I'm counting! The number is 1
//I'm counting! The number is 2
//I'm counting! The number is 4
