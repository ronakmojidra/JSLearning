const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`1>------------------------------------`);
const greaterFifty = arrayNumbers.filter((ele)=>{
return ele > 50;
});
console.log(`The number which are greater than 50 are:`,greaterFifty);

console.log(`2>------------------------------------`);
const evenNumbers = arrayNumbers.filter((ele)=>{
return ele%2 == 0;
});
console.log(`The even numbers are:`,evenNumbers);

console.log(`3>------------------------------------`);
const oddNumbers = arrayNumbers.filter((ele)=>{
    return ele%2!== 0;
});
console.log(`The odd Numbers are:`,oddNumbers);

console.log(`4>------------------------------------`);
const multipleOfFive = arrayNumbers.filter((ele)=>{
      return ele%5 == 0;
});
console.log(`Multiple of 5 are:`,multipleOfFive);

console.log(`5>------------------------------------`);
const finalResult = arrayNumbers.filter((ele)=>{
  return ele >20 && ele<50;
});
console.log(`The Numbers which are between 20 and 50:`,finalResult);


