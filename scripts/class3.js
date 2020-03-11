// how to declare an array ...
let arr_ = [
  "shirts",
  "short",
  "trous",
  "pants",
  "jacket",
  "socks",
  { name: "kola" }
];
console.log(arr_);

// to add to an existing array, you can use the push method... i.e. arr.push("value to be added")
arr_.push(true);
console.log(arr_);

// to remove from the array, you can use the pop method
arr_.pop();
console.log(arr_);

// shift == pop and unshift == pushing
/**
 * "shift" removes the item in the array from the beginning of the array
 * "unshift" adds to array from the beginning of the array
 */
arr_.shift();
console.log(arr_);

arr_.unshift("umbrella");
console.log(arr_);

// "delete" removes from array via the index...
delete arr_[3];
console.log(arr_);

// "splice" ...
/**
 * what if you wanted to remove the items within the array and not just from the beginning and/or the end of it.
 * This is where splice comes in.
 * [array].splice(x, y [,z]);
 * x in the where you want the splice to begin , not it's index.
 * y is how many items you want to remove from this point.
 * z is optional; which add new items to the array after the removed items.
 */
arr_.splice(1, 2);
console.log(arr_);

// length of an array ...
console.log(arr_.length);

// how to loop over an array.
for (let i = 0; i < arr_.length; i++) {
  if (arr_[i] === "umbrella") {
    console.log("object found");
  }
}
