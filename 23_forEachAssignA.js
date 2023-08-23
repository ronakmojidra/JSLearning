const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`1>------------------------------------`);
arrayNumbers.forEach((element, index) => {
  console.log(`Index is: ${index}, ${element} `);
});

console.log(`2>------------------------------------`);
arrayNumbers.forEach((element1) => {
  if (element1 > 0) {
    console.log(`Number is Positive: ${element1}`);
  }
});

console.log(`3>------------------------------------`);
let arrayNumbers1 = [];
arrayNumbers.forEach((element2) => {
  if (element2 < 0) {
    arrayNumbers1.push(element2);
  }
});
console.log("The Negative numbers are:", arrayNumbers1);

console.log(`4>------------------------------------`);
arrayNumbers.forEach((even) => {
  if (even % 2 == 0) {
    console.log(`Number is even: ${even}`);
  }
});

console.log(`5>------------------------------------`);
let count = 0;
arrayNumbers.forEach((addNum) => {
  count += addNum;
});
console.log(`The sum of all numbers is: ${count}`);

console.log(`6>------------------------------------`);
let arrayNumbers2 = [];
arrayNumbers.forEach((evenIndex, index1) => {
  if (index1 % 2 == 0) {
    arrayNumbers2.push(evenIndex);
  }
});
console.log("The even index array is:", arrayNumbers2);
