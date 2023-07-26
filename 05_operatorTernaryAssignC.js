console.log(`----------------Step 1----------------`);
function maleMarriageEligibility(gender,age,boyName){
            gender === "Male"  && age >= 21 ? console.log(`Hey ${boyName} you are eligible for marriage`): console.log(`Hey ${boyName} you are not eligible for marriage`);         
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Steve Jobs");

console.log(`----------------Step 2----------------`);
function femaleMarriageEligibility(gender,age,girlName){
gender === "Female" && age >= 18 ? console.log(`Hey ${girlName} you are eligible for marriage`): console.log(`Hey ${girlName} `);
}
femaleMarriageEligibility("Female",16,"Jennifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");