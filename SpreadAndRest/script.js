// 1. Создайте новый массив, объединив два существующих массива с помощью оператора spread.

/* let masive1 = [1, 2, 3];
let masive2 = [4, 5, 6];
let masive3 = [...masive1, ...masive2];
console.log(masive3); */

// 2. Передайте аргументы функции с помощью оператора spread.

/* function Arg1(Arg) {
  return Arg;
}
let Arr = [1, 2, 3];
Arg1(...Arr); */

// 3. Скопируйте объект с помощью оператора spread.

/* let obj1 = { name: "name", age: 15 };
let obj2 = { ...obj1 }; */

// 4. Используйте оператор spread для создания копии массива в обратном порядке.

/* let masive1 = [1, 2, 3];
let masiveReverse = [...masive1.reverse()];
console.log(masiveReverse); */

// 5. Передайте часть элементов массива как аргументы функции с использованием оператора spread.

/* function greet(One, Two, Three) {
  console.log(`Hello, ${One} ${Two} ${Three}!`);
}
const names = ["1", "2", "3", "4", "5"];
greet(...names); */

// 6. Используйте оператор spread для объединения нескольких объектов в один.

/* let obj1 = { name1: "name1", age1: 1 };
let obj2 = { name2: "name2", age2: 2 };
let obj3 = { name3: "name3", age3: 3 };
let obj4 = { ...obj1, ...obj2, ...obj3 };
console.log(obj4); */

// 7. Напишите функцию, которая будет принимать любое количество аргументов и выводить их сумму, используя оператор rest.

/* function sum1(...rest) {
  console.log(rest.reduce((total, num) => total + num));
}
sum1(1, 2, 3, 4, 3231231232); */

// 8. Создайте функцию, которая принимает первый аргумент как отдельный параметр, а остальные - с помощью оператора rest.

/* function Arrg(arg, ...rest) {
  console.log(rest, arg);
}
Arrg(15, 12, 3, 4, 3); */

// 9. Используйте оператор rest для подсчета среднего значения всех переданных аргументов.

/* function Srd(...rest) {
  let sum1 = rest.reduce((total, num) => total + num);
  console.log(sum1 / rest.length);
}
Srd(1, 2, 3, 4); */

// 10. Напишите функцию, которая принимает массив чисел и возвращает их сумму, используя оператор rest.

/* function massum() {
  return (sum1 = masive1.reduce((total, num) => total + num));
}
let masive1 = [1, 2, 3, 4, 5];
console.log(massum(...masive1)); */

// 11. Создайте функцию, которая принимает произвольное количество строк и объединяет их в одну строку с помощью оператора rest.

/* function str(...rest) {
  return rest.join("");
}
console.log(str("1232", "231", "sdasdasdad")); */

// 12. Используйте оператор rest для получения всех переданных аргументов в виде массива внутри функции.

/* function arr(...array) {
  return array;
}
console.log(arr(1, 2, 3)); */

// 13. Напишите функцию, которая принимает два аргумента - объекты, и возвращает новый объект, объединяя оба с помощью оператора spread.

/* function objC(obj1, obj2) {
  return (obj3 = { ...obj1, ...obj2 });
}
let obj1 = {
  name1: "name1",
  age1: "age1",
};
let obj2 = {
  name2: "name2",
  age2: "age2",
};
console.log(objC(obj1, obj2)); */

// 14. Создайте функцию, которая принимает массив чисел и возвращает наименьшее число, используя оператор rest и оператор spread.

/* function findMinimum(...numbers) {
  return Math.min(...numbers);
}
let masive = [1, 2, 3, -123123];
console.log(findMinimum(...masive)); */

// 15. Напишите функцию, которая принимает произвольное количество объектов и объединяет их в один с помощью оператора rest и оператора spread.

/* function objCont(...obj1) {
  console.log(...obj1);
}
let obj1 = {
  name1: "name1",
  age1: "age1",
};
let obj2 = {
  name2: "name2",
  age2: "age2",
};
objCont({ ...obj1, ...obj2 }); */

// 16. Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий все элементы обоих массивов, без повторений.

/* function arrayCont(array1, array2) {
  let arr = [...array1, ...array2];
  let arrNo = [...new Set(arr)];
  return arrNo;
}
let array1 = [1, 1, 2, 2, 3, 3];
let array2 = [4, 4, 5, 5, 6, 6];
console.log(arrayCont(array1, array2)); */

// 17. Создайте функцию, которая принимает объект и возвращает копию этого объекта с измененным значением определенного свойства с использованием оператора spread.

/* function updateObj(obj, key, value) {
  let newObj = { ...obj, [key]: value };
  return newObj;
}
let obj = {
  name: "name",
  age: 15,
};
console.log(updateObj(obj, "name", "newName")); */

// 18. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только определенные свойства объектов, используя оператор spread.

/* function massObj(arr, keys) {
  return arr.map((obj) => {
    let newObj = {};
    for (key of keys) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  });
}
const originalArray = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const selectedKeys = ["name"];

const newArray = massObj(originalArray, selectedKeys);

console.log(newArray); */

// 19. Напишите функцию, которая принимает имя пользователя в качестве первого аргумента, а остальные аргументы - его увлечения. Функция должна выводить сообщение о том, что имя пользователя увлекается теми или иными вещами.

/* function showHobbies(username, ...hobbies) {
  if (hobbies.length === 0) {
    console.log(`${username} не указал(а) свои увлечения.`);
  } else {
    console.log(`${username} увлекается: ${hobbies.join(", ")}.`);
  }
}
let hobbie = ["футбол", "чтение", "путешествия"];
showHobbies("Алексей", hobbie);
showHobbies("Мария"); */

// 20. Создайте функцию, которая принимает неопределенное количество строк и возвращает новую строку, содержащую их все, разделенные запятыми, с использованием оператора rest.

/* function joinWithCommas(...strings) {
  return strings.join(", ");
}
const result = joinWithCommas("яблоко", "банан", "апельсин", "груша");
console.log(result); */

// 21. Напишите функцию, которая принимает аргументы различных типов (числа, строки, булевы значения) с помощью оператора rest и выводит их типы.

/* function logTypes(...args) {
  args.forEach((arg) => {
    console.log(`${arg} это ${typeof arg}`);
  });
}
logTypes(
  42,
  "Hello",
  true,
  false,
  "World",
  3.14,
  null,
  undefined,
  { key: "value" },
  [1, 2, 3]
); */

// 22. Создайте функцию, которая принимает произвольное количество массивов и возвращает новый массив, содержащий уникальные элементы из всех переданных массивов.

/* function arrays(...arrays) {
  let newArr = arrays.flat();
  let noDub = [...new Set(newArr)];
  return noDub;
}
let Arr1 = [1, 2, 3];
let Arr20 = [4, 5, 6];
let Arr3 = [7, 8, 9, 9];
console.log(arrays(Arr1, Arr20, Arr3)); */

// 23. Напишите функцию, которая принимает произвольное количество объектов и возвращает новый объект, содержащий все свойства из переданных объектов, с приоритетом более поздних объектов в аргументах.

/* function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };
const result = mergeObjects(obj1, obj2, obj3);
console.log(result); */

// 24. Создайте функцию, которая принимает массив объектов и возвращает новый массив с уникальными значениями определенного свойства всех объектов.

/* агтсешщт пуеГтшйгуЗкщзукенМфдгуы(фккфнб зкщзукен) Х
  сщтые гтшйгуМфдгуы = туц Ыуе()ж
  фккфнюащкУфср((щио) =Ю Х
    ша (щиоюрфыЩцтЗкщзукен(зкщзукен)) Х
      гтшйгуМфдгуыюфвв(щиохзкщзукенъ)ж
    Ъ
  Ъ)ж
  куегкт хюююгтшйгуМфдгуыъж
Ъ
сщтые фккфнЩаЩиоусеы = х
  Х швЖ 1? тфьуЖ ЭФдшсуЭб фпуЖ 30 Ъб
  Х швЖ 2? тфьуЖ ЭИщиЭб фпуЖ 25 Ъб
  Х швЖ 3? тфьуЖ ЭСрфкдшуЭб фпуЖ 30 Ъб
  Х швЖ 4? тфьуЖ ЭВфмшвЭб фпуЖ 25 Ъб
ъж
сщтые гтшйгуФпуы = пуеГтшйгуЗкщзукенМфдгуы(фккфнЩаЩиоусеыб ЭфпуЭ)ж
сщтыщдуюдщп(гтшйгуФпуы)ж */

// 25. Напишите функцию, которая принимает произвольное количество массивов чисел и возвращает массив, содержащий минимальное и максимальное значение из каждого переданного массива, используя оператор rest и оператор spread.

/* function minMaxFromArrays(...arrays) {
  return arrays.map((array) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { min, max };
  });
}
const result25 = minMaxFromArrays([1, 2, 3], [10, 5, 8], [100, 50, 75]);
console.log(result25); */

// 26. Напишите функцию, которая принимает произвольное количество массивов и объединяет все составляющие массивы в один без повторений.

/* function mergeUniqueArrays(...arrays) {
  return [...new Set(arrays.flat())];
}
const result26 = mergeUniqueArrays([1, 2, 3], [2, 3, 4], [4, 5, 6]);
console.log(result26); */

// 27. Создайте функцию, которая принимает произвольное количество объектов и возвращает новый объект, содержащий уникальные свойства из всех переданных объектов.

/* function mergeUniqueProperties(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}
const result27 = mergeUniqueProperties(
  { a: 1, b: 2 },
  { b: 3, c: 4 },
  { d: 5 }
);
console.log(result27); */

// 28. Напишите функцию, которая принимает массив чисел и произвольное количество чисел в качестве аргументов и возвращает новый массив, содержащий все числа вместе с переданными дополнительными числами.

/* function appendNumbers(array, ...numbers) {
  return [...array, ...numbers];
}
const result28 = appendNumbers([1, 2, 3], 4, 5, 6);
console.log(result28); */

// 29. Создайте функцию, которая принимает два объекта и возвращает новый объект, состоящий из свойств обоих объектов, при этом свойства из второго объекта перезаписывают свойства из первого объекта в случае конфликта.

/* function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const result29 = mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
console.log(result29); */

// 30. Напишите функцию, которая принимает несколько массивов и возвращает новый массив, содержащий в себе все элементы из переданных массивов, но без повторений.

/* function mergeArraysWithoutDuplicates(...arrays) {
  return [...new Set(arrays.flat())];
}
const result30 = mergeArraysWithoutDuplicates([1, 2, 3], [3, 4, 5], [5, 6, 7]);
console.log(result30); */
