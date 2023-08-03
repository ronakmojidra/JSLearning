let array = [4, 5, 4, 5, 8, 5, 7, 8, 9, 7, 8];
function removeDuplicate(array){
    let unique = [];
    for (const element of array) {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    }
    return unique;
}
console.log(removeDuplicate(array));