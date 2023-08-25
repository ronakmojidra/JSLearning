function reverseString(str) {
    let result = "";
    for (let index = str.length- 1; index >= 0; index--) {
        const char = str.charAt(index);
result = result.concat(char).concat();
     }
     console.log(` The reverse of string is: ${result}`);
}
reverseString("Hard work always pays back");
reverseString("Soon i will be angular IT champ");