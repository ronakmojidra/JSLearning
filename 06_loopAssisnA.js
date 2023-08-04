console.log(`1>-----------------------------------------`);
function vowelCount(str){
    let count  = 0;
    let index = 0;
    while (index <= str.length) {
        let char = str.charAt(index);
        if ( char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u" ||
        char == "A" ||
        char == "E" ||
        char == "I" ||
        char == "O" ||
        char == "U") {
            console.log(char);
            count = count + 1;
            index++;
        }
    }
    console.log(`The number of vowels is: ${count}`);
}
vowelCount("I am very good IT Developer");

console.log(`2>-----------------------------------------`);
function numberOfCube(){
    let count1 = 0;
    for (let i = 1; i <= 5; i++) {
        let a = i*i*i;
        count1 = count1 + a;
        
    }
    console.log(`Cube Total is:${count1}`);
}
numberOfCube(1);
numberOfCube(2);
numberOfCube(3);
numberOfCube(4);
numberOfCube(5);



