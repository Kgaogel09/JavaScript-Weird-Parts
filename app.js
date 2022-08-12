// var person = new Object();
// person["firstName"] = "Bill";
// person["lastName"] = "Russel";

// var firstNameProperty = "firstName";

// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.lastName);

// person.address = "200 Block G";

// var Bill = {
//   firstName: "Bill",
//   lastName: "Russel",
//   address: {
//     street: "Yinhle",
//     city: "Sosha",
//   },
// };
// console.log(Bill);

// function greet(person) {
//   console.log("Hi " + person.firstName);
// }

// greet(Bill);
// greet({ firstName: "Mary", lastName: "Jane" });

// Bill.title = "Sir";

// var english = {
//   greet: "Hello",
// };
// var spanish = {
//   greet: "Hola",
// };

// console.log(english.greet);

// var objectLiteral = {
//   firstName: "Bill",
//   isProgrammer: false,
// };

// console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{"firstName": "Mary", "lastName": "Me"}');
// console.log(jsonValue);

// function greet() {
//   console.log('hi');
// }
// greet.language = 'english';
// console.log(greet.language);

// function statement
greet();
function greet() {
  console.log('hi');
}

// anonymous function, function expression
var anonymousGreet = function () {
  console.log('hi');
};
anonymousGreet();

// var anonymousGreet = () => {
//   console.log('hi');
// };

// anonymousGreet();

// first class function
function log(a) {
  a();
}
log(function () {
  console.log('me');
});

// by value (primitives)
// var a = 2;
// var b;

// b = a;
// a = 8;
// console.log(a, b);

// by reference (all objects including functions)
// var c = { name: 'foo' };
// var d;
// d = c;
// c.name = 'fighters'; //mutated
// console.log(c, d); //pointing to the same location in memory

//br reference (even as parameters)
// function changeGreeting(obj) {
//   obj.name = 'james'; //mutated
// }

// changeGreeting(d);
// console.log(c, d);

//equals operators sets up new memory space(new address)
// c = { name: 'Pit' };
// console.log(c, d);

//objects, functions and this keyword
var a = () => {
  console.log(this);
  this.newVariable = 'hello';
};
function b() {
  console.log(this);
}
a();

console.log(newVariable);

b();

var c = {
  name: 'The c object',
  log: function () {
    var self = this;
    self.name = 'c2 object';
    console.log(self);

    var setName = function (newName) {
      self.name = newName;
    };
    setName('c3 object');
    console.log(self);
  },
};

c.log();

//Arrays
var arr = [
  1,
  { name: 'john', title: 'Mr' },
  'Money',
  false,
  function (name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
];
arr[4](arr[1].name);
console.log(arr);

// arguments and spreads
function greet(fistName = 'Bill', lastName = 'Clinton', language = 'en') {
  if (arguments.length === 0) {
    console.log('missing params');
    return;
  }
  console.log(arguments);
  console.log(fistName, lastName, language);
}
greet('John', 'Cena', 'es');
