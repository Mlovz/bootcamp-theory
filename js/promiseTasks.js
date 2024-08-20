// Задание 1: Простой промис
// Создайте промис, который через 3 секунды возвращает строку "Промис выполнен успешно!". Используйте then для вывода результата в консоль.


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Промис выполнен успешно!");
    }, 3000);
});

promise1.then(result => {
    console.log(result);
});

// Задание 2: Промис с ошибкой
// Создайте промис, который через 2 секунды отклоняется с ошибкой "Произошла ошибка". Обработайте ошибку с помощью catch и выведите сообщение в консоль.
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Произошла ошибка");
    }, 2000);
});

promise2.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

// Задание 3: Успех или ошибка
// Напишите функцию, которая возвращает промис. Промис должен завершаться успешно с вероятностью 50% и отклоняться с ошибкой в оставшихся 50%. Используйте then и catch для обработки результата.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve("Успешное выполнение");
            } else {
                reject("Произошла ошибка");
            }
        }, 1000);
    });
}

randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// Задание 4: Цепочка промисов
// Создайте цепочку промисов, где каждый следующий промис зависит от результата предыдущего. Например, первый промис возвращает число, второй умножает его на 2, третий добавляет 10 и т.д. Выведите конечный результат в консоль.
new Promise((resolve, reject) => {
    resolve(5);
}).then(result => {
    console.log("Первое значение:", result);
    return result * 2;
}).then(result => {
    console.log("Умножили на 2:", result);
    return result + 10;
}).then(result => {
    console.log("Добавили 10:", result);
    return result / 3;
}).then(result => {
    console.log("Разделили на 3:", result);
});

// Задание 5: Задержка выполнения
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние выполненного через заданное количество миллисекунд. Используйте эту функцию для создания задержек между выполнением кода.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => console.log("Прошло 2 секунды"));

// Задание 6: Последовательное выполнение
// Используя функцию из задания 5, создайте цепочку промисов, которая выполняет три различных асинхронных задачи (например, выводит сообщения в консоль с задержкой). Все задачи должны выполняться последовательно.
delay(1000).then(() => {
    console.log("Прошло 1 секунда");
    return delay(2000);
}).then(() => {
    console.log("Прошло 2 секунды");
    return delay(3000);
}).then(() => {
    console.log("Прошло 3 секунды");
});

// Задание 7: Параллельное выполнение
// Создайте три промиса, каждый из которых выполняется через разное количество времени (например, 1 секунда, 2 секунды, 3 секунды). Используйте Promise.all для запуска всех промисов параллельно и выведите результат в консоль, когда все промисы будут выполнены.
const promiseA = delay(1000).then(() => "Промис A выполнен через 1 секунду");
const promiseB = delay(2000).then(() => "Промис B выполнен через 2 секунды");
const promiseC = delay(3000).then(() => "Промис C выполнен через 3 секунды");

Promise.all([promiseA, promiseB, promiseC]).then(results => {
    console.log(results); // ["Промис A выполнен через 1 секунду", "Промис B выполнен через 2 секунды", "Промис C выполнен через 3 секунды"]
});

// Задание 8: Гонка промисов
// Используйте Promise.race, чтобы запустить несколько промисов, и выведите результат первого выполненного промиса в консоль.
Promise.race([promiseA, promiseB, promiseC]).then(result => {
    console.log("Первым выполнился промис:", result);
});


// Задание 9: Промис с fetch
// Напишите функцию, которая использует fetch для загрузки данных с какого-либо публичного API. Функция должна возвращать промис. Используйте then для обработки успешного ответа и catch для обработки ошибок.
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        });
}

fetchData()
    .then(data => {
        console.log('Данные с сервера:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

// Задание 10: Обработка ошибок в цепочке
// Создайте цепочку промисов, в которой одна из операций намеренно вызывает ошибку. Убедитесь, что ошибка правильно перехватывается и обрабатывается, а оставшиеся промисы не выполняются.
new Promise((resolve, reject) => {
    resolve(5);
}).then(result => {
    console.log("Первое значение:", result);
    return result * 2;
}).then(result => {
    console.log("Умножили на 2:", result);
    throw new Error("Намеренная ошибка");
}).then(result => {
    console.log("Это не выполнится:", result);
}).catch(error => {
    console.error("Ошибка перехвачена:", error.message);
});
