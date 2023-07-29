function gradeCalculation(marks) {
  if (isNaN(marks) || marks <= 0 || marks > 100) {
    console.log(` Your Marks is: ${marks}, Please provide the valid Marks`);
  } else {
    if (marks >= 90) {
      console.log(`Fantastic Marks: ${marks}, your grade is A+`);
    } else {
      if (marks >= 75 && marks < 90) {
        console.log(`Excellent Marks: ${marks}, your grade is A`);
      } else {
        if (marks >= 50 && marks < 75) {
          console.log(`Good Marks: ${marks}, your grade is B`);
        } else {
          if (marks >= 35 && marks < 50) {
            console.log(`Marks is ${marks}, your grade is C, Need improvement`);
          } else {
            if (marks <= 35) {
              console.log(
                `Your Marks is ${marks}, You are fail, you need improvement`
              );
            }
          }
        }
      }
    }
  }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);
