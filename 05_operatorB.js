console.log(`-------------------1.--------------------`);
var greaterNumber = function(num1,num2){
            var num3 = num1 > num2 ? num1 : num2 ;
            console.log(`The Greatest number between ${num1} and ${num2} is: ${num3}`);
           
            
 }
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`-----------------------------------------------`);
var isEvenOrOddNum = function(arg1){
                 arg2  = arg1 % 2 == 0 ? "Even " : "Odd";
                 console.log(`The number ${arg1} is : ${arg2}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`-----------------------------------------------`);
var wordLength = function(str){
            var str1 = str.length;
            console.log(`The length of string "${str}" is: ${str1}`);
            var str2 = str1%2 == 0 ? "Even" : "Odd";
            console.log(`The "${str}" has ${str2} length`);

}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");