let sbiBank = {
    bankName: "State Bank of India",
    location: "Pune",
    accountNo: "987456321",
    ifsc: "SBIN0000454",
    interestRate: 6.50,
    showDetails : function(){
console.log(`Bank Name:${this.bankName}, location: ${this.location}, A/c No:${this.accountNo}, Ifsc Code: ${this.ifsc} ,interest rate: ${this.interestRate}`);
    }
}
sbiBank.showDetails();

let axisBank = {
    bankName: "Axis Bank",
    location: "Indore",
    accountNo: "987455671",
    ifsc: "UTIB0003191",
    interestRate: 7.50,
    showDetails : function(){
        console.log(`Bank Name:${this.bankName}, location: ${this.location}, A/c No:${this.accountNo}, Ifsc Code: ${this.ifsc} ,interest rate: ${this.interestRate}`);
            }
}
axisBank.showDetails();


let hdfcBank = {
    bankName: "HDFC Bank",
    location: "Delhi",
    accountNo: "546455671",
    ifsc: "HDFC0001210",
    interestRate: 7,
    showDetails : function(){
        console.log(`Bank Name:${this.bankName}, location: ${this.location}, A/c No:${this.accountNo}, Ifsc Code: ${this.ifsc} ,interest rate: ${this.interestRate}`);
            }
}
hdfcBank.showDetails();

let yesBank = {
    bankName: "Yes Bank",
    location: "Mumbai",
    accountNo: "326975671",
    ifsc: "YESB0000008",
    interestRate: 8,
    showDetails : function(){
        console.log(`Bank Name:${this.bankName}, location: ${this.location}, A/c No:${this.accountNo}, Ifsc Code: ${this.ifsc} ,interest rate: ${this.interestRate}`);
            }
}
yesBank.showDetails();
