// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Создайте новый массив, где каждый элемент увеличен на 1.

/* let array = [1, 2, 3, 4, 5];
let newarr = array.map((element) => element + 1);
console.log(newarr); */

// Задача 2: Дана строка 'Hello World'. Разбейте её на массив символов и создайте новый массив, где каждый символ повторяется дважды.

/* let str = "Hello World";
let str1 = str.split("");
let doubleArr = str1.map((ee) => ee + ee);
console.log(doubleArr); */

// Задача 3: Дана массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Создайте массив, содержащий только имена.

/* let massive = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
let massive1 = massive.map((ee) => ee.name);
console.log(massive1); */

// Задача 4: У вас есть массив чисел [1, 4, 9]. Создайте новый массив, содержащий квадратные корни этих чисел.

/* let array = [1, 4, 9];
let arr1 = array.map((ee) => Math.sqrt(ee));
console.log(arr1); */

// Задача 5: Дана массив строк ['a', 'b', 'c']. Создайте новый массив, где каждую строку заменяют её ASCII-код.

/* let arrStr = ["a", "b", "c"];
let newArr = arrStr.map((ee) => ee.charCodeAt(0));
console.log(newArr); */

// 2. forEach
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Выведите каждый элемент на консоль.

/* let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});
 */
// Задача 2: Дана массив строк ['Hello', 'World']. Объедините все строки в одну и выведите её на консоль.

/* let array = ["Hello", "World"];
let result = "";
array.forEach(function (item) {
  result += item + ", ";
});
console.log(result.trim()); */

// Задача 3: У вас есть массив объектов {name: 'John'}, {name: 'Jane'}. Выведите имена на консоль.

/* let arr = [{ name: "John" }, { name: "Jane" }];
arr.forEach((element) => {
  console.log(element.name);
}); */

// Задача 4: Дана массив чисел [10, 20, 30]. Найдите сумму всех чисел и выведите её на консоль.

/* let numbers = [10, 20, 30];
let sum = 0;
numbers.forEach(function (number) {
  sum += number;
});
console.log(sum); */

// Задача 5: У вас есть массив строк ['apple', 'banana', 'cherry']. Выведите длину каждой строки на консоль.

/* let arr = ["apple", "banana", "cherry"];
arr.forEach((element) => {
  console.log(element.length);
}); */

// 3. filter
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Создайте новый массив, содержащий только чётные числа.

/* let arrStr = [1, 2, 3, 4, 5];
let arr = arrStr.filter((ee) => ee % 2 === 0);
console.log(arr); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Создайте новый массив, содержащий строки длиной больше 5 символов.

/* let fruits = ["apple", "banana", "cherry"];
let longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longFruits); */

// Задача 3: У вас есть массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Создайте массив, содержащий только тех, кто старше 25 лет.

/* let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
let olderThan25 = arr.filter((element) => element.age > 25);
console.log(olderThan25); */

// Задача 4: Дана массив чисел [1, -2, 3, -4, 5]. Создайте новый массив, содержащий только положительные числа.

/* let arr = [1, -2, 3, -4, 5];
let olderThan25 = arr.filter((element) => element > 0);
console.log(olderThan25); */
// Задача 5: У вас есть массив строк ['a', 'b', 'a', 'c', 'a']. Создайте новый массив, содержащий только уникальные строки.

/* let strings = ["a", "b", "a", "c", "a"];
let uniqueStrings = strings.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});

console.log(uniqueStrings); */

// 4. find
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Найдите первое число, большее 3.

/* let arr = [1, 2, 3, 4, 5];
let olderThan25 = arr.find((element) => element > 3);
console.log(olderThan25); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Найдите первую строку, начинающуюся с буквы 'b'.

/* let arr = ["apple", "banana", "cherry"];
let arr1 = arr.find((element) => element.startsWith("b"));
console.log(arr1); */

// Задача 3: У вас есть массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Найдите объект с именем 'Jane'.

/* let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
let arr1 = arr.find((element) => element.name === "Jane");
console.log(arr1);
 */
// Задача 4: Дана массив чисел [10, 20, 30, 40, 50]. Найдите первое число, которое делится на 4.

/* let arr = [10, 20, 30, 40, 50];
let arr1 = arr.find((element) => element % 4 === 0);
console.log(arr1); */

// Задача 5: У вас есть массив строк ['a', 'b', 'c']. Найдите первую строку, которая равна 'b'.

/* let arr = ["a", "b", "c"];
let arr1 = arr.find((it) => it.startsWith("b"));
console.log(arr1); */

// 5. some
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Проверьте, есть ли в массиве число больше 4.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.some((it) => it > 4);
console.log(arr1); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Проверьте, есть ли в массиве строка длиной больше 6 символов.

/* let arr = ["apple", "banana", "cherry"];
let arr1 = arr.some((it) => it.length > 6);
console.log(arr1); */

// Задача 3: У вас есть массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Проверьте, есть ли в массиве человек младше 20 лет.

/* let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
let arr1 = arr.some((it) => it.age < 20);
console.log(arr1); */

// Задача 4: Дана массив чисел [1, 2, 3, 4, 5]. Проверьте, есть ли в массиве отрицательные числа.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.some((i) => i < 0);
console.log(arr1); */

// Задача 5: У вас есть массив строк ['a', 'b', 'c']. Проверьте, есть ли в массиве строка 'd'.

/* let arr = ["a", "b", "c"];
let arr1 = arr.some((i) => i === "b");
console.log(arr1); */

// 6. includes
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Проверьте, есть ли в массиве число 3.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.includes(3);
console.log(arr1); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Проверьте, есть ли в массиве строка 'banana'.

/* let arr = ["apple", "banana", "cherry"];
let arr1 = arr.includes("banana");
console.log(arr1); */

// Задача 3: У вас есть массив объектов {name: 'John'}, {name: 'Jane'}. Проверьте, есть ли в массиве объект с именем 'John'.

/* let arr = [{ name: "John" }, { name: "Jane" }];
let nameArr = arr.map((it) => it.name);
let arr1 = nameArr.includes("John");
console.log(arr1);
 */
// Задача 4: Дана массив чисел [10, 20, 30, 40, 50]. Проверьте, есть ли в массиве число 25.

/* let arr = [10, 20, 30, 40, 50];
let arr1 = arr.includes(25);
console.log(arr1); */

// Задача 5: У вас есть массив строк ['a', 'b', 'c']. Проверьте, есть ли в массиве строка 'c'.

/* let arr = ["a", "b", "c"];
let arr1 = arr.includes("c");
console.log(arr1); */

// 7. every
// Задача 1: У вас есть массив чисел [2, 4, 6, 8]. Проверьте, все ли числа в массиве чётные.

/* let arr = [2, 4, 6, 8];
let arr1 = arr.every((it) => it % 2 === 0);
console.log(arr1); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Проверьте, все ли строки содержат букву 'a'.

/* let arr = ["apple", "banana", "cherry"];
let arr1 = arr.every((it) => it.includes("a"));
console.log(arr1); */

// Задача 3: У вас есть массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Проверьте, все ли люди старше 20 лет.

/* let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
let mapArr = arr.map((it) => it.age);
let arr1 = mapArr.every((it) => it > 20);
console.log(arr1); */

// Задача 4: Дана массив чисел [1, 2, 3, 4, 5]. Проверьте, все ли числа положительные.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.every((it) => it > 0);
console.log(arr1); */

// Задача 5: У вас есть массив строк ['a', 'b', 'c']. Проверьте, все ли строки длиной 1 символ.

/* let arr = ["a", "b", "c"];
let arr1 = arr.every((it) => it.length === 1);
console.log(arr1); */

// 8. sort
// Задача 1: У вас есть массив чисел [3, 1, 4, 2, 5]. Отсортируйте его в порядке возрастания.

/* let arr = [3, 1, 4, 2, 5];
arr.sort();
console.log(arr); */

// Задача 2: Дана массив строк ['banana', 'apple', 'cherry']. Отсортируйте его в алфавитном порядке.

/* let arr = ["banana", "apple", "cherry"];
arr.sort();
console.log(arr); */

// Задача 3: У вас есть массив объектов {name: 'John', age: 25}, {name: 'Jane', age: 30}. Отсортируйте массив по возрасту в порядке убывания.

/* let arr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
];
arr.sort(function (a, b) {
  return b.age - a.age;
});
console.log(arr); */

// Задача 4: Дана массив чисел [10, 5, 20, 15]. Отсортируйте его в порядке убывания.

/* let arr = [10, 5, 20, 15];
arr.sort((a, b) => b - a);
console.log(arr); */

// Задача 5: У вас есть массив строк ['apple', 'banana', 'cherry']. Отсортируйте его по длине строк.

/* let arr = ["apple", "banana", "cherry"];
arr.sort((a, b) => b.length - a.length);
console.log(arr); */

// 9. splice
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Удалите второй и третий элемент.

/* let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); */

// Задача 2: Дана массив строк ['apple', 'banana', 'cherry']. Замените 'banana' на 'blueberry'.

/* let arr = ["apple", "banana", "cherry"];
arr.splice(1, 1, "blueberry");
console.log(arr); */

// Задача 3: У вас есть массив чисел [1, 2, 3, 4, 5]. Вставьте число 6 после второго элемента.

/* let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6);
console.log(arr); */

// Задача 4: Дана массив строк ['a', 'b', 'c', 'd']. Удалите первые два элемента и добавьте 'x' и 'y'.

/* let arr = ["a", "b", "c", "d"];
arr.splice(0, 2, "x", "y");
console.log(arr); */

// Задача 5: У вас есть массив чисел [10, 20, 30, 40, 50]. Удалите последние два элемента.

/* let arr = [10, 20, 30, 40, 50];
arr.splice(-2, 2);
console.log(arr); */

// 10. reduce
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Найдите сумму всех чисел.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.reduce(function (as, asd) {
  return as + asd;
}, 0);
console.log(arr1); */

// Задача 2: Дана массив строк ['a', 'b', 'c']. Объедините все строки в одну.

/* let arr = ["a", "b", "c"];
let arr1 = arr.reduce(function (as, asd) {
  return as + asd;
});
console.log(arr1); */

// Задача 3: У вас есть массив чисел [1, 2, 3, 4, 5]. Найдите произведение всех чисел.

/* let arr = [1, 2, 3, 4, 5];
let arr1 = arr.reduce(function (as, asd) {
  return as * asd;
});
console.log(arr1); */

// Задача 4: Дана массив объектов {value: 10}, {value: 20}. Найдите сумму всех значений.

/* let arr = [{ value: 10 }, { value: 20 }];
let arr1 = arr.reduce(function (as, asd) {
  return as.value + asd.value;
});
console.log(arr1); */

// Задача 5: У вас есть массив чисел [10, -10, 20, -20]. Найдите разницу между суммой положительных и суммой отрицательных чисел.

/* let arr = [10, -10, 20, -20];
let arr1 = arr.reduce(function (as, asd) {
  let sum1 = 0;
  let sum2 = 0;
  if (asd < 0) {
    sum1 = as + asd;
  } else if (asd > 0) {
    sum2 = as + asd;
  }
  return sum2 + sum1;
}, 0);
console.log(arr1); */

// 11. reduceRight
// Задача 1: У вас есть массив чисел [1, 2, 3, 4, 5]. Найдите сумму всех чисел, начиная с конца массива.

/* const numbers = [1, 2, 3, 4, 5];
const sumFromEnd = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumFromEnd); */

// Задача 2: Дана массив строк ['a', 'b', 'c']. Объедините все строки в одну, начиная с конца массива.

/* const numbers = ["a", "b", "c"];
const sumFromEnd = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumFromEnd); */

// Задача 3: У вас есть массив чисел [1, 2, 3, 4, 5]. Найдите произведение всех чисел, начиная с конца массива.

/* const numbers = [1, 2, 3, 4, 5];
const sumFromEnd = numbers.reduceRight(
  (accumulator, currentValue) => accumulator * currentValue,
  1
);
console.log(sumFromEnd); */

// Задача 4: Дана массив объектов {value: 10}, {value: 20}. Найдите сумму всех значений, начиная с конца массива.

/* const numbers = [{ value: 10 }, { value: 20 }];
const sumFromEnd = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue.value,
  0
);
console.log(sumFromEnd); */

// Задача 5: У вас есть массив строк ['apple', 'banana', 'cherry']. Объедините строки в одну, начиная с конца массива, и разделите их запятыми.

/* const fruits = ["apple", "banana", "cherry"];
const combinedFromEnd = fruits.reduceRight((accumulator, currentValue) => {
  return accumulator ? accumulator + ", " + currentValue : currentValue;
}, "");

console.log(combinedFromEnd); */
