//Declaring a new array:
var myArr = [];
console.log(myArr.length); // -> "0"copy


//Setting and accessing array values:
myArr[0] = 42; // myArr == [42], length==1
console.log(myArr[0]); // -> "42"

//Array.length is determined by largest index:
myArr[1] = "hi"; // myArr == [42,"hi"], length==2
myArr[2] = true; // myArr == [42,"hi",true], length==3copy

//Arrays can be sparsely populated:
myArr[myArr.length + 1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // -> "5"

//Overwriting array values:
myArr[0] = 101; // myArr == [101,"hi",true,undefined,2]
myArr[3] = "MG"; // myArr == [101,"hi",true,"MG",2]

//Shorten arrays with pop(), lengthen with push():
myArr.pop(); // myArr == [101,"hi",true,"MG"]
console.log(myArr.length); // -> "4"
myArr.push("dat"); // myArr == [101,"hi",true,"MG","dat"]
console.log(myArr.length); // -> "5"copy
