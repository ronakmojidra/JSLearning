class employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
}

const emp_anil = new employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(33, "Radha", "HR", 740000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahesh = new employee(99, "Mahesh", "HR", 85000, "Infy");



let array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay,emp_mahesh];
array.forEach((element)=>{
console.log(element);
});

console.log(`1>-----------------------------------`);
array.forEach((company)=>{
if (company.emp_company == "TCS") {
    console.log(`Employee details are: ${company.emp_name}, ${company.emp_company}`);
}
});

console.log(`2>-----------------------------------`);
array.forEach((element1)=>{
if(element1.emp_dept == "Finance"){
    console.log(`Finance department Employees are: ${element1.emp_dept}, ${element1.emp_name}`);
}
});


// console.log(`3>-----------------------------------`);
// for (const element2 of array) {
//     const department = array[element2];
//     if (department.emp_name.startsWith("R")) 
//     {
//         console.log(`The employee whose name starts with R is: ${department.emp_name}`);
//     }
// }

console.log(`4>-----------------------------------`);
array.forEach((element3)=>{
if (element3.emp_salary > 75000) {
    console.log(`${element3.emp_name}, ${element3.emp_company}, ${element3.emp_salary}`);
}
});

console.log(`5>-----------------------------------`);
array.forEach((element4)=>{
if (element4.emp_salary >= 50000 && element4.emp_dept == "IT") 
{
    console.log(`Employee details whose salary is greater then 50000 and Department is IT: ${element4.emp_name}`);
}
});

console.log(`6>-----------------------------------`);
array.forEach((element5)=>{
if (element5.emp_company == "Infy") {
    console.log(`The Employees from Infy are: ${element5.emp_name}`);
}
});


