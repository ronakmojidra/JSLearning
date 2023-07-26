var tcs = function(gradScore,hscScore,sscScore,candidateName){
         gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? console.log(`Congrates ${candidateName} You are eligible for TCS interview`) : console.log(`Unfortunately ${candidateName} you are not eligible for tcs interview`);
}
tcs(80,86,90,"Ronak");
tcs(70,65,55,"Parth");
tcs(60,79,88,"Mukund");