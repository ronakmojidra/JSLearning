console.log("==========Assignment 1==========");
console.log("==========Step 1.Functions with no arguments and no return type==========");
function one(){
    console.log("My name is Ronak");
}
one();

function two() {
    console.log("My skills are : React, Javascript,  HTML & CSS");
}
two();

console.log("==========Step 2.Functions with arguments==========");
function personDetails(firstName,lastName,collegeName){
console.log("First name is:", firstName);
console.log("Last name is:", lastName);
console.log("College name is:", collegeName);
}
personDetails("Ronak","Mojidra","H V Desai college, Pune");

console.log("==========Step 3.Functions with arguments and no return type==========");
function swapValues(arg1,arg2){
    console.log("Before swap the values are:", arg1, arg2);
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After swap the values are:", arg1, arg2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);

console.log("==========Step 4.Functions with 3 arguments and no return type==========");
function addThreeValues(value1,value2,value3){
console.log("Addition is:", value1 + value2 + value3);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

console.log("==========Assignment 2==========");
console.log("==========Normal Function==========");
function bankDetails(bankName,accountNum,location,pinCode) {
    console.log("My Bank Details are:", bankName, "|", accountNum, "|", location, "|",pinCode);
}
bankDetails("CITI Bank", 3456782345, 'Pune', 431202);
bankDetails("Axis Bank", 7856782345, 'Mumbai', 441202);
bankDetails("HDFC Bank", 8956782345, 'Pune', 631202, "Open");







