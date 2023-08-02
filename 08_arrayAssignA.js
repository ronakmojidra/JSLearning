const arrayFruits = ["Banana","Orange","Apple","Mango","Watermelon"];
console.log(`1>----------------------`);
console.log(`First element is: ${arrayFruits[0]}`);
console.log(`Last element is: ${arrayFruits[arrayFruits.length-1]}`);
console.log(`2>----------------------`);
arrayFruits.unshift("Papaya")
console.log(`Add element before the Banana is: ${arrayFruits}`);
console.log(`3>----------------------`);
arrayFruits.splice(4,1);
console.log(`After Remove Mango from the lis array is: ${arrayFruits}`);
console.log(`4>----------------------`);
arrayFruits.push("Pineapple");
console.log(`After insert an element in the array is :${arrayFruits}`);
console.log(`5>----------------------`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`After insert an element in the array is :${arrayFruits}`);
console.log(`6>----------------------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`After replace orange with kiwi an array is: ${arrayFruits}`);
console.log(`7>----------------------`);
 let res = arrayFruits.slice(1,5);
console.log(`Elements starting from 1 to 4 is: ${res}`);
console.log(`8>----------------------`);
let res1 = arrayFruits.length-3;
let res2 = arrayFruits.slice(res1);
console.log(`Last 3 elements of array is: ${res2}`);


