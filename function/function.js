1.
// function greet() {
//   console.log('Hello,World');
// }
// greet()
2.
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet(`Suleim`)
3.
// function square(number) {
//     console.log(number ** 2);
// }
// square(15)
4.
// function add(a, b) {
//   console.log(a + b);
// }
// add(12, 17)
5.
// function multiply(a, b) {
//   console.log(a * b);
// }
// multiply(20, 1)
6.


7.
// let sum = function (a, b){
//   return a + b
// };
// console.log(sum(3, 5));
8.
// greet1 = (name) => `Hello, ${name}!`;
// console.log(greet1('ksssssssss'));
9.
// function applyOperation(num,num2,fn) {
//   return fn(num,num2)
// }
10.
// function createMultiplier(num) {
//   return function (dw) {
//     return dw * num;
//   };
// }
// console.log(createMultiplier(123)(5));
11.
// function counter() {
//   let a = 0
//   return () => {
//     a += 1;
//     return a;
//   };
// }
// let counter1 = counter();
// console.log(counter1());
// console.log(counter1());
12.
// function greet(name) {
//   return this.name;
// }
//  let thisname = {
//   name: 'Suleim'
//  }
// console.log(greet.call(thisname));
13.
// function sum1(num1, num2) {
//   return num1 + this.num2;
// }
// let num2 = {
//   num2: 30,
// };
// console.log(sum1.apply(num2, [20]));
14.
// function multiply(a, b) {
//   return a * b
// }
// let multiplyTwo = multiply.bind(null, 2);
// console.log(multiplyTwo(3232));
15.
// function printPerson(person) {
//   console.log(`Имя: ${person.name}`);
//   console.log(`Возраст: ${person.age}`);
// }
// let obj2 = {
//   name: 'Suleim',
//   age: 21
// }
// printPerson(obj2)
16.
// function updateAge(person2, age) {
//   return (person2.age = age);
// }
// let person21 = {
//   name: "ddasdasdasdadadsad",
//   age: 231,
// };
// updateAge(person21, 1231231);
17.


