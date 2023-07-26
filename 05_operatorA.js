console.log(`                        Assignment 01                           `);
console.log(`1.------------------------------------------`);
function squareOfWordLength(arg1) {
          var arg2 = arg1.length;
          console.log(`Given string is: ${arg1}`);
          console.log(`Given string length is: ${arg2}`);
          var arg3 = arg2 * arg2;
          console.log(`Square is: ${arg3}`);
          console.log(`------------------------------------------`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`2.------------------------------------------`);
var result = function(){
var str = "I am Angular Developer";
var str3 = str.length;
console.log(`The string length is: ${str3}`);
var str1 = str.split(" ");
var str2 = str1.length;
console.log(`Total number of words in the string are: ${str2}`);
var str4 = str3 / str2;
console.log(`String length is divided by total number of words is: ${str4}`);
var str5 = str3 * str2;
console.log(`String length is multiply by total number of words is: ${str5}`); 
}
result();
