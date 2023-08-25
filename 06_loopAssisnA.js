console.log(`1>----------------------------------------`);
function vowelsCount(str) {
    let count = 0;
    let result = " ";
    for (let index = 0; index < str.length; index++) {
      let char = str.charAt(index);
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        result = result.concat(char).concat(",");
        count++;
      }
        
    }
    console.log(`Vowels are: ${result}`);
    console.log(`The total number vowels are: ${count}`);
}
vowelsCount("I am very good IT Developer");

console.log(`2>----------------------------------------`);
function sumOfCube() {
    let totalSum = 0;
    for (let index = 1; index <= 5; index++) {
        totalSum = totalSum + index * index * index;
        
    }
    console.log(`Sum of cube of numbers from 1 to 5  is: ${totalSum}`);
}
sumOfCube();

console.log(`3>----------------------------------------`);
function oddPositionedChars(str1) {
    let result1= " ";
    let count1 = 0;
    for (let i = 0; i < str1.length; i++) {
        char1 = str1.charAt(i);
        if (i%2!== 0 && char1!= " ") {
            result1 = result1.concat(char1).concat(" ");
            count1++;
        }
        
    } 
    console.log(result1);
    console.log(`Odd positioned characters is: ${count1}`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon i will be angular IT champ");


