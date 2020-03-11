// objects in js.

// objects can be made out anything
let marker = {
  color: "white",
  ink: "red",
  length: "6cm",
  hasCover: true,
  write: function() {
    console.log("marker's color is " + this.color);
  }
};
// objects can contain strings, numbers, booleans, functions(methods)

// console.log(marker);
// console.log(marker.color);
// marker.color = "black";
// console.log(marker);
// to add something new to the existing object
marker.inInventory = 50;
console.log(marker.write()); // to call the method within the function

// class assignment
// an object that models a human ...
// with a function saying "hi, my name is John Doe";

