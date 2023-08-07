class Vehicle {
  constructor(model, displacement, display, price, mileage) {
    this.model = model;
    this.displacement = displacement;
    this.display = display;
    this.price = price;
    this.mileage = mileage;
  }
  show() {
    console.log(
      `The vehicle model is: ${this.model}, displacement is: ${this.displacement}, display is: ${this.display}, price is :${this.price}, and mileage is: ${this.mileage}`
    );
  }
}
let vehicle1 = new Vehicle("TATA Punch", "990 cc", "Digital", "10lakh", "15km");
let vehicle2 = new Vehicle("Safari", "1000 cc", "Digital", "12lakh", "13km");
let vehicle3 = new Vehicle("Discovery", "1300 cc", "analogue", "18lakh", "9km");
let vehicle4 = new Vehicle("Audi", "1500 cc", "Digital", "30lakh", "7km");
let vehicle5 = new Vehicle("BMW", "2000 cc", "Digital", "40lakh", "6km");

let array = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
console.log(`traversing an array`);
for (const vehicle of array) {
    vehicle.show();
}

