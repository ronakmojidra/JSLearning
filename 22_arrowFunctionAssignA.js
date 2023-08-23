console.log(`1>-----------------------------------`);
let trial = () =>{
    console.log(`"Good Morning, Today is Tuesday"`);
}
trial();


console.log(`2>-----------------------------------`);
let multiNum = (num1,num2,num3=1)=>{
 let num4 = num1*num2*num3;
 console.log(`Multiplication of following number is: ${num4}`);
}
multiNum(5,5,2);
multiNum(10,4);

console.log(`3>-----------------------------------`);
let addNum = (num5,num6,num7,num8,num9)=>{
 return num5+num6+num7+num8+num9;
}
let addNum1 = addNum(100,100,200,349,756);
console.log(`Addition of following number is: ${addNum1}`);
let str = addNum("I am","learning","ES6","features","in depth");
console.log(`Concatenation of string is: ${str}`);




