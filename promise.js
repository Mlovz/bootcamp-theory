// Промис — это объект, который может находиться в одном из трёх состояний:

// 1. Pending (ожидание): Операция еще не завершена.
// 2. Fulfilled (выполнен): Операция завершена успешно.
// 3. Rejected (отклонен): Операция завершена с ошибкой.


// -----------------------------------Пример 1: Успешное завершение (Fulfilled)

// const fetchDataSuccess = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({username: 10})
//         })
//     })
// } 

// fetchDataSuccess().then((res) => console.log(res))

// function fetchDataSuccess() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'Example' };
//             resolve(data); // Операция завершилась успешно
//         }, 2000);
//     });
// }

// fetchDataSuccess()
//     .then(data => {
//         console.log('Успех! Получены данные:', data);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });

// ---------------------------------- Пример 2: Ожидание (Pending)

// function fetchDataPending() {
//     return new Promise((resolve, reject) => {
//         console.log('Загрузка данных...');
//         setTimeout(() => {
//             const data = { id: 1, name: 'Example' };
//             resolve(data); // Через 2 секунды промис выполнится
//         }, 2000);
//     });
// }

// const promise = fetchDataPending();

// promise.then(data => {
//     console.log('Успех! Получены данные:', data);
// });

// --------------------------------------- Пример 3: Ошибка (Rejected)

// function fetchDataError() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = 'Ошибка загрузки данных';
//             reject(error); // Операция завершилась с ошибкой
//         }, 2000);
//     });
// }

// fetchDataError()
//     .then(data => {
//         console.log('Успех! Получены данные:', data);
//     })
//     .catch(error => {
//         console.error('Ошибка:', error);
//     });




// function bar () {
//     console.log(a);
//     if(true){
//         var a = 10
//         let b = 15
//         if(true){
//             console.log(a);
//         }
//     }
// }


// Callback-функции.

// function bar(callback) {
//     callback()
// }

// function foo() {
//     console.log(10);
// }


// bar(foo)



// Fetch API

const fetchData = async() => {
    try {
        console.log('Загрузка данных');

        const user = {
            body: "quia et",
            id: 1,
            title: "reprehenderit",
            userId: 1
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify(user)
        })

        // GET
        // POST
        // PATCH
        // PUT
        // DELETE
        
        const data = await response.json();
        console.log(data);
        console.log('Загрузка завершена');
    } catch (error) {
        console.log(error);
    }
}

fetchData()


// const fetchData = async() => {
//     await fetch('https://jsonplaceholder.typicode.com/postsaaaa')
//     .then((res) => console.log(res.json()))
//     .catch((error) => console.log(error))


//     console.log(data);
  
// }