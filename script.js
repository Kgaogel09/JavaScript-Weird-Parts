'use strict';
//* Object-Oriented JavaScript and prototypal inheritance
var personPrototype = {
  firstName: 'Defaults',
  lastName: 'Defaults',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log(personPrototype);

var john = {
  firstName: 'John',
  lastName: 'Doe',
};
console.log(john);

//! Don't EVER use! for demo purposes only.
john._proto_ = personPrototype;
console.log('john', john);

var jane = {
  address: '111 Main st',
  getFormalName: function () {
    return this.lastName + ', ' + this.firstName;
  },
};

var jim = {
  getFirstName: function () {
    return firstName;
  },
};

_.extend(john, jane, jim);
console.log(john);

//* Constructing objects
function Person(firstName, lastName) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  console.log('This function is invoked');
}
var john = new Person('john', 'Doe');
console.log(john);

//* function constructors and 'prototype'
Person.prototype.getFullName = function () {
  return this.firstName + ', ' + this.lastName;
};

console.log(john.getFullName());

//* Built-in function constructors
var a = new Number(3);
console.log(a.toFixed());

var b = new String('Bae');
console.log(b.toUpperCase());

var c = new Date();
console.log(c.getDate());

String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};
console.log('Steve'.isLengthGreaterThan(5));

var d = new Number(1);
Number.prototype.isPositive = function () {
  return this > 0;
};
console.log(d.isPositive());

var e = 2;
var f = new Number(2);
console.log(f);
console.log(e === f);

//* Arrays and for in
//! var arr = ['jill', 'jack', 'bill'];

//! for (var prop in arr) {
//!   console.log(prop + ': ' + arr[prop]);
//! }

//* Pure Prototypal Inheritance
//? Pollyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        'Object.create implementation' + ' only accepts the first parameter.'
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
var person = {
  firstName: 'Default',
  lastNAme: 'Default',
  greet: function () {
    return 'Hi ' + this.firstName;
  },
};

var peter = Object.create(person);
(peter.firstName = 'Peter'), (peter.lastName = 'Piper'), console.log(peter);

//* Es6 and Classes
class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return 'Hi ' + this.firstName;
  }
}

var brad = new Human('Brad', 'Pit');
console.log(brad.greet());

//* Odds and Ends
//? Initialization
var people = [
  {
    firstName: 'James',
    lastName: 'Doe',
    addresses: ['102 Main st.', '589 Third Rd.'],
    greet: function () {
      return `Hello ${this.firstName}`;
    },
  },
  {
    firstName: 'Jude',
    lastName: 'Wyke',
    addresses: ['178 Main st.', '523 Third Rd.'],
    greet: function () {
      return `Hello ${this.firstName}`;
    },
  },
];
console.log(people[0].greet());
console.log(Object.prototype.toString.call(people));

//* strict mode

var person;
person = {};
console.log('person', person);
