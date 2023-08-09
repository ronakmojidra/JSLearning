function factorial(num) {
    if (num === 0 || num === 1) {
       return 1;
    } else {
       return num * factorial(num - 1);
    } 
 }
 
 var fact5 = factorial(5);
 var fact9 = factorial(9);
 var fact11 = factorial(11);
 var fact7 = factorial(7);
 
 console.log(`Factorial of 5 is: ${fact5}`);
 console.log(`Factorial of 9 is: ${fact9}`);
 console.log(`Factorial of 11 is: ${fact11}`);
 console.log(`Factorial of 7 is: ${fact7}`);