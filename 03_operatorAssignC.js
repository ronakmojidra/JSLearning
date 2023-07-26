var eligible = function(gradScore,hscScore,sscScore,candidateName){
    var interview = gradScore >= 70 || hscScore >= 80 || sscScore > 90 ? console.log(`Congrats "${candidateName}" you are eligible for TCS interview`) : console.log(`"${candidateName}" Unfortunately you are not eligible for interview`);
}
eligible(80,86,90,"Ronak");
eligible(70,65,55,"Mrikund");
eligible(60,79,88,"Vijay");