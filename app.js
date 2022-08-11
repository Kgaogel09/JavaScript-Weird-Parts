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

var objectLiteral = {
  firstName: "Bill",
  isProgrammer: false,
};

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstName": "Mary", "lastName": "Me"}');
console.log(jsonValue);
