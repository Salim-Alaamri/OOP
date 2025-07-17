'use strict';

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const salim = new Person('Salim', 1990);
console.log(salim);
console.log(salim.__proto__ === Person.prototype);

Person.prototype.sayHello = function () {
  console.log(`Hi my name is: ${this.firstName}`);
};

salim.sayHello();

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

salim.calcAge();

console.log(salim.__proto__);
