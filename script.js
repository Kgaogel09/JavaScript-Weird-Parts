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
