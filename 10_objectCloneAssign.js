console.log(`1>-----------------------------------------------`);
let personDetails = {
  fullName: "Suriya",
  age: "25",
  city: "Pune",
  hobbies: "trekking and bike riding",
  occupation: "Actor",
};

console.log(personDetails);

console.log(`2>-----------------------------------------------`);

let collegeDetails = {
  collegeName: "H V Desai College",
  university: "SPPU",
  education: "B.sc.(Com Sci)",
  favSubject: "Java",
  rollNo: 51245,
};
console.log(collegeDetails);

console.log(`3>-----------------------------------------------`);

let mergeDetails = Object.assign({}, personDetails, collegeDetails);
console.table(mergeDetails);

console.log(`4>-----------------------------------------------`);

let friends = ["Maya", "Satya", "Anurag", "Nayan"];

friends.push("Jagdish");
console.log(friends);

Object.freeze(friends);
// friends.push("Jag"); Cannot add a because array is freeze

console.log(`5>-----------------------------------------------`);
for (const key of friends) {
  console.log(key);
}

console.log(`6>-----------------------------------------------`);
let company = "Codemind Technology";

let separate = company.split(" ");

console.log(separate);

let separateWord = separate[1];

let finalReverse = "";

for (let i = separateWord.length - 1; i >= 0; i--) {
  finalReverse += separateWord[i];
}

console.log(finalReverse);
