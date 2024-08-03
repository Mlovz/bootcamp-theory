// 1. Объявите переменную name и присвойте ей ваше имя.
{let userName = "Musa";
console.log(userName);}

// 2. Объявите переменные age и city, присвойте им значения.

{let age = 42;
let city = "Sunja";}

// 3. Объявите переменные firstName и lastName, объедините их и выведите полное имя.

{let firstName = "Abas";
let lastName = "Idris";
resName = firstName + " " + lastName;

console.log(resName);}

//4. Объявите переменную isStudent и присвойте ей значение true.

{let isStudent = true;}

// 5. Объявите переменную count, присвойте ей значение, затем измените это значение.

{let count = 12;
count = 20;}

// 6. Объявите переменные a и b, поменяйте их значения местами.

{let a = 1;
let b = 5;

[a,b] =[1, 20]
console.log(a);
[a,b] =[b,a]
console.log(a);
a = 5;
b = 1;

console.log(a, b);}

// 7. Объявите переменную price и присвойте ей значение 19.99. Проверьте её тип.

{let price = 19.99;
console.log(typeof price);}

// 8. Объявите константу PI и присвойте ей значение 3.14.

const PI = 3.14;

// 9. Объявите переменную str со значением "123" и преобразуйте её в число.

{let str = "123";
console.log(Number(str));}

// 10. Объявите переменную num со значением 456 и преобразуйте её в строку.

{let num = 456;
console.log(String(num));}

// 11. Объявите массив colors с элементами "red", "green", "blue".

{let colors = ["red", "green", "blue"];}

// 14. Объявите массив fruits с элементами "apple", "banana", "cherry". Выведите второй элемент массива.

{let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);}

//15. Объявите объект person с свойствами name и age.

{
let person = {
name: "Musa",
age: 42
};


console.log(person);
}
// 16. Объявите объект car с свойствами make и model. Выведите значение свойства make.

{let car = {};
car.make = "Россия";
car.model = "Ваз";

console.log(car.make);}

// 17. Измените значение свойства age в объекте person.

{
let person = {
name: "Musa",
age: 42
};
person.age = 18;
console.log(person.age);
}

// 18. Добавьте свойство color к объекту car.

{
const car = {}
car.color = "red"
console.log(car);}

// 19. Удалите свойство model из объекта car.

{let car = {};
car.make = "Россия";
car.model = "Ваз";
delete car[`model`];

console.log(car);}

// 20. Объявите переменные firstName и age. Используйте шаблонные строки для вывода фразы "My name is [firstName] and I am [age] years old."

{let firstName = 'Musa'
let age = 42

let summ1 = `My name is ${firstName} and I am ${age} years old.`;
console.log(summ1);}

// 21. Объявите переменную isAvailable и присвойте ей значение false.

{let isAvailable = false;}

// Использование оператора typeof
// 22. Объявите переменные x и y со значениями 10 и "hello" соответственно. Используйте typeof для проверки их типов.

{let x = 10;
let y = "hello";

console.log(typeof x);
console.log(typeof y);
}
// 23.
{let a = 5;
let b = 10;

let result = a == b;
console.log(result);}

//24

{let a = 5
let b = '5'

let result = a === b
console.log(result);}

//25

{let isAdult = 5;
let hasTicket = 5;

let result = isAdult && hasTicket === 5;
console.log(result);
}
//26

{function greet(name) {
    console.log(`hello! ${name}`);
return
}
greet('Musa')}

//27

{function square(a) {
  result = a * a;
  return result;
}
console.log(square(10));}

//28

{function multiply(a, b = 1) {
  console.log(a, b);
}
multiply(10);}

//29

{let num = 10 ;
let str = "20";

let result = num + str;
console.log(result);}

//30

{let isHappy = true
isHappy = String(isHappy)

console.log(String(isHappy));
}
//31

{let solvo =['центр ', 'обучения ', 'программирования '];

console.log(solvo[0]);

let solvoInfo = solvo.join(' ')
console.log(solvoInfo);}

//32

{let solvoInfo = ['центр обучения программирования'];

let solvo = solvoInfo.join(' ');
let solvo2 = solvo.split(' ');

console.log(solvo2);

}


//33

{let text = 'Magas';
console.log(text.length);}

//34

{let userInfo = [['Musa', 42],['Isa', 34],['Ali', 36]];}

//35

{let userInfo = [
  ['Musa', 42],
  ['Isa', 34],
  ['Ali', 36]
];

console.log(userInfo[1][0]);}

//36
{const obj ={
greet(){
  console.log('greet');
  },
farewell: function(){
  console.log('farewell');
  }
}

obj.greet()
obj.farewell()}

//// 37. Вызовите метод greet из объекта.

{const obj ={
greet(){
  console.log('greet');
  },
farewell: function(){
  console.log('farewell');
  }
}

obj.greet()}

// 38. Проверьте, существует ли свойство name в объекте person.

{const person = {
name: 'Alex'
}
console.log(
person.hasOwnProperty('name')
);}

// 39. Создайте копию объекта person с помощью оператора расширения.

{const person = {
name: 'Alex',
age: 32
}

const person2 = {...person}

console.log(person2);}

// 40. Объедините два объекта в один, используя оператор расширения.

{const userName ={
name:'Musa'
}

const firsName= {
name1:'Abas'
}

const infoName = {...userName, ...firsName}
console.log(infoName);
}

// 41. Объявите переменную x без присваивания значения.

{let x;}

//42. Проверьте, является ли переменная x undefined.
{let x;
console.log(x);}

// 43. Объявите переменную y и присвойте ей значение null.

{let y = null}

// 44. Проверьте, является ли переменная y null.

{let y = null
console.log(y);}

// 45. Объявите массив numbers и измените значение первого элемента.

{const namber =[2, 3, 'red']

namber[0]=10
console.log(namber);}

// 46. Объявите массив и используйте метод forEach для вывода каждого элемента.

{const namber =[2, 7, 12, 34]

namber.forEach((num) => {
console.log(num);

})
}

// 47. Объявите переменную num со значением 100. Преобразуйте её в строку, затем обратно в число.

{let num = 100
console.log(typeof num);

num = String(num)
console.log(typeof num);

num = Number(num)
console.log(typeof num);}

// 48. Объявите переменные str1 и str2 со значениями "apple" и "banana". Сравните их.

{let str1 = 'apple'
let str2 = 'banana'

console.log(str1 == str2);
}

// 49. Объявите массив numbers с несколькими элементами и выведите его длину.

{const namber = [21, 12, 34, 87, 55]
console.log(namber.length);}

// 50. Объявите объект student с вложенными объектами address и grades.

const student = {
address: {
strit:'Mutalieva',
namber: 1,
},
grades: 5
}

console.log(student);
