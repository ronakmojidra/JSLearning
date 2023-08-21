function add(num1, num2, ...num ){
    let num3 = num1 + num2;
    for (let i = 0; i < num.length; i++) {
       num3+= num[i];
        
    }
    console.log(`Addition of ${num1}, ${num2} and ${num} is ${num3}`);
  
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);