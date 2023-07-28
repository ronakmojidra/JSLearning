var voteEligible = function (age) {
    var ageValue = +age;
    if (age <= 0 || age >= 130 || isNaN(ageValue)) {
        console.log(`Invalid age is: ${age}`);
    } else {
        if (age >= 18) {
            console.log(`Your age is ${age} and you are eligible for vote`);
        } else {
            if (age < 18) {
                console.log(`Your age is ${age} and you are not eligible for vote`);
            }
        }
        
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);