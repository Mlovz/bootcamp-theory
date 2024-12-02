// 1. Найдите сумму всех элементов в массиве чисел.

const nums = [32, 10, 1, 0, 43, 17, 25, 3];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log(sum);

// 2. Найдите наибольший элемент в массиве.

const arr1 = [10, 10, 32, 4, 5];
let max = 0;
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
}
console.log(max);

// 3. Найдите наименьший элемент в массиве.

const arr2 = [10, 2, 2, 2, 2, 2, 3, 4, 6, 556, 35, 34];
let min = arr2[0];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] < min) {
    min = arr2[i];
  }
}
console.log(min);

// 4. Проверьте, содержит ли массив заданный элемент.

console.log(arr2.includes(min) != 2);

// 5. Удалите все дубликаты из массива.

let arr_1 = new Set(arr2);
console.log(arr_1);

// 6. Объедините два массива без дубликатов.

let newarr = arr_1;
let dsda = [newarr, arr_1];

// 7. Инвертируйте порядок элементов в массиве.

arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArray = [];
for (i = arr3.length - 1; i >= 0; i--) {
  reversedArray.push(arr3[i]);
}
console.log(reversedArray);

// 8. Отсортируйте массив чисел по возрастанию.

let sortedArr = [...arr2];
sortedArr.sort((a, b) => a - b);
console.log(sortedArr);

// 9. Найдите индекс заданного элемента в массиве.

let indexArr = sortedArr.indexOf(10);
console.log(indexArr);

// 10. Разбейте массив на части заданной длины.

function chunkArray(sortedArr, chunkSize) {
  const result = [];
  for (i = 0; i < sortedArr.length; i += chunkSize) {
    chunk = sortedArr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}
const chunks = chunkArray(sortedArr, 4);
console.log(chunks);

// 11. Замените все отрицательные элементы в массиве на ноль.

let negArr = [1, 2, 3, 4, -5, -7, 6, 8, -10];
for (i = 0; i <= negArr.length; i++) {
  if (negArr[i] < 0) {
    negArr[i] = 0;
  }
}
console.log(negArr);

// 12. Найдите среднее значение элементов в массиве.

let sArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0;
for (let i = 0; i <= sArr.length - 1; i++) {
  sum += sArr[i];
}
sum2 = Math.floor(sum / sArr.length);
console.log(sum2);

// 13. Создайте новый массив, содержащий только четные числа из исходного массива.

let chArr = [];
for (i = 0; i <= sArr.length; i++) {
  if (sArr[i] % 2 === 0) {
    chArr.push(sArr[i]);
  }
}
console.log(chArr);

// 14. Перемешайте элементы массива.

function shuffleArray(sArr) {
  for (let i = sArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sArr[i], sArr[j]] = [sArr[j], sArr[i]];
  }
  return sArr;
}
const shuffledArray = shuffleArray(sArr);
console.log(shuffledArray);

// 15. Найдите наиболее часто встречающийся элемент в массиве.

let vArr = [1, 2, 2, 3, 4, 4, 33, 4, 5, 6, 6];

const findMostFrequentElement = (arr) => {
  const frequencyMap = arr.reduce((acc, element) => {
    acc[element] = (acc[element] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(frequencyMap).reduce(
    (mostFrequent, [element, count]) =>
      count > mostFrequent.count ? { element, count } : mostFrequent,
    { element: null, count: 0 }
  ).element;
};
const mostFrequent = findMostFrequentElement(vArr);
console.log(mostFrequent);
