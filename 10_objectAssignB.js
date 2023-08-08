console.log(`1>-----------------------------------------------`);
let sbiBank = {
    bankName: "State Bank of India",
    location: "Pune",
    accountNo: "987456321",
    ifsc: "SBIN0000454",
    interestRate: 6.50,
}
console.log(sbiBank);

console.log(`2>-----------------------------------------------`);
let bankLocation = {
    street: "M G Road",
    city: "Pune",
    pinCode: "411002"
}
console.log(bankLocation);

console.log(`3>-----------------------------------------------`);
//  let merger = Object.assign({},sbiBank,bankLocation);  // using object.assign method

 let merger = {...sbiBank, ...bankLocation};
 console.table(merger);

 console.log(`4>-----------------------------------------------`);
 let rateOfInterest = {
    homeLoanInterest:"8.45",
    personalLoanInterest:"10.49",
    dueInterest: "40.2"
 }
 console.log(rateOfInterest);

 console.log(`5>-----------------------------------------------`);
 let sbiDetails = Object.assign({},sbiBank,bankLocation,rateOfInterest);
 console.table(sbiDetails);

 console.log(`6>-----------------------------------------------`);
 for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
        
    }
 }



