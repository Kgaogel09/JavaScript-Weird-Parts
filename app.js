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

//* function statement
greet();
function greet() {
  console.log('hi');
}

//* anonymous function, function expression
var anonymousGreet = function () {
  console.log('hi');
};
anonymousGreet();

// var anonymousGreet = () => {
//   console.log('hi');
// };

// anonymousGreet();

//* first class function
function log(a) {
  a();
}
log(function () {
  console.log('me');
});

//* by value (primitives)
// var a = 2;
// var b;

// b = a;
// a = 8;
// console.log(a, b);

//* by reference (all objects including functions)
// var c = { name: 'foo' };
// var d;
// d = c;
// c.name = 'fighters'; //*mutated
// console.log(c, d); //*pointing to the same location in memory

//* by reference (even as parameters)
// function changeGreeting(obj) {
//   obj.name = 'james'; //mutated
// }

// changeGreeting(d);
// console.log(c, d);

//? equals operators sets up new memory space(new address)
// c = { name: 'Pit' };
// console.log(c, d);

//*objects, functions and 'this' keyword
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

//*Arrays
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
console.table(arr);

// *arguments and spreads
function greet(fistName = 'Bill', lastName = 'Clinton', language = 'en') {
  if (arguments.length === 0) {
    console.log('missing params');
    return;
  }
  console.log(arguments);
  console.log(fistName, lastName, language);
}
greet('John', 'Cena', 'es');

//*Function Overloading
function greeting(firstName, lastName, language) {
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstName + ' ' + lastName);
  }
  if (language === 'es') {
    console.log('Hola ' + firstName + ' ' + lastName);
  }
}

function greetEng(firstName, lastName) {
  greeting(firstName, lastName, 'en');
}
function greetEsp(firstName, lastName) {
  greeting(firstName, lastName, 'es');
}

greetEng('John', 'Doe');
greetEsp('John', 'Doe');

//* Automatic semicolon insertion
function getPerson() {
  return;
  {
    firstName: 'Joe';
  }
}

console.log(getPerson());

//* Immediately invoked functions expressions (IIFEs)
//? function statement
function f1(name) {
  console.log('Hello ' + name);
}
f1('John');

//? function expression
var f2 = function (name) {
  console.log('Hello ' + name);
};
f2('Ced');

//? Immediately invoked function
var f3 = (function (name) {
  greet = 'hello ' + name;
  return greet;
})('Ben');

console.log(f3);

var firstName = 'Cindy';
(function (name) {
  var greeting = 'Inside IIFE: Hello ';
  console.log(greeting + ' ' + name);
})(firstName); //? IIFE

//* Understanding Closures
function f4(whatToSay) {
  return function (name) {
    console.log(whatToSay + ' ' + name);
  };
}

f4('Hello')('Tony');

function f5(whatToSay) {
  return function (name) {
    console.log(whatToSay + ' ' + name);
  };
}
var sayHi = f5('Hi');
sayHi('Grant');

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  console.log('i', i);
  return arr;
}

var fs = buildFunctions();
console.log(fs);
fs[0]();
fs[1]();
fs[2]();

function buildFunctions1() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs1 = buildFunctions1();
console.log(fs1);
fs1[0]();
fs1[1]();
fs1[2]();

//* function factory
//? language will be trapped or collected in the Closure/Scope Chain
function makeGreeting(language) {
  return function (firstName, lastName) {
    if (language === 'en') {
      console.log('Hello ' + firstName + ' ' + lastName);
    }
    if (language === 'es') {
      console.log('Hola ' + firstName + ' ' + lastName);
    }
  };
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Jake', 'Paul');
greetSpanish('Jake', 'Paul');

//* Closures and Callbacks

function sayHiLater() {
  var greeting = 'hi';
  setTimeout(() => {
    console.log(greeting);
  }, 3000);
}
sayHiLater();

//* Call(), Apply() and Bind()
var person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
};

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments ' + lang1 + ' ' + lang2);
};

var logPersonName = logName.bind(person);

logPersonName();

logName.call(person, 'en', 'es');
logName.apply(person, ['zulu', 'pedi']);

//*Function borrowing
var person2 = {
  firstName: 'Peter',
  lastName: 'Piper',
};
var data = person.getFullName.apply(person2);
console.log(data);

//* function currying
function multiply(a, b) {
  return a * b;
}
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(2));

//* functional programming
var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  const element = arr1[i] * 2;
  arr2.push(element);
}
console.log(arr2);

function mapForEach(arr, fn) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

var arr3 = mapForEach(arr1, function (item) {
  return item * 2;
});

console.log(arr3);

var checkPastLimit = function (limiter, item) {
  return item > limiter;
};

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function (limiter) {
  return function (limiter, item) {
    return item > limiter;
  }.bind(this, limiter);
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);

//* Underscore.js

var arr6 = _.map(arr1, function (item) {
  return item * 3;
});
console.log(arr6);

var arr7 = _.filter([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function (item) {
  return item % 2 === 0;
});
console.log(arr7);
