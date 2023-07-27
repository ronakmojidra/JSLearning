console.log(`----------------Implicit conversion to String---------------`);
let result;
console.log(`1> (result = '3' + 2;)-----------`);
result = '3' + 2;
console.log(`The result is: ${result}`);
console.log(`2 is a number which is implicitly converted in to string`);
console.log(`2> (result = '3' + true;)-----------`);
result = '3' + true;
console.log(`The result is: ${result}`);
console.log(`true is a boolean type which is implicitly converted in to string`);
console.log(`3> (result = '3' + undefined;)-----------`);
result = '3' + undefined;
console.log(`The result is: ${result}`);
// console.log(typeof result);
console.log(`undefined is primitive data type which is implicitly converted in to string`);
console.log(`4> (result = '3' + null;)-----------`);
result = '3' + null;
console.log(`The result is: ${result}`);
console.log(`null is an object which is implicitly converted in to string`);




