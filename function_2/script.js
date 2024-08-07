// 1. Объявите функцию greet, которая выводит "Hello, World!".

function greet(hhh) {
  console.log(hhh);
}
greet("Hello, World!");

// 2. Объявите функцию greet, которая принимает параметр name и выводит "Hello, [name]!".

function greet1(name) {
  console.log(`Hello, ${name}!`);
}
greet1("Salahuddin");

// 3. Объявите функцию square, которая принимает число и возвращает его квадрат.

function square(number) {
  console.log(number ** 2);
}
square(15);

// 4. Объявите функцию add, которая принимает два числа и возвращает их сумму.

function add(a, b) {
  console.log(a + b);
}
add(15, 22);

// 5. Объявите функцию multiply, которая принимает два параметра и умножает их, второй параметр должен иметь значение по умолчанию 1.

function multiply(a1, b1 = 1) {
  console.log(a1 * b1);
}
multiply(15);

// 6. Объявите функцию factorial, которая вычисляет факториал числа.

function factorial(n) {
  if (n < 0) {
    return "Факториал отрицательного числа не существует";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
console.log(factorial(5));

// 7. Создайте анонимную функцию и присвойте её переменной sum, которая принимает два числа и возвращает их сумму.

const sum = function (a, b) {
  return a + b;
};
console.log(sum(3, 5));

// 8. Перепишите функцию greet, используя стрелочную функцию.

greet1 = (name) => `Hello, ${name}!`;
console.log(greet1("sssdwdwsss"));

// 9. Объявите функцию applyOperation, которая принимает два числа и функцию, и применяет эту функцию к числам.

function applyOperation(num1, num2, operation) {
  return operation(num1, num2);
}
let plus = (a, b) => a + b;
let minus = (a, b) => a - b;
console.log(applyOperation(2, 3, plus));
console.log(applyOperation(123, 5, minus));

// 10. Объявите функцию createMultiplier, которая принимает число и возвращает функцию, умножающую на это число.

function createMultiplier(num) {
  return function (dw) {
    return dw * num;
  };
}
console.log(createMultiplier(123)(5));

// 11. Объявите функцию counter, которая возвращает функцию, увеличивающую внутреннюю переменную на 1 и возвращающую её значение.

function counter() {
  let per = 0;
  return function () {
    per += 1;
    return per;
  };
}
let counter1 = counter();
console.log(counter1());
console.log(counter1());

// 12. Объявите функцию greet, которая принимает параметр name. Вызовите её, используя метод call.

function greet2(name) {
  return this.name;
}
let thisname = {
  name: "Bob",
};
console.log(greet2.call(thisname));

// 13. Объявите функцию sum, которая принимает два числа. Вызовите её, используя метод apply.

function sum1(num1, num2) {
  return num1 + this.num2;
}
let num2 = {
  num2: 30,
};
console.log(sum1.apply(num2, [20]));

// 14. Объявите функцию multiply, которая принимает два числа. Создайте новую функцию, привязывая одно из значений, используя метод bind.

function multiply(num3, num4) {
  return num3 * num4;
}
let multiplyTwo = multiply.bind(null, 2);
console.log(multiplyTwo(3232));

// 15. Объявите функцию printPerson, которая принимает объект person с свойствами name и age и выводит их.

function printPerson(person) {
  console.log(`Имя: ${person.name}`);
  console.log(`Возраст: ${person.age}`);
}
let obj2 = {
  name: "Dwdad",
  age: 2312,
};
printPerson(obj2);

// 16. Объявите функцию updateAge, которая принимает объект person и новое значение age, и обновляет возраст у объекта.

function updateAge(person2, age) {
  return (person2.age = age);
}
let person21 = {
  name: "ddasdasdasdadadsad",
  age: 231,
};
updateAge(person21, 1231231);

// 17. Объявите функцию getFirstElement, которая принимает массив и возвращает его первый элемент.

function getFirstElement(masive1) {
  return masive1[0];
}
let masive11 = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getFirstElement(masive11));

// 18. Объявите функцию createBankAccount, которая возвращает объект с методами deposit и withdraw, инкапсулируя состояние счёта.

function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Внесено: ${amount}. Текущий баланс: ${balance}`);
      } else {
        console.log("Сумма депозита должна быть положительной.");
      }
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Снято: ${amount}. Остаток на счёте: ${balance}`);
      } else if (amount > balance) {
        console.log("Недостаточно средств для снятия.");
      } else {
        console.log("Сумма снятия должна быть положительной.");
      }
    },
    getBalance() {
      return balance;
    },
  };
}
const myAccount = createBankAccount();
myAccount.deposit(100);
myAccount.withdraw(30);
console.log(`Баланс: ${myAccount.getBalance()}`);
myAccount.withdraw(100);

// 19. Объявите функцию isNumber, которая принимает аргумент и возвращает true, если это число, и false в противном случае.

function isNumber(Arg) {
  if (typeof Arg === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber(10));

// 20. Объявите функцию createPerson, которая принимает name и age и возвращает объект с этими свойствами.

function createPerson(name, age) {
  return (obj3 = {
    name: name,
    age: age,
  });
}
console.log(createPerson("Salahuddin", 15));

// 21. Объявите функцию checkAge, которая принимает возраст и возвращает сообщение "Adult" или "Minor" в зависимости от значения.

function checkAge(age) {
  if (age < 18) {
    return "Minor";
  } else {
    return "Abult";
  }
}
console.log(checkAge(15));

// 22. Объявите функцию isEven, которая принимает число и возвращает true, если оно чётное, и false в противном случае.

function isEven(num5) {
  if (num5 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(5));

// 23. Объявите функцию getDayName, которая принимает число от 1 до 7 и возвращает название дня недели.

function getDayName(dayNum) {
  if (dayNum === 7) {
    return "Воскресенье";
  } else if (dayNum === 1) {
    return "Понедельник";
  } else if (dayNum === 2) {
    return "Вторник";
  } else if (dayNum === 3) {
    return "Среда";
  } else if (dayNum === 4) {
    return "Четверг";
  } else if (dayNum === 5) {
    return "Пятница";
  } else if (dayNum === 6) {
    return "Суббота";
  } else {
    return "Неправильный номер";
  }
}
console.log(getDayName(2));

// 24. Объявите функцию safeDivide, которая принимает два числа и возвращает их частное. Если делитель равен нулю, выбрасывается ошибка.

function safeDivide(Dem1, Dem2) {
  if (Dem1 > Dem2) {
    return Dem1 / Dem2;
  } else {
    return Dem2 / Dem1;
  }
}
console.log(safeDivide(32, 4));

// 25. Объявите функцию performOperation, которая принимает два числа и функцию обратного вызова для выполнения операции над этими числами.

/* function performOperation(num1, num2, callback) {
  return callback(num1, num2);
}
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
console.log(performOperation(10, 5, add));
console.log(performOperation(10, 5, subtract));

// 26. Объявите функцию delayedMessage, которая принимает сообщение и задержку, и выводит сообщение с использованием setTimeout.

function delayedMessage(letter, delay) {
  setTimeout(() => {
    console.log(letter);
  }, delay);
}
delayedMessage("Сообщение", 3000); */

// 27. Объявите функцию repeatMessage, которая принимает сообщение и интервал, и выводит сообщение каждые заданные миллисекунды с использованием setInterval.

/* function repeatMessage(message, interval) {
  let intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  return intervalId;
}
let intervalId = repeatMessage(
  "Это сообщение будет выводиться каждые 4 секунды.",
  4000
);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Вывод сообщений остановлен.");
}, 10000);
 */
// 28. Объявите функцию fetchData, которая возвращает промис, который разрешается через 2 секунды с сообщением "Data fetched".
// 29. Объявите асинхронную функцию asyncFetchData, которая использует await для ожидания выполнения промиса.
// 30. Объявите функцию convertToString, которая принимает число и возвращает его строковое представление.

function convertToString(num231232) {
  num = String(num231232);
  return typeof num;
}
console.log(convertToString(127312371273123));

// 31. Объявите функцию isString, которая принимает аргумент и возвращает true, если это строка, и false в противном случае.

function isString(Arg) {
  if (typeof Arg === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(isString(23));

// 32. Объявите функцию getFullName, которая принимает объект person с свойствами firstName и lastName и возвращает полное имя.

function getFullName({ firstname, Lasttname }) {
  return firstname + Lasttname;
}
let person = {
  firstname: "Salah",
  Lasttname: "uddin",
};
console.log(getFullName(person));

// 33. Объявите функцию swap, которая принимает массив из двух элементов и возвращает массив с этими элементами в обратном порядке.

function swap(masive2) {
  return masive2.reverse();
}
let masive2 = [1, 2];
console.log(swap(masive2));

// 34. Объявите функцию sumAll, которая принимает произвольное количество чисел и возвращает их сумму.

function sumAll(...args) {
  return args.reduce((sum, as) => sum + as, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));

// 35. Объявите функцию combineArrays, которая принимает два массива и возвращает один объединённый массив.

function combineArrays(mas1, mas2) {
  let mas3 = [...mas1, ...mas2];
  return mas3;
}
console.log(combineArrays([1, 2, 3], [4, 5, 6]));

// 36. Объявите функцию convertToNumber, которая принимает строку и возвращает её числовое значение.

function convertToNumber(str) {
  return Number(str);
}
console.log(convertToNumber("123"));

// 37. Объявите функцию isTruthy, которая принимает аргумент и возвращает его булевое значение.

function isTruthy(value) {
  return Boolean(value);
}
console.log(isTruthy(null));

// 38. Объявите функцию hasProperty, которая принимает объект и имя свойства и возвращает true, если свойство существует, и false в противном случае.

function hasProperty(obj4, name) {
  if (obj4.name === name) {
    return true;
  } else {
    return false;
  }
}
console.log(hasProperty({ name: "dwd", age: 2321 }, "dwd"));

// 39. Объявите функцию mergeObjects, которая принимает два объекта и возвращает один объединённый объект.

function mergeObjects(obj5, obj6) {
  let obj7 = { ...obj5, ...obj6 };
  return obj7;
}
let obj5 = { name1: "Name1", age1: 141 };
let obj6 = { name2: "Name2", age2: 142 };
console.log(mergeObjects(obj5, obj6));

// 40. Объявите функцию getMinMax, которая принимает два числа и возвращает объект с их минимальным и максимальным значением.

function getMinMax(a1, b1) {
  return {
    min: Math.min(a1, b1),
    max: Math.max(a1, b1),
  };
}
console.log(getMinMax(4, 5));

// 41. Объявите функцию isNullOrUndefined, которая принимает аргумент и возвращает true, если он равен null или undefined, и false в противном случае.

function isNullOrUndefined(value) {
  if (value === null || value === undefined) {
    return true;
  } else {
    return false;
  }
}
console.log(isNullOrUndefined(123));

// 42. Объявите функцию booleanToString, которая принимает булево значение и возвращает его строковое представление.

function booleanToString(Bool) {
  return String(Bool);
}
console.log(booleanToString(true));

// 43. Объявите функцию stringToArray, которая принимает строку и возвращает массив её символов.

function stringToArray(str2) {
  return str2.split("");
}

console.log(stringToArray("dstringToArrayeqwfewfS"));

// 44. Объявите функцию concatStrings, которая принимает две строки и возвращает одну объединённую строку.

function concatStrings(str1, str2) {
  return str1 + str2;
}
console.log(concatStrings("sda", "asdasd"));

// 45. Объявите функцию getSubstring, которая принимает строку и два числа (начальный индекс и длину) и возвращает подстроку.

function getSubstring(str5, num1, num2) {
  return str5.substring(num1, num2);
}
console.log(getSubstring("12345", -2, 2));

// 46. Объявите функцию replaceChar, которая принимает строку, символ для замены и новый символ и возвращает изменённую строку.

function replaceChar(str3, sim1, sim2) {
  return str3.split(sim1).join(sim2);
}
console.log(replaceChar("Строка", "С", "b"));

// 47. Объявите функцию isLengthGreaterThan, которая принимает строку и число и возвращает true, если длина строки больше этого числа, и false в противном случае.

function isLengthGreaterThan(strL, numL) {
  const length = strL.length;
  if (length > numL) {
    return true;
  } else {
    return false;
  }
}
console.log(isLengthGreaterThan("dwd3", 3));

// 48. Объявите функцию containsSubstring, которая принимает строку и подстроку и возвращает true, если строка содержит подстроку, и false в противном случае.

function containsSubstring(str4, pstr4) {
  if (str4.includes(pstr4)) {
    return true;
  } else {
    return false;
  }
}
console.log(containsSubstring("stroka", "str"));

// 49. Объявите функцию trimSpaces, которая принимает строку и возвращает строку без начальных и конечных пробелов.

function trimSpaces(str6) {
  return str6.trim();
}
console.log(trimSpaces(" mmasmma "));

// 50. Объявите функцию isEven, которая принимает число и возвращает true, если оно чётное, и false в противном случае.

function isEven(numC) {
  if (numC % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(45));

// 498

// 500
