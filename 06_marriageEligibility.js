console.log(`------------------Assignment 02-----------------`);
var marriageEligibility = function (gender, age) {
  if (gender == "Other") {
    console.log(
      `Your gender is: ${gender}, and your age is: ${age}, I don't know the what is the law for "Other" category`
    );
  } else {
    if ((gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)) {
      console.log(
        `Your gender is: ${gender}, and your age is: ${age}, and you are eligible for marriage`
      );
    } else {
      console.log(
        `Your gender is: ${gender}, and your age is: ${age}, and you are not eligible for marriage`
      );
    }
  }
};
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);

console.log(`------------------Assignment 03-----------------`);
var leapYear = function (year) {
  if (year <= 0 || isNaN(+year)) {
    console.log(`Year: ${year} is Invalid Input`);
  } else {
    if (year%4 == 0) {
console.log(`Year: ${year} is a leap Year`);      
    } else {
      console.log(`Year: ${year} is not a leap Year`);
    }
  }
  
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);

