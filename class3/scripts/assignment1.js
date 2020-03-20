"use strict";
let username = "wusezone4";
let password = "password";

function checkCredential(us, ps) {
  if (us === username && ps === password) {
    console.log("login completed");
  } else {
    console.log("Invalid Credentials");
  }
}

// let user = "name";
// let num = 4 > 2;

let num1 = 2;
let num2 = 3;
console.log((num1 += 2));
