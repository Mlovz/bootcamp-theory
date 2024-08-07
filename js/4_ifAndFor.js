// ---------------- for, if, else ------------------

// 1. Напишите цикл, который выводит все числа от 1 до 10, кроме числа 3.
for (let i1 = 1; i1 <= 10; i1++) {
	if (i1 == 3) continue
	console.log(i1)
}

// 2. Создайте цикл, который выводит только четные числа от 1 до 20.
for (i2 = 1; i2 <= 20; i2++) {
	if (i2 % 2 != 0) {
		continue
	}
	console.log(i2)
}

// 3. Напишите цикл, который выводит числа от 10 до 1, но пропускает число 5.
for (i3 = 10; i3 >= 1; i3--) {
	if (i3 == 5) continue
	console.log(i3)
}

// 4. Создайте цикл, который выводит все числа от 1 до 100, кратные 7.
for (i4 = 1; i4 <= 100; i4++) {
	if (i4 % 7 == 0) console.log(i4)
}

// 5. Напишите цикл, который выводит сумму всех чисел от 1 до 10, но останавливается, если сумма становится больше 15.
for (i5 = 1; i5 <= 10; i5++) {
	if (i5 > 5) break
	console.log(i5)
}

// 6. Создайте цикл, который выводит числа от 1 до 30. Если число кратно 3, выведите "Fizz", если кратно 5, выведите "Buzz", если кратно и 3, и 5, выведите "FizzBuzz", в противном случае выведите число.
for (i6 = 1; i6 <= 30; i6++) {
	if (i6 % 3 == 0 && i6 % 5 == 0) console.log('FizzBuzz' + ': ' + i6)
	else if (i6 % 3 == 0) console.log('Fizz' + ': ' + i6)
	else if (i6 % 5 == 0) console.log('Buzz' + ': ' + i6)
	else console.log(i6)
}

// 7. Напишите цикл, который выводит все числа от 1 до 50, пропуская числа, делящиеся на 4.
for (i7 = 1; i7 <= 50; i7++) {
	if (i7 % 4 == 0) continue
	console.log(i7)
}

// 8. Создайте цикл, который выводит первые 10 квадратов натуральных чисел.
for (i8 = 1; i8 <= 10; i8++) {
	console.log(i8 * i8)
}

// 9. Напишите цикл, который выводит числа от 1 до 20. Если число четное, выведите "Even", если нечетное, выведите "Odd".
for (i9 = 1; i9 <= 20; i9++) {
	if (i9 % 2 == 0) console.log('Even: ' + i9)
	else console.log('Odd: ' + i9)
}

// 10. Создайте цикл, который выводит сумму всех чисел от 1 до 100, кроме чисел, кратных 5.
sum10 = 0
for (i10 = 1; i10 <= 100; i10++) {
	if (i10 % 5 == 0) continue
	sum10 += i10
}
console.log(sum10)

// 11. Напишите цикл, который выводит факториал числа 6 (6! = 6 * 5 * 4 * 3 * 2 * 1).
let n11 = 6
let f11 = 1
while (n11 >= 1) {
	f11 = f11 * n11
	n11 = n11 - 1
}
console.log(f11)

// ИЛИ

// итеративный метод:
// функция с аргументом n возвращает факториал этого числа (return)
function factorial(nn) {
	// функция начинает с result равным 1
	// если result был бы равен другому числу, то результат умножился бы на это другое число
	let result = 1
	// затем умножает result на каждое число от 1 (или 2 - в умножении без разницы) до nn
	for (let ii = 1; ii <= nn; ii++) {
		result *= ii
	}
	return result
}
console.log(factorial(6))

// ИЛИ

factoriall = 1
for (iii = 1; iii <= 6; iii++) {
	factoriall *= iii
}
console.log(factoriall)

// 12. Создайте цикл, который выводит все простые числа от 1 до 30.
for (let i = 1; i <= 30; i++) {
	for (let j = 2; j <= i; j++) {
		if (i % j === 0 && j < i) {
			break
		} else if (j === i) {
			console.log(i)
		}
	}
}

// 13. Напишите цикл, который выводит все числа от 10 до 100. Если число делится на 10, выведите "Milestone!", в противном случае выведите само число.
for (i13 = 10; i13 <= 100; i13++) {
	if (i13 % 10 == 0) console.log('Milestone!')
	else console.log(i13)
}

// 14. Создайте цикл, который выводит числа от 1 до 50. Если число делится на 2 и на 3, выведите "Divisible by 2 and 3", если только на 2, выведите "Divisible by 2", если только на 3, выведите "Divisible by 3", в противном случае выведите число.
for (i14 = 1; i14 <= 50; i14++) {
	if (i14 % 2 == 0 && i14 % 3 == 0)
		console.log('Divisible by 2 and 3' + ': ' + i14)
	else if (i14 % 2 == 0) console.log('Divisible by 2' + ': ' + i14)
	else if (i14 % 3 == 0) console.log('Divisible by 3' + ': ' + i14)
	else console.log(i14)
}

// 15. Напишите цикл, который выводит сумму всех чисел от 1 до 20, пропуская числа, кратные 3.
sum15 = 0
for (i15 = 1; i15 <= 20; i15++) {
	if (i15 % 3 == 0) continue
	sum15 += i15
}
console.log(sum15)

// 16. Создайте цикл, который выводит все числа от 1 до 50. Если число делится на 4 и на 6, выведите "Wow!", если только на 4, выведите "Cool", если только на 6, выведите "Great", в противном случае выведите число.
for (i16 = 1; i16 <= 50; i16++) {
	if (i16 % 4 == 0 && i16 % 6 == 0) console.log('Wow!')
	else if (i16 % 4 == 0) console.log('Cool')
	else if (i16 % 6 == 0) console.log('Great')
	else console.log(i16)
}

// 17. Напишите цикл, который выводит таблицу умножения на 4 (от 1 до 10), и заменяет числа, делящиеся на 3, на строку "Skip".
for (i17 = 1; i17 <= 10; i17++) {
 let result17 = i17 * 4
 if (result17 % 3 == 0) console.log('Skip')
 else console.log(4 * ${i17} = ${result17})
}

// 18. Создайте цикл, который выводит числа от 1 до 40. Если число делится на 10, выведите "Ten", если на 20, выведите "Twenty", если на 30, выведите "Thirty", в противном случае выведите число.
for (let i18 = 1; i18 <= 40; i18++) {
 if (i18 % 30 == 0) console.log('Thirty')
 else if (i18 % 20 == 0) console.log('Twenty')
 else if (i18 % 10 == 0) console.log('Ten')
 else console.log(i18)
}

// 19. Напишите цикл, который выводит все числа от 1 до 100. Если число делится на 7 или на 9, выведите "Lucky", в противном случае выведите число.
for (i19 = 1; i19 <= 100; i19++) {
 if (i19 % 7 == 0 || i19 % 9 == 0) console.log('Lucky')
 else console.log(i19)
}

// 20. Создайте цикл, который выводит сумму всех чисел от 1 до 50, кроме чисел, кратных 7 или 9.
sum20 = 0
for (i20 = 1; i20 <= 50; i20++) {
 if (i20 % 7 == 0 || i20 % 9 == 0) continue
 sum20 += i20
}
console.log(sum20)

// 21. Напишите цикл, который выводит числа от 1 до 25. Если число является квадратом целого числа, выведите его, в противном случае пропустите.
for (i21 = 1; i21 <= 25; i21++) {
 if (Math.sqrt(i21) % 1 == 0) {
  console.log(i21)
 } else console.log(i21 + ': не квадрат целого числа')
}

// 22. Создайте цикл, который выводит все числа от 1 до 30. Если число делится на 2 и на 5, выведите "TwoFive", если только на 2, выведите "Two", если только на 5, выведите "Five", в противном случае выведите число.
for (i22 = 1; i22 <= 30; i22++) {
 if (i22 % 2 == 0 && i22 % 5 == 0) console.log('TwoFive')
 else if (i22 % 2 == 0) console.log('Two')
 else if (i22 % 5 == 0) console.log('Five')
 else console.log(i22)
}

// 23. Напишите цикл, который выводит сумму всех чисел от 1 до 100, пропуская числа, делящиеся на 6 или на 8.
sum23 = 0
for (i23 = 1; i23 <= 100; i23++) {
 if (i23 % 6 == 0 || i23 % 8 == 0) continue
 sum23 += i23
}
console.log(sum23)

// 24. Создайте цикл, который выводит числа от 1 до 60. Если число делится на 7, выведите "Seven", если на 14, выведите "Fourteen", если на 21, выведите "Twenty-One", в противном случае выведите число.
for (i24 = 1; i24 <= 60; i24++) {
 if (i24 % 21 == 0) console.log('Twenty-One')
 else if (i24 % 14 == 0) console.log('Fourteen')
 else if (i24 % 7 == 0) console.log('Seven')
 else console.log(i24)
}

// 25. Напишите цикл, который выводит все числа от 1 до 40. Если число делится на 3 и на 5, выведите "ThreeFive", если только на 3, выведите "Three", если только на 5, выведите "Five", в противном случае выведите число.
for (i25 = 1; i25 <= 40; i25++) {
 if (i25 % 15 == 0) console.log('ThreeFive')
 else if (i25 % 3 == 0) console.log('Three')
 else if (i25 % 5 == 0) console.log('Five')
 else console.log(i25)
}

// 26. Создайте цикл, который выводит сумму всех чисел от 1 до 50, пропуская числа, кратные 4 и 6 одновременно.
sum26 = 0
for (i26 = 1; i26 <= 50; i26++) {
 if (i26 % 12 == 0) continue
 sum26 += i26
}
console.log(sum26)

// 27. Напишите цикл, который выводит числа от 1 до 20. Если число делится на 2, но не делится на 3, выведите "EvenNotThree", в противном случае выведите число.
for (i27 = 1; i27 <= 20; i27++) {
 if (i27 % 2 == 0 && i27 % 3 != 0) console.log('EwenNotThree')
 else console.log(i27)
}

// 28. Создайте цикл, который выводит все числа от 1 до 30. Если число делится на 8, выведите "Eight", если на 12, выведите "Twelve", если на 16, выведите "Sixteen", в противном случае выведите число.
for (i28 = 1; i28 <= 30; i28++) {
 if (i28 % 16 == 0) console.log('Sixteen')
 else if (i28 % 12 == 0) console.log('Twelve')
 else if (i28 % 8 == 0) console.log('Eight')
 else console.log(i28)
}

// 29. Напишите цикл, который выводит сумму всех чисел от 1 до 100, пропуская числа, кратные 8 или 10.
sum29 = 0
for (i29 = 1; i29 <= 100; i29++) {
 if (i29 % 8 == 0 || i29 % 10 == 0) continue
 sum29 += i29
}
console.log(sum29)

// 30. Создайте цикл, который выводит все числа от 1 до 50. Если число делится на 3 и на 7, выведите "ThreeSeven", если только на 3, выведите "Three", если только на 7, выведите "Seven", в противном случае выведите число.
for (i30 = 1; i30 <= 50; i30++) {
 if (i30 % 21 == 0) console.log('ThreeSeven')
 else if (i30 % 3 == 0) console.log('Three')
 else if (i30 % 7 == 0) console.log('Seven')
 else console.log(i30)
}

// // 'init' | 'failed' | 'loading' | 'loaded'

// const status = 'loaded' 


// if(status === 'failed'){
//     console.log('Error');
// }else if (status === 'loading'){
//     console.log('Загрузка');
// }else if(status === 'loaded'){
//     console.log('Succces');
// }else{
//     console.log('Начало');
// }


// status === 'failed' 
// ? console.log('Error') 
// : status === 'loading' 
// ? console.log('Загрузка') 
// : status === 'loaded' 
// ? console.log('Succces') 
// : console.log('Начало');



// const numsArr = [203, 504, 101, 399, 3, 100, 3, 600, 700, 100]


// // for(let i = 0; i < numsArr.length; i++) {
// //     console.log(numsArr[i]);
// // }

// // const newArr = []


// // for(let item of numsArr){
// //     if(item !== 3){
// //         console.log(item);
// //     }
// // }


// // console.log(newArr);


// const nums = [1,2,3,4,5,6,7,8,9,10]

// // for(let i = 0; i < nums.length; i++){
// //     if(nums[i] !== 3){
// //         console.log(nums[i]);
// //     }
// // }
  


// // for(let i = 0; i < 100; i++){
// //     if(i % 7 === 0){
// //         console.log(nums[i]);
// //     }
// // }


// let sum = 0

// for(let i = 0; i < 10; i++){
//     if(sum === 15) break
//     sum = sum + i
// }

// console.log(sum);

