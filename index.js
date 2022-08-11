// Name/Value Pair
const address = "100 Main Street";

// Object
const addressOne = {
  street: "Main",
  number: 122,
  apartment: {
    floor: 1,
    room: 09,
  },
};

// const a = "hello world";
// console.log(a);
// function b() {
//   console.log("called b");
// }
// b();

// var c = "Hello";
// console.log(c);
// if (c === undefined) {
//   console.log("is undefined");
// } else {
//   console.log("is defined");
// }

// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);

// a();

// function c() {
//   function d() {
//     console.log(el);
//   }
//   var el = 2;
//   d();
// }

// var el = 1;
// c();

// long running function
// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {
//     console.log(`finished function`);
//   }
// }

// function clickHandler() {
//   console.log(`click event!`);
// }

// // listen fot the click event
// document.addEventListener("click", clickHandler);

// waitThreeSeconds();
// console.log(`finished execution`);

// static typing
// bool isNew = "hello"; an error

// Dynamic Typing
// var isNew = true;
// isNew = "yup:";
// isNew = 1;

// callback functions
// console.log(1);
// setTimeout(() => {
//   console.log(`2`);
// }, 0);
// console.log(3);

// const names = ["jack", "joe", "james"];
// names.forEach((name) => console.log(name));

// const myForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     cb(element);
//   }
// };

// myForEach(names, (name) => {
//   console.log(name);
// });

// const loadPokemon = (id, cb) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       cb(data);
//     });
// };

// loadPokemon(9, (pokemon) => {
//   console.log(pokemon);
// });

// Equality Comparison
// var a = 0;
// var b = false;

// if (a === b) {
//   console.log(`equal`);
// } else {
//   console.log(`not equal`);
// }

// Existence and Boolean
// var a;
// goes to the internet and looks for a value
// if (a) {
//   console.log(`found`);
// } else {
//   console.log(`not found`);
// }

// function greet(name) {
//   name = name || `Your name here`;
//   console.log(`hello ` + name);
// }
// || or method returns a value that is true
// greet("tony");
// greet();

console.log(libraryName);
