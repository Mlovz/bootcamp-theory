/*Задание№1*/
let name = "Салахуддин";
/*Задание№2*/
let age = 22;
let city = "Назрань";
/*Задание№3*/
let firstName = "Салах";
let lastName = "уддин";
console.log(firstName + lastName);
/*Задание№4*/
let isStudent = true;
/*Задание№5*/
let count = 33;
count = 334;
/*Задание№6*/
let a = 5;
let b = 10;
[a, b] = [b, a];
/*Задание№7*/
let price = 19.99;
console.log(typeof price);
/*Задание№8*/
const PI = 3.14;
/*Задание№9*/
let str = "123";
str = Number(str);
/*Задание№10*/
let num = 456;
num = String(num);
/*Задание№11*/
let colors = ["red", "green", "blue"];
/*Задание№12*/
colors.push("yellow");
/*Задание№13*/
colors.pop();
/*Задание№14*/
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
/*Задание№15*/
let person = {
  name1: "Салахуддин",
  age2: 15,
};
/*Задание№16*/
let car = {
  make: "Toyota",
  model: "Camry",
};
console.log(car.make);
/*Задание№17*/
person.age2 = 43;
/*Задание№18*/
car.color = "green";
/*Задание№19*/
delete car.model;
/*Задание№20*/
firstName = "Salahuddin";
let phrase = `My name is ${firstName} and I am ${age} years old.`;
console.log(phrase);
/*Задание№21*/
let isAvailable = false;
/*Задание№22*/
let x = 10;
let y = "hello";
console.log(typeof x);
console.log(typeof y);
/*Задание№23*/
let a1 = 5;
let b1 = 10;
console.log(a1 == b1);
/*Задание№24*/
let a2 = "5";
let b2 = 5;
console.log(a2 === b2);
/*Задание№25*/
let isAdult = true;
let hasTicket = true;
console.log(isAdult && hasTicket);
/*Задание№26*/
function greet(name) {
  let namegreet = `Hello, ${name}!`;
  console.log(namegreet);
}
greet("Salahuddin");
/*Задание№27*/
function square(number) {
  return number * number;
}
console.log(square(5));
/*Задание№28*/
function multiply(a, b = 1) {
  return a * b;
}
/*Задание№29*/
let num1 = 10;
let str1 = "20";
console.log(num1 + str1);
/*Задание№30*/
let isHappy = true;
isHappy = String(isHappy);
/*Задание№31*/
let hpga = ["str", "str", "str"];
let resulthpga = hpga.join();
/*Задание№32*/
let verc = "masive";
let arr = verc.split("");
/*Задание№33*/
let text = "stroka";
let textlenght = text.length;
console.log(textlenght);
/*Задание№34*/
let masive = [
  [1, 2, 3],
  [4, 5, 6],
];
/*Задание№35*/
let masive1 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(masive[1][0]);
/*Задание№36*/
let obj = {
  firstName: "Salahuddin",
  lastName: "Azhigov",
  greet: function (ff) {
    console.log(`Hello, my name is ${this.firstName}`);
  },
  farewell: function () {
    console.log(`Hello, my lastname is ${this.lastName}`);
  },
};
/*Задание№37*/
obj.greet();
/*Задание№38*/
console.log("name1" in person);
/*Задание№39*/
let person1 = { ...person };
/*Задание№40*/
let person01 = { ...person, ...person1 };
/*Задание№41*/
let x1;
/*Задание№42*/
console.log(x1);
/*Задание№43*/
let y1 = null;
/*Задание№44*/
console.log(y1);
/*Задание№45*/
let numbers = [1, 2, 3, 4, 5];
numbers[0] = 2;
/*Задание№46*/
let masive2 = [1, 2, 3];
masive2.forEach((element) => console.log(element));
/*Задание№47*/
let num2 = 100;
num2 = String(num2);
num2 = Number(num2);
/*Задание№48*/
let str2 = "apple";
let str3 = "banana";
console.log(str2 == str3);
/*Задание№49*/
let numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length);
/*Задание№50*/
let student = {
  adress: {
    city: Moskov,
  },
  grades: {
    grades: 5,
  },
};
