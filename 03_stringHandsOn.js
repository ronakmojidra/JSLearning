function stringHandsOn(){
    console.log(`----------Step 1---------`);
var str1 = "     Hey you are doing good, keep it up       ";
console.log(`Given string is: ${str1}`);
console.log(`----------Step 2---------`);
var strlength = str1.length;
console.log(`Length of string is: ${strlength}`);
console.log(`----------Step 3---------`);
var str2 = str1.trim();
var str3 = str2.length;
console.log(`String after removing leading and trailing extra spaces is: ${str2}`);
console.log(`Length of string is: ${str3}`);
console.log(`----------Step 4---------`);
var str4 = strlength - str3;
console.log(`Total Number of extra spaces are: ${str4}`);
console.log(`----------Step 5---------`);
 str5 = str2.charAt(0);
 str6 = str2.charAt(str2.length-1);
 console.log(`First character of the string is: ${str5} and last character of the string is: ${ str6}`);
 console.log(`----------Step 6---------`);
 var count = str2.split(' ');
 var tot = count.length;
 console.log(`Total number of words in string are: ${tot}`);
 console.log(`----------Step 7---------`);
    var indx = str2.indexOf("good");
    console.log(`The index of word "good" from given string is: ${indx}`);
    console.log(`----------Step 8---------`);
          var str7 = str2.slice(22);
          console.log(`The substring starting from 22 is: ${str7}`);
          var str8 = str2.substring(22);
          console.log(`The substring starting from 22 using substring method is: ${str8}`);
          console.log(`----------Step 9---------`);
          var str9 = str2.endsWith("up");
          console.log(`is string end with word "up" : ${str9}`);
          console.log(`----------Step 10---------`);
          var str10 = str2.startsWith("Hey");
          console.log(`is string start with word "Hey" : ${str10}`);
          

}
stringHandsOn();
