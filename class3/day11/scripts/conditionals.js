// Conditionals
var age = 17;
var govtAge = 18;

// if (age >= govtAge) {
//   alert("Yes! You can Vote");
// } else {
//   alert("You are underAged For This!");
// }

// classwork
// var govtCrowd = 50;
// var crowd = 100;

var age = 5;

if (age <= 3) {
  console.log("Nursery School");
} else if (age <= 10) {
  console.log("Primary School");
  if (age == 4) {
    console.log("... and go straight to primary 1");
  } else if (age == 5) {
    console.log("... and go straight to primary 2");
  }
  //   ...
} else if (age <= 27) {
  console.log("Uni");
} else {
  console.log("Are You Alive?");
}
