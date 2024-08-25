// Задание 1: Простой промис
// Создайте промис, который через 3 секунды возвращает строку "Промис выполнен успешно!". Используйте then для вывода результата в консоль.
const promiseTest1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Промис выполнен успешно!');
      }, 3000);
    });
    promiseTest1.then((rty) =>{
        console.log(rty);
    })



// Задание 2: Промис с ошибкой
// Создайте промис, который через 2 секунды отклоняется с ошибкой "Произошла ошибка". Обработайте ошибку с помощью catch и выведите сообщение в консоль.
const promiseTest2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        reject('Произошла ошибка');
      }, 3000);
    });
    promiseTest2.catch((psi) =>{
        console.log(psi);
    })

// Задание 3: Успех или ошибка
// Напишите функцию, которая возвращает промис. Промис должен завершаться успешно с вероятностью 50% и отклоняться с ошибкой в оставшихся 50%. 
// Используйте then и catch для обработки результата.
function returnPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random() * 1
        console.log(randomNum);
        
        if(randomNum > 0.5){
            resolve("Выполнено");
        }else{
            reject("Произошла ошибка");
        }
    })
    
}

returnPromise().then(() => console.log("APTI")).catch ( () => console.log ("ERROR"))



// Задание 4: Цепочка промисов
// Создайте цепочку промисов, где каждый следующий промис зависит от результата предыдущего. Например, первый промис возвращает число, второй умножает его на 2, третий добавляет 10 и т.д. Выведите конечный результат в консоль.

function firstPromise() {
    return new Promise((resolve) => {
        resolve(10);
    });
}

function secondPromise(value) {
    return new Promise((resolve) => {
          resolve(value * 2);
    });
}

function thirdPromise(value) {
    return new Promise((resolve) => {
        resolve(value + 10);
    });
}

firstPromise()
    .then(secondPromise) 
    .then(thirdPromise) 
    .then(result => {
        console.log('Конечный результат:', result); 
    })
    .catch(error => {
        console.error('Произошла ошибка:', error); 
    });
    // или так 
    firstPromise().then(() => console.log()).catch ( () => console.log ())
// Задание 5: Задержка выполнения
// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние выполненного через заданное количество миллисекунд. Используйте эту функцию для создания задержек между выполнением кода.

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function executeWithDelay() {
    console.log('Запуск задержки...');

    await delay(1000); 
    console.log('Прошла 1 секунда.');

    await delay(3000); 
    console.log('Прошло ещё 3 секунды.');

    await delay(500); 
    console.log('Прошло 0.5 секунды.');

    console.log('Задержка завершена, все выполнено успешно.');
}
executeWithDelay();
// Задание 6: Последовательное выполнение
// Используя функцию из задания 5, создайте цепочку промисов, которая выполняет три различных асинхронных задачи (например, выводит сообщения в консоль с задержкой). Все задачи должны выполняться последовательно.
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
async function executeTasksInSequence() {
    console.log('Начинаем выполнение задач...');
    await delay(1000); 
    console.log('Задача 1 выполнена через 1 секунду.');
    await delay(1500); 
    console.log('Задача 2 выполнена через 1.5 секунды.');
    await delay(2000); 
    console.log('Задача 3 выполнена через 2 секунды.');
    console.log('Все задачи выполнены.');
}
executeTasksInSequence();
// Задание 7: Параллельное выполнение
// Создайте три промиса, каждый из которых выполняется через разное количество времени (например, 1 секунда, 2 секунды, 3 секунды). Используйте Promise.all для запуска всех промисов параллельно и выведите результат в консоль, когда все промисы будут выполнены.
function delay(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => resolve(message), ms);
    });
}
const promise1 = delay(1000, 'Промис 1 выполнен через 1 секунду');
const promise2 = delay(2000, 'Промис 2 выполнен через 2 секунды'); 
const promise3 = delay(3000, 'Промис 3 выполнен через 3 секунды'); 
Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('Все промисы выполнены!'); 
        console.log(results); 
    })
    .catch(error => {
        console.error('Произошла ошибка:', error); 
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