let prof = {
  profName: "pavan",
  city: "Pune",
  state: "Maharashtra",
  isMarried: true,
  designation: "Java Teacher",
  degrees: {
    engineering: "'CSC",
    PHD: "Adv Computing",
    graduation: "B.sc(com-sci)",
    getDegrees: function () {
      console.log(
        `Teacher Degrees: ${this.engineering}, ${this.PHD}, ${this.graduation}`
      );
    },
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Computing",
  ],
};

prof.degrees.getDegrees();

prof.totalExperience = "14 Years";

console.log(prof);

delete prof.city;

console.log(prof);

prof.certificates.push("Oracle Certified");

 console.log(prof.certificates);

 let lastElement = prof.certificates.slice(-1);
 console.log(lastElement);

 



