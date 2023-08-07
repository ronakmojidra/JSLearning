console.log(`1>--------------------------------------------`);
class Vehicle {
  constructor(model, engineType, displacement, mileage, display) {
    this.model = model;
    this.engineType = engineType;
    this.displacement = displacement;
    this.mileage = mileage;
    this.display = display;
  }
  details() {
    console.log(
      `Vehicle Details is: Model: ${this.model}, Engine Type is: ${this.engineType}, Displacement is: ${this.displacement}, Mileage is: ${this.mileage}, and Display type is: ${this.display} `
    );
  }
}

let yezdiRoadster = new Vehicle(
  "Yezdi Roadster",
  "Single cylinder, 4 Stroke",
  "334 cc",
  "28.53 kmpl",
  "LCD"
);

let heroSplendor = new Vehicle(
  "Hero Splendor Plus",
  "Air cooled, 4-stroke",
  "97.2 cc",
  "70 kmpl",
  "Analogue"
);

let hondaActiva = new Vehicle(
  "Honda Activa 6G",
  "Fan Cooled, 4 Stroke",
  "109.51 cc",
  "50 kmpl",
  "Analogue"
);

let tvsJupiter = new Vehicle(
  "Tvs Jupiter",
  "Single cylinder, 4 stroke",
  "109.7 cc",
  "50 kmpl",
  "Digital"
);

let himalayan = new Vehicle(
  "Royal Enfield Himalayan",
  "Single Cylinder, 4 stroke",
  "411 cc",
  "Digital"
);

let Array1 = [yezdiRoadster, heroSplendor, hondaActiva, tvsJupiter, himalayan];

console.log(`Traversing an Array`);
for (const vehicle of Array1) {
    vehicle.details();
}

console.log(`2>--------------------------------------------`);
class College {
  constructor(collegeName, principal, website, email) {
    this.collegeName = collegeName;
    this.principal = principal;
    this.website = website;
    this.email = email;
  }
  display() {
    console.log(
      `College Name is: ${this.collegeName}, Principal is: ${this.principal}, website is: ${this.website}, E-mail id is: ${this.email}`
    );
  }
}
let fergusson = new College(
  "Fergussion College",
  "Ravindrasinh G. Pardeshi",
  "https://www.fergusson.edu/",
  "principal@fergusson.edu"
);

let bharati = new College(
  "Bharati Vidyapeeth",
  "Dr. Vidula Sohoni",
  "https://www.bvuniversity.edu.in/",
  "cet@bharatividyapeeth.edu"
);

let mit = new College(
  "MIT Pune",
  "Dr. B G Naresh Kumar",
  "http://mitpune.ac.in/",
  "mit@mitpune.com"
);

let coep = new College(
  "COEP Pune",
  "B. B. Ahuja",
  "https://www.coep.org.in/",
  "enquiry@coep.in"
);
fergusson.display();
bharati.display();
mit.display();
coep.display();


console.log(`3>--------------------------------------------`);
function traverseObject(object1) {
    for (const college in object1) {
        if (Object.hasOwnProperty.call(object1, college)) {
            const element = object1[college];
            console.log(`The college details is: ${college}==> ${element}`);
            
        }
    }
    console.log(`-----------------------------------------------`);
}
traverseObject(fergusson);
traverseObject(bharati);
traverseObject(mit);
traverseObject(coep);