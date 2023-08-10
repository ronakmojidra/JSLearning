let detailsStr = `{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street": "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Australia"
    },
    "reffered-by" : "E0012"
}`;
console.log(detailsStr);
console.log(`1>-----------------------------------------`);
let objStr = JSON.parse(detailsStr);
console.log(objStr);

console.log(`2>-----------------------------------------`);
console.log(`${objStr.role}`);
let employeeRole = objStr.role;
for (const role of employeeRole) {
  if (role == "Dev") {
    console.log(`The role is: ${role}`);
  }
}

console.log(`3>-----------------------------------------`);
let lastName = objStr.name;
console.log(lastName);
let lastName1 = lastName.split(" ");
console.log(lastName1);
let lastName2 = lastName1[lastName1.length - 1];
console.log(lastName2);

console.log(`4>-----------------------------------------`);
let fullYear = objStr.doj;
console.log(fullYear);
let getYear = fullYear.split("-");
console.log(getYear);
let finalYear = getYear[getYear.length - 1];
console.log(finalYear);
