// 1. Найдите сумму всех элементов в массиве чисел.
let sum1 = 0
const arr1 = [16, 20, 35, 40]
// arr1.length равен 4, т. к. считаем не индексы от 0, а количество элементов в массиве:
for (let i1 = 0; i1 < arr1.length; i1++) {
	sum1 += arr1[i1]
	// эти две формулы работают одинаково
	// sum1 = sum1 + arr1[i1]
}
console.log(sum1)

// 2. Найдите наибольший элемент в массиве.
const arr2 = [105, 11, 38, 300]
let max2 = 0
// мы указываем строгий знак "меньше" 4-х или нестрогий "меньше" 3-х, т. к. arr.length это индекс массива, то есть если элементов 4, то arr.length = 3
for (let i2 = 0; i2 < arr2.length; i2++) {
	if (arr2[i2] > max2) {
		max2 = arr2[i2]
	}
}
console.log(max2)
// ИЛИ метод Math.max.apply():
// в записи данного метода обязателен null
const maxformule = Math.max.apply(null, arr2)
console.log(maxformule)

// 3. Найдите наименьший элемент в массиве.
const arr3 = [15, 17, 50, -10, 0]
let min3 = 0
for (i3 = 0; i3 <= arr3.length; i3++) {
	if (arr3[i3] < min3) {
		min3 = arr3[i3]
	}
}
console.log(min3)
// ИЛИ метод Math.min.apply():
const minformule = Math.min.apply(null, arr3)
console.log(minformule)

// 4. Проверьте, содержит ли массив заданный элемент.
const arr4 = ['stroka1', 'stroka2', 'stroka3']
const letsFindElement = arr4.includes('stroka4')
console.log(letsFindElement)
// ИЛИ вместо объявления новой переменной:
console.log(arr4.includes('stroka1'))

// 5. Удалите все дубликаты из массива.
let arr5 = [1, 2, 10, 3, 4, 5, 4, 3, 2]
const newArr5 = [...new Set(arr5)]
console.log(arr5)
console.log(newArr5)

// 6. Объедините два массива без дубликатов.
let arr6 = [...arr3, ...arr5]
console.log(arr6)
arr6 = [...new Set(arr6)]
console.log(arr6)

// 7. Инвертируйте порядок элементов в массиве.
const arr7 = [1, 2, 7, 4, 5]
// внутри массива покажет пустые ячейки, т. к. в arr7 всего пять элементов (с индексами 0-4)
// затем задаю 8-й элемент (с индексом 7), пропустив пару индексов, чтобы сильнее запутаться:
arr7[7] = 6
console.log(arr7)
// переворачиваем этот же массив:
arr7.reverse()
console.log(arr7)
// но если задать новый массив с отсылкой ко старому, то старый массив так же перевернётся:
// let newArr7 = arr7.reverse()
// console.log(newArr7)
// console.log(arr7)

// ИЛИ: метод с созданием нового массива, без изменения первого:
let ar7 = [1, 2, 7, 4, 5]
ar7[7] = 6
// задаём пустой массив:
let reversedAr7 = []
// начинаем цикл с i, который меньше на единицу длины массива (т. к. индексы) и идём с обратной стороны, чтобы задать новый массив
for (let i7 = ar7.length - 1; i7 >= 0; i7--) {
	// для этого цикла мы вызываем созданный пустой массив:
	reversedAr7.push(ar7[i7])
}
// в первом массиве покажет "пусто", т. к. это - пустое значение (явно присваивается):
console.log(ar7)
// в перевёрнутом массиве покажет "undefined", т. к. undefined - неприсвоенное значение (по умолчанию):
console.log(reversedAr7)

// 8. Отсортируйте массив чисел по возрастанию.
let arr8 = [1, 2, 30, -5, 10, -50, 200, 3, 5, 4]
console.log(Массив до сортировки: ${arr8})
// если задать sort таким образом, то числа превратятся в текст и будут показаны так: 1, 10, 2, 200, 3, 4, 5
// с числами так не делать!
arr8 = arr8.sort()
console.log(arr8)
// для корректной сортировки массива чисел используется функция
// функция sort мутирует первоначальный массив даже при создании новой переменной:
arr8Sort = arr8.sort(function (a, b) {
	console.log(a, b)
	// после return выводит в консоль бредятину, поэтому смысла разбираться нет, только запомнить:
	return a - b
})
console.log(вывод нового (отсортированного) массива: ${arr8Sort})
console.log(вывод старого (типа НЕ отсорт.) массива: ${arr8})
// или сортировка той же самой первоначальной переменной массива (arr8) без создания новой переменной:
arr8 = arr8.sort(function (a8, b8) {
	return a8 - b8
})
console.log(один и тот же массив после своей сортировки: ${arr8})

// ИЛИ стрелочная => функция:

arr8.sort((a, b) => a - b)
console.log(arr8)

// ИЛИ ФУНКЦИЯ БЕЗ ИЗМЕНЕНИЯ ПЕРВОНАЧАЛЬНОГО МАССИВА:

let ar8 = [1, 2, 10, 200, 3, 5, 4]
console.log(Массив до сортировки: ${ar8})
let newAr8 = ar8.toSorted(function (a, b) {
	return a - b
})
console.log(ar8)
console.log(newAr8)

// 9. Найдите индекс заданного элемента в массиве.
// для этого мы вводим метод indexOf и в () указываем значение, индекс которого хотим найти:
let arr9 = [5, 9, 3, 'text', 'another text']
console.log(arr9)
let indexArr9 = arr9.indexOf('text')
console.log(indexArr9)

// 10. Разбейте массив на части заданной длины.
const arr10 = [7, 50, 10, 4, 8, 200, 15, 3]
// функция для отреза ненужных элементов в массиве:
function separate(a) {
	let b = arr10.slice(a)
	return b
}
// указание в параметре значения '3' срезает из первоначального массива первые три элемента с индексами 0-2
console.log(separate(3))
console.log(arr10)

// параметр b не отработает (он не задан; в чанкс указан со значением '10' - тоже не отработает)
function chunkArr10(a, b) {
	// внутри функции объявляем пустой массив, чтобы потом добавить в него объявленные новые разделённые массивы:
	const result = []
	// a = 2, т. к. внизу параметру a задаём значение 2
	// если i указать больше, чем 0, то в новых массивах будут учитываться только элементы, которые идут от этого числа
	// знак < должен быть строгий, т. к. иначе добавится дополнительный пустой массив
	for (let i = 0; i < arr10.length; i += a) {
		let chunk = arr10.slice(i, i + a)
		result.push(chunk)
	}
	return result
}
const chunks = chunkArr10(2, 10)
console.log(chunks)

// ИЛИ метод с циклом

const result10 = []
const chunkArr = 2
for (let i = 0; i < arr10.length; i += chunkArr) {
	result10.push(arr10.slice(i, i + chunkArr))
}
console.log(result10)

// 11. Замените все отрицательные элементы в массиве на ноль.
let arr11 = [1, 2, -10, -2, 3, 4, -5]
for (let i = 0; i <= arr11.length; i++) {
	if (arr11[i] < 0) {
		arr11[i] = 0
	}
}
console.log(arr11)

// 12. Найдите среднее значение элементов в массиве.
const arr12 = [4, 8, 6, 12, 7, 5]
let sum12 = 0
for (let i = 0; i < arr12.length; i++) {
	sum12 += arr12[i]
}
let result12 = sum12 / arr12.length
console.log(result12)

// 13. Создайте новый массив, содержащий только четные числа из исходного массива.
const arr13 = [1, 2, 3, 4, 5, 6, 8, 10]
const newArr13 = []
for (i = 0; i <= arr13.length; i++) {
	if (arr13[i] % 2 == 0) {
		newArr13.push(arr13[i])
	}
}
console.log(arr13)
console.log(newArr13)

// 14. Перемешайте элементы массива.
const arr14 = [100, 12, 30, 4, 15, 6, 8, 10, 7]
function shuffleArray(arr) {
	// мы указываем длину массива - 1, т. к. i отрабатывает по индексам, а индексы меньше длины массива на единицу
	// массив идёт в качестве параметра функции, т. е. arr14 и arr в условиях цикла одинаковы
	for (let i = arr14.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[arr[i], arr[j]] = [arr[j], arr[i]]
	}
	return arr
}
// в консоль вызываем функцию с параметром массива
console.log(shuffleArray(arr14))

// 15. Найдите наиболее часто встречающийся элемент в массиве.
let arr15 = [1, 2, 3, 5, 3, 2, 1, 2].sort((a, b) => a - b)
let h15 = arr15[0]
let maxCount = 0
let currentCount = 0
// эту переменную можно сделать с любым значением, т. к. потом значение поменяется:
let mostFrequent = h15

for (let i = 0; i < arr15.length; i++) {
	if (h15 === arr15[i]) {
		currentCount++
	} else {
		if (currentCount > maxCount) {
			maxCount = currentCount
			mostFrequent = h15
		}
		h15 = arr15[i]
		currentCount = 1
	}
}
// Проверяем последнюю группу элементов
if (currentCount > maxCount) {
	mostFrequent = h15
}
console.log(mostFrequent)

// рождённый ползать...
// ТАК И НЕ ПОНЯЛА
// let vArr = [1, 2, 2, 3, 4, 4, 33, 4, 5, 6, 6]
// const findMostFrequentElement = arr => {
// 	const frequencyMap = arr.reduce((acc, element) => {
// 		acc[element] = (acc[element] || 0) + 1
// 		return acc
// 	}, {})
// 	return Object.entries(frequencyMap).reduce(
// 		(mostFrequent, [element, count]) =>
// 			count > mostFrequent.count ? { element, count } : mostFrequent,
// 		{ element: null, count: 0 }
// 	).element
// }
// const mostFrequent = findMostFrequentElement(vArr)
// console.log(mostFrequent)