// ---------------- for, if, else ------------------

// 1. Напишите цикл, который выводит все числа от 1 до 10, кроме числа 3.
// 2. Создайте цикл, который выводит только четные числа от 1 до 20.
// 3. Напишите цикл, который выводит числа от 10 до 1, но пропускает число 5.
// 4. Создайте цикл, который выводит все числа от 1 до 100, кратные 7.
// 5. Напишите цикл, который выводит сумму всех чисел от 1 до 10, но останавливается, если сумма становится больше 15.
// 6. Создайте цикл, который выводит числа от 1 до 30. Если число кратно 3, выведите "Fizz", если кратно 5, выведите "Buzz", если кратно и 3, и 5, выведите "FizzBuzz", в противном случае выведите число.
// 7. Напишите цикл, который выводит все числа от 1 до 50, пропуская числа, делящиеся на 4.
// 8. Создайте цикл, который выводит первые 10 квадратов натуральных чисел.
// 9. Напишите цикл, который выводит числа от 1 до 20. Если число четное, выведите "Even", если нечетное, выведите "Odd".
// 10. Создайте цикл, который выводит сумму всех чисел от 1 до 100, кроме чисел, кратных 5.
// 11. Напишите цикл, который выводит факториал числа 6 (6! = 6 * 5 * 4 * 3 * 2 * 1).
// 12. Создайте цикл, который выводит все простые числа от 1 до 30.
// 13. Напишите цикл, который выводит все числа от 10 до 100. Если число делится на 10, выведите "Milestone!", в противном случае выведите само число.
// 14. Создайте цикл, который выводит числа от 1 до 50. Если число делится на 2 и на 3, выведите "Divisible by 2 and 3", если только на 2, выведите "Divisible by 2", если только на 3, выведите "Divisible by 3", в противном случае выведите число.
// 15. Напишите цикл, который выводит сумму всех чисел от 1 до 20, пропуская числа, кратные 3.
// 16. Создайте цикл, который выводит все числа от 1 до 50. Если число делится на 4 и на 6, выведите "Wow!", если только на 4, выведите "Cool", если только на 6, выведите "Great", в противном случае выведите число.
// 17. Напишите цикл, который выводит таблицу умножения на 4 (от 1 до 10), и заменяет числа, делящиеся на 3, на строку "Skip".
// 18. Создайте цикл, который выводит числа от 1 до 40. Если число делится на 10, выведите "Ten", если на 20, выведите "Twenty", если на 30, выведите "Thirty", в противном случае выведите число.
// 19. Напишите цикл, который выводит все числа от 1 до 100. Если число делится на 7 или на 9, выведите "Lucky", в противном случае выведите число.
// 20. Создайте цикл, который выводит сумму всех чисел от 1 до 50, кроме чисел, кратных 7 или 9.
// 21. Напишите цикл, который выводит числа от 1 до 25. Если число является квадратом целого числа, выведите его, в противном случае пропустите.
// 22. Создайте цикл, который выводит все числа от 1 до 30. Если число делится на 2 и на 5, выведите "TwoFive", если только на 2, выведите "Two", если только на 5, выведите "Five", в противном случае выведите число.
// 23. Напишите цикл, который выводит сумму всех чисел от 1 до 100, пропуская числа, делящиеся на 6 или на 8.
// 24. Создайте цикл, который выводит числа от 1 до 60. Если число делится на 7, выведите "Seven", если на 14, выведите "Fourteen", если на 21, выведите "Twenty-One", в противном случае выведите число.
// 25. Напишите цикл, который выводит все числа от 1 до 40. Если число делится на 3 и на 5, выведите "ThreeFive", если только на 3, выведите "Three", если только на 5, выведите "Five", в противном случае выведите число.
// 26. Создайте цикл, который выводит сумму всех чисел от 1 до 50, пропуская числа, кратные 4 и 6 одновременно.
// 27. Напишите цикл, который выводит числа от 1 до 20. Если число делится на 2, но не делится на 3, выведите "EvenNotThree", в противном случае выведите число.
// 28. Создайте цикл, который выводит все числа от 1 до 30. Если число делится на 8, выведите "Eight", если на 12, выведите "Twelve", если на 16, выведите "Sixteen", в противном случае выведите число.
// 29. Напишите цикл, который выводит сумму всех чисел от 1 до 100, пропуская числа, кратные 8 или 10.
// 30. Создайте цикл, который выводит все числа от 1 до 50. Если число делится на 3 и на 7, выведите "ThreeSeven", если только на 3, выведите "Three", если только на 7, выведите "Seven", в противном случае выведите число.


// 'init' | 'failed' | 'loading' | 'loaded'

const status = 'loaded' 


if(status === 'failed'){
    console.log('Error');
}else if (status === 'loading'){
    console.log('Загрузка');
}else if(status === 'loaded'){
    console.log('Succces');
}else{
    console.log('Начало');
}


status === 'failed' 
? console.log('Error') 
: status === 'loading' 
? console.log('Загрузка') 
: status === 'loaded' 
? console.log('Succces') 
: console.log('Начало');



const numsArr = [203, 504, 101, 399, 600, 100, 100, 600, 700, 100]


// for(let i = 0; i < numsArr.length; i++) {
//     console.log(numsArr[i]);
// }

const newArr = []


for(let item of numsArr){
    if(item === 100){
        console.log(item);
    }else if(item === 600){
        newArr.push(item)
    }else{
        console.log('Error');
        
    }
}


console.log(newArr);


