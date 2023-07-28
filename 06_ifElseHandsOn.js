console.log(`------------------Assignment 01-----------------`);
console.log(`1>----------------------------------------------`);
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
      } else {
        console.log(`${num} is odd`);
      }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log(`2>----------------------------------------------`);
function str1(arg) {
    var arg1 = arg.length;
    console.log(`Total number of character in the string are: ${arg1}`);
    if (arg1>10) {
        console.log(`${arg}: String contains more than 10 character`);
    } else {
        console.log(`${arg}: String doesn't contains more than 10 character`);
    }
}
str1("JavaScript-ES6");

console.log(`3>----------------------------------------------`);
function start(arg1) {
    if (arg1.startsWith("Java")) {
        console.log(`${arg1}:  is starts with word "Java" `);
    } else {
        console.log(`${arg1}: is not starts with word "Java"`);
    }
    
}
start("JavaScript Language");