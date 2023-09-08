
console.log(`1>--------------------------------------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
 const arrayAdd = arrayNumbers.map((currentValue)=>{
 return currentValue + 10;
 });
 console.log(`After adding 10 in to each element:`,arrayAdd);

 console.log(`2>--------------------------------------`);
const arrayOfCube = arrayNumbers.map((currentValue)=>{
return currentValue * currentValue * currentValue;
});
console.log(`Cube of the each array element is:`,arrayOfCube);

console.log(`3>--------------------------------------`);
const result = arrayNumbers.map((currentValue,index)=>{
           return currentValue + index;
});
console.log(`Added index value in to it's corresponding each array element:`,result);

