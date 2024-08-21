// Задание 1: Простой промис
// Создайте промис, который через 3 секунды возвращает строку "Промис выполнен успешно!". Используйте then для вывода результата в консоль.

/* let promise =  () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()  => resolve('Промис выполнен успешно!'), 3000)
        
    })
}
promise().then((res) => console.log(res)) */



// Задание 2: Промис с ошибкой
// Создайте промис, который через 2 секунды отклоняется с ошибкой "Произошла ошибка". Обработайте ошибку с помощью catch и выведите сообщение в консоль.

/* let promise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => reject("Произошла ошибка"), 2000)
    })
}
promise()
    .catch((rej) => console.log(rej)) */

// Задание 3: Успех или ошибка
// Напишите функцию, которая возвращает промис. Промис должен завершаться успешно с вероятностью 50% и отклоняться с ошибкой в оставшихся 50%. Используйте then и catch для обработки результата.

// let promise = () => {
//     return new Promise((resolve, reject) => {
//         let rendomChance = Math.floor(Math.random() * 2)
//         rendomChance принимает значение либо 0, либо 1
//         if(rendomChance === 0) {
//             resolve("Успех")
//         } else {
//             reject("Ошибка")
//         }
//     })
// }
// promise()
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej))

// Задание 4: Цепочка промисов
// Создайте цепочку промисов, где каждый следующий промис зависит от результата предыдущего. Например, первый промис возвращает число, второй умножает его на 2, третий добавляет 10 и т.д. Выведите конечный результат в консоль.

// let promise = () => {
//     return new Promise((resolve, reject) => {
//         resolve(2)
//     })
// }
// promise()
//    .then((res) => res * 2)
//    .then((res1) => res1 * 5)
//    .then((res2) => console.log(res2 * 10))


// Задание 5: Задержка выполнения
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние выполненного через заданное количество миллисекунд. Используйте эту функцию для создания задержек между выполнением кода.

/* let delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Успех"), ms)
    })
}
delay(2000).then((res) => {
    console.log(res);
}) */

// Задание 6: Последовательное выполнение
// Используя функцию из задания 5, создайте цепочку промисов, которая выполняет три различных асинхронных задачи (например, выводит сообщения в консоль с задержкой). Все задачи должны выполняться последовательно.

/* let delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Успех"), ms)
    })
}
delay(2000).then((res) => {
    console.log(`Он выведитс через 2 секунды: ${res}`) 
    return delay(3000)
}).then((res) => {
    console.log(`Он выведитс через 3 секунды: ${res}`)
}) */


// Задание 7: Параллельное выполнение
// Создайте три промиса, каждый из которых выполняется через разное количество времени (например, 1 секунда, 2 секунды, 3 секунды). Используйте Promise.all для запуска всех промисов параллельно и выведите результат в консоль, когда все промисы будут выполнены.

/* let pr1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Успех"), 1000)
    })
}
let pr2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Успех"), 2000)
    })
}
let pr3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Успех"), 3000)
    })
}
Promise.all([pr1(), pr2(), pr3()]).then((val) => {
        console.log(val);
}) */


// Задание 8: Гонка промисов
// Используйте Promise.race, чтобы запустить несколько промисов, и выведите результат первого выполненного промиса в консоль.

/* let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Успех1"), 1000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Успех2"), 500)
})
Promise.race([promise1, promise2]).then((val) => {
    console.log(val);
}) */

// Задание 9: Промис с fetch
// Напишите функцию, которая использует fetch для загрузки данных с какого-либо публичного API. Функция должна возвращать промис. Используйте then для обработки успешного ответа и catch для обработки ошибок.

/* let fetchData = async () => {
    const res = 
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(async (res) =>await res.json() )
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
fetchData() */

// Задание 10: Обработка ошибок в цепочке
// Создайте цепочку промисов, в которой одна из операций намеренно вызывает ошибку. Убедитесь, что ошибка правильно перехватывается и обрабатывается, а оставшиеся промисы не выполняются.

/* new Promise((resolve, reject) => {
    resolve(5)
}).then((res) => {
    console.log(res * 2);
       throw new Error("error")
   })
   .then((res) => console.log(res))
   .catch((rej) => console.log(rej)) */