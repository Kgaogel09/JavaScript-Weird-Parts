//*es6 new syntax
//? variable scoping with let
let a = 'hello';
console.log(a);

{
  let a = 'goodbye';
  console.log(`a inside scope, ${a}`);

  let salary = 200;
  console.log(salary);
}

//? manipulating constants
// const c = 10;
// c = 2 * 9;

const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

//? template literals/string
var d = 'hello';
var e = 'world!';
var f = d + ' ' + e;
console.log(f);

let g = `${d} ${e}`;
console.log(g);

let luke = 'blue';
let vader = 'red';

let message = `Luke first uses a ${luke}-colored lightsaber. But his father, Vader, wields a ${vader}-colored lightsaber.`;

console.log(message);

//? spread operators
let arr1 = [5, 6, 7];
let arr2 = [4, ...arr1, 8];
console.log(arr2);

function print(a, b, c) {
  console.log(a, b, c);
}
let z = [1, 2, 3, 4, 5];
print('z', z);

function print(...z) {
  console.log(z);
}
print(1, 2, 3);

function butter(...b) {
  let a = [1, 2, 3, ...b];
  return a;
}
butter(4, 5, 6);

//? destructuring
let c = [100, 200];
let [m, n] = c;
console.log(c);

let fellowship = ['Frodo', 'Gandalf', 'Aragorn'];
let [hobbit, wizards, ranger] = fellowship;
console.log(hobbit, wizard, ranger);

let x = [100, 200, 300, 400, 500];
let [y, ...w] = x;
console.log('y', y, 'w', w);

let wizard = { isMagical: true, power: 10 };
// let magical = wizard.isMagical;
// let power = wizard.power;
let { isMagical, power } = wizard;
console.log(wizard);

let magical = true;
let powers = 10;

let ninja = { magical: false, powers: 5 };
({ magical, powers } = ninja);

console.log(ninja);
