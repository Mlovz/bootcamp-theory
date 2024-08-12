// 1. Найдите сумму всех элементов в массиве чисел.
const nums = [1,2,3,4,5,20,50,60,79]
let sum = 0
for (let i = 0; i< nums.length; i++){
    sum = sum + nums[i]
}
console.log(sum);
// console.log(sum);
// 2. Найдите наибольший элемент в массиве.
const mord = [66, 88, 99, 400, 10, 12, 35]
let max = 0
for(let i = 0; i < mord.length; i++){
    if (mord [i] > max)
    max = mord[i]
}
console.log(max);
// 3. Найдите наименьший элемент в массиве.
const abbas = [66, 88, 99, 400, 10, 12, 35]
let min =  abbas[0]
for(let i = 0; i < abbas.length; i++){
    if (abbas [i] < min)
    min = abbas[i]
}
console.log(min);
// 4. Проверьте, содержит ли массив заданный элемент.
const ikrima = [10, 20,30,40,50,60]
let results =  ikrima.includes(60);
console.log(results);


// 5. Удалите все дубликаты из массива.
const mord3 =  ["apple", "banana","banana", "cherry"];
const kiwiObj = {}
const result = []
 for (let i = 0; i < mord3.length; i++){
    if (!kiwiObj[mord3[i]]) {
        result.push(mord3[i])
        kiwiObj [mord3[i]] = mord3[i]
    }
 }
console.log(result);


// 6. Объедините два массива без дубликатов.
const mor1 = ["apple", "banana"];
const mor2 = ["banana", "cherry"];
const mor3 = mor1.concat(mor2);
const kiwi1Obj = {}
const result1 = []
 for (let i = 0; i < mor3.length; i++){
    if (!kiwiObj[mor3[i]]) {
        result1.push(mor3[i])
        kiwi1Obj [mor3[i]] = mor3[i]
    }
 }
console.log(result);



// 7. Инвертируйте порядок элементов в массиве.
// инвентирую командой revers по другому не знаю как
const ajara = [1,2,3,4,5,6,7,8,9]
ajara.reverse();

console.log(ajara); 

// 8. Отсортируйте массив чисел по возрастанию.
const numbers = [2000, 10, 100, 351, 480];
numbers.sort((a, b) => a - b);
console.log(numbers);
// 9. Найдите индекс заданного элемента в массиве.
// хотел сделать так, но выдает ошибку 
// const sorterBG = [2000, 10, 100, 351, 480];

// let indexBG = sortedBG.indexOf(10);
// console.log(indexBG);
const letters = ['Tima', 'Pima', 'Jora', 'FF', 'GG', 'EZ'];

console.log(letters.indexOf('Jora')); // => 6


// 10. Разбейте массив на части заданной длины.
//посмотрел в интернете и ничего не понял, нужно ли создавать массив? длинны чего? Какого массива?
const chunkArray = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );


console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
// 11. Замените все отрицательные элементы в массиве на ноль.
let bigTima = [1, 2, -3, -4, -5, -6, -7, -8, - 9, 10];
for (i = 0; i <= bigTima.length; i++) {
  if (bigTima[i] < 0) {
    bigTima[i] = 0;
  }
}
console.log(bigTima);
// 12. Найдите среднее значение элементов в массиве.
const numbersT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 20];
const getAverage = (numbersT) => {
    const sum = numbersT.reduce((acc, number) => acc + number, 0);
    const length = numbersT.length;
    return sum / length;
  };
  

  console.log(getAverage(numbersT)); 

// 13. Создайте новый массив, содержащий только четные числа из исходного массива.
// не понял задание

// 14. Перемешайте элементы массива.
// let arr123 = [1, 2, 3, 4, 5, 6, 7, 8];

// shuffle(arr123);
// console.log(arr123); //выдает ошибку
// 15. Найдите наиболее часто встречающийся элемент в массиве.
const TR = [222, 222, 222, 222, 222, 10, 10, 10, 20, 20, 30, 50]
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
const mostFrequent = findMostFrequentElement(TR);
console.log(mostFrequent);