"use strict";
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  isHuman() {
    if (this.legs != 2) {
      console.log("definately not human");
    } else {
      console.log("likely human");
    }
  }
}

let likelyHuman = new Animal(2);
likelyHuman.isHuman();

let likelyNot = new Animal(4);
likelyNot.isHuman();

class inject extends Animal {}
