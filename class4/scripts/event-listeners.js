/** Everything in javascript works like an object, and has properties and method, and in some cases, events

// below, document refers to their DOM or page this script is attached to. querySelector is a "method" on the DOM ... DOM = Document "Object" Model.

// to access anything in the DOM, you have to run a querySelector (in some cases; querySelectorAll).

For example; here we have let regForm = document.querySelector("#reg_form"); Which when you run in your browser console, will return the form and everything in it.

Try it!!!


*/

let regForm = document.querySelector("#reg_form");
let errorField = document.querySelector(".error_msg");
let btn = document.querySelector(".submitbtn");

// Events are javascript's way for adding action or responding to human interactions in document

/**
 * After accessing the element you want to work with; such as regForm; you can call an eventListener on it. regForm.addEventListener
 *
 * The method takes to parameters
 * 1. The actual event and
 * 2. A callback function
 *
 * like this; regForm.addEventListener("submit", function(e) {
 *    // code is ran here.
 * });
 *
 * A callback function is a function that runs after the event has been triggered. So, in our example, when the form is submitted; the callback function is run.
 *
 * The callback function also has a parameter, e, which can be called anything ( as long as it isn't a keyword).
 *
 * Try to console.log the e within the function, and it returns an object properties and method that element. such as preventDefault();
 */

let allInputFields = document.querySelectorAll("input");
let countEmptyField = 0;

let title = document.querySelector(".title");
title.innerHTML = "<span style='color: red'>something else</span>";

// create a non-existing element e.g. a div element

let newDiv = document.createElement("div");
newDiv.textContent = "i am a new div";
newDiv.style.backgroundColor = "blue";
newDiv.style.color = "white";
// newDiv.setAttribute("style", "color : red; background-color: blue");

regForm.appendChild(newDiv);

regForm.addEventListener("submit", function(e) {
  e.preventDefault(); // the preventDefault method prevents the form from submitting automatically when clicked - which the default setting of html forms. Try to run this code without e.preventDefault();
  let emailField = document.querySelector(".emailAdd").value;
  let pass1 = document.querySelector(".password1").value;
  let pass2 = document.querySelector(".password2").value;
  let username = document.querySelector(".username").value;

  // note the ".value" property at the end of each selector. It gives us the value in each field.

  for (let i = 0; i < allInputFields.length; i++) {
    if (allInputFields[i].value === "") {
      countEmptyField++;
      allInputFields[i].classList.add("error");
    } else {
      allInputFields[i].classList.remove("error");
    }
  }

  if (countEmptyField > 0) {
    // you have empty fields
  } else {
    if (pass1 !== pass2) {
      // innerHTML
      errorField.textContent = "Password Mismatch";
    } else {
      errorField.textContent = "Successful";
    }
  }
  countEmptyField = 0;
});
