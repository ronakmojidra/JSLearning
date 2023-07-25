var getsquare = function(num){
            var res = num *num ;
            console.log(`Square of ${num} is ${res}`);
}
console.log(`------------------ Point 1 -------------------`);
getsquare(5);
getsquare(6);
getsquare(25);
getsquare(100);
getsquare(67.89);
getsquare(59);
console.log(`------------------ Point 2 -------------------`);
var type = typeof(getsquare);
console.log(`Type of function is: ${type}`);
console.log(`------------------ Point 3 -------------------`);
var rect = function(length,width){
             var areaofrect = length * width;
             console.log(`Area of Rectangle is : ${areaofrect}`);
}
rect(499,917);
console.log(`------------------ Point 4 -------------------`);
var swapValues = function(arg1,arg2){
                   console.log(`Before swapping the values are:`,arg1, arg2);
                   temp = arg1;
                   arg1 = arg2;
                   arg2 = temp;
                   console.log(`After swapping the values are:`,arg1, arg2);
}
swapValues("Mahi","Raina");
swapValues(55,77);
console.log(`------------------ Point 5 -------------------`);
var js = function () {
    var str1 = "JS the most popular language of internet";
    console.log(`------------------ Point 5A -------------------`);
    console.log(`The given string is : ${str1}`);
    var str2 = str1.length;
    console.log(`Total number of character available in the string are: ${str2}`);
    console.log(`------------------ Point 5B -------------------`);
   var str3 = str1.charAt(6);
   console.log(`Character at index 6 is: "${str3}"`);
   console.log(`------------------ Point 5C -------------------`);
   var str4 = str1.charAt(11);
   console.log(`Character at index 11 is: "${str4}"`);
   console.log(`------------------ Point 5D -------------------`);
   var str5 = str1.length - 1;
   var str6 = str1.charAt(str5);
   console.log(`The last Character of string is: "${str6}"`);
   console.log(`------------------ Point 5E -------------------`);
    str7 = str1.charAt(0);
    console.log(`The first character of given string is: "${str7}"`);
    console.log(`------------------ Point 5F -------------------`);
 str7 = str1.length - 3;  
    str8 = str1.charAt(str7); 
 console.log(`Third last character from the given string is: "${str8}"`); 
 console.log(`------------------ Point 5G -------------------`);
str9 =  str1.split(" ");
str10 = str9.length;
console.log(`Total number of words of the given string are: ${str10}`);
var final = str10 * str10 ;
console.log(`Total number of words square is: ${final}`);

}
js();


