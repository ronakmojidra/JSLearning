const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`1>-------------------------`);
  let total = arrayNumbers.length;
  console.log(`Total elements available in the array are: ${total}`);
  console.log(`2>-------------------------`);
console.log(`First element of array is: ${arrayNumbers[0]}`);
console.log(`Last element of array is: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log(`3>-------------------------`);
console.log(`Third Last element of array is: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log(`4>-------------------------`);
const evenNumbers = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2 === 0) {
        evenNumbers.push(arrayNumbers[index]);
    }
    
}
console.log(`Even Numbers in the array are: ${evenNumbers}`);
console.log(`5>-------------------------`);
const oddNumbers = [];
for (let index = 0; index < arrayNumbers.length; index++) {
   if (arrayNumbers[index]%2 !== 0) {
    oddNumbers.push(arrayNumbers[index]); 
   }
    
}
console.log(`Odd Numbers in the array are: ${oddNumbers}`);
console.log(`6>-------------------------`);

const evenPosNumbers = [];
let evenSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
if (index %2 === 0) {
evenPosNumbers.push(arrayNumbers[index]);
    evenSum += arrayNumbers[index]; 
}
    
}
console.log(`Even positioned from given array is: ${evenPosNumbers}`);
console.log(`The sum of the even positioned array is: ${evenSum}`);

console.log(`7>-------------------------`);
const oddPosNumbers = [];
let oddSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index %2 !== 0) {
        oddPosNumbers.push(arrayNumbers[index]);
        oddSum += arrayNumbers[index];
    }
    
}
console.log(`Odd positioned from given array is: ${oddPosNumbers}`);
console.log(`The sum of the odd positioned array is: ${oddSum}`);

console.log(`8>-------------------------`);
let totalSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   totalSum += arrayNumbers[index];
    
}
console.log(`The sum of all elements from array are: ${totalSum}`);

console.log(`9>-------------------------`);
 const multipleOfFive = [];
 for (let index = 0; index < arrayNumbers.length; index++) {
     if (arrayNumbers[index] %5 == 0) {
        multipleOfFive.push(arrayNumbers[index]);
     }
    
 }
console.log(`The numbers which are multiple of 5 are: ${multipleOfFive}`);

console.log(`10>-------------------------`);
let res = arrayNumbers.includes(115);
console.log(`Is number 115 available in the array: ${res}`);

console.log(`11>-------------------------`);
let res1 = arrayNumbers.includes(23);
console.log(`Is number 23 available in the array: ${res1}`);

console.log(`12>-------------------------`);
console.log(arrayNumbers);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Insert Number before index 3 is: ${arrayNumbers}`);

console.log(`13>-------------------------`);
arrayNumbers.splice(4, 3);
console.log(`After delete 3 element starting from index 4 is: ${arrayNumbers} `);



