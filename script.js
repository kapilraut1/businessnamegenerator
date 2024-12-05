let random=Math.random();

let business={
    1: "Wow",
    2: "Amazing",
    3:  "Fantastic"
};

let midd={
    1: "Food",
    2: "Momo",
    3: "Tandoori"
};

let last={
    1: "Palace",
    2: "Handler", 
    3: "Chilli"
};


// console.log(random);
    // if (random<0.5){
      //   console.log("The name of the Business is likely to be "+ business.name1+ midd.he + last.end);
// }
// else{
   //  console.log("The name of the Business is suggested to be "+ business.name2+ midd.yu + last.lest);

// }

let rand1=Math.floor(Math.random()*3)+1 ;
let rand2=Math.floor(Math.random()*3)+1 ;
let rand3=Math.floor(Math.random()*3)+1 ;
console.log(business[rand1]);

console.log("The name of the Business is likely to be " + business[rand1] + midd[rand2] + last[rand3]);