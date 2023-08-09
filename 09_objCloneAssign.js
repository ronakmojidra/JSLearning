const ArrayNums = [20,3,4,56,90,400,49];
console.log(`1>-------------------------------------`);
console.log(`Original Array is: ${ArrayNums}`);
let clonedArray = [...ArrayNums];
console.log(`Cloned Array is:${clonedArray}`);
clonedArray.push(55,66);
console.log(`Updated clone Array is: ${clonedArray}`);

console.log(`2>-------------------------------------`);
let deepClone = [...ArrayNums];
console.log(` Updated original Array is: ${deepClone}`);
ArrayNums.push(10,25);
console.log(`After updated with values array is: ${ArrayNums}`);

console.log(`3>-------------------------------------`);
let arrayEven = [2,30,14,8];
 let mergeArray =[...arrayEven,...ArrayNums];
 console.log(`After merge the Array is: ${mergeArray}`); 

 console.log(`4>-------------------------------------`);
 const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality:{
            colony: "OM Varindavan Society",
            street: "Kanch Pokali, 431202",
        },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
    },
    mobile: ["+91 8600 3456 88", "1800-4567 32", "+91- 9096 5678 77"]
}

console.log(employee_info);

console.log(`5>-------------------------------------`);
console.log(`Employee Address details are: ${employee_info.address.locality.colony}, ${employee_info.address.locality.street}, ${employee_info.address.city}, ${employee_info.address.state}, ${employee_info.address.country} `);
console.log(`Employee Mobile number is: ${employee_info.mobile.join(', ')}`);

console.log(`6>-------------------------------------`);
let employeeInfo = JSON.parse(JSON.stringify(employee_info));
console.log(employeeInfo);
console.log(`Before Salary is: ${employeeInfo.salary.july_month}`);
console.log(`After Updated Salary is: ${employeeInfo.salary.july_month = '80000INR'}`);

console.log(`After Updated the country is: ${employee_info.address.country = 'United Kingdom'}`);

console.log(employee_info);
console.log(` `);
console.log(employeeInfo);



