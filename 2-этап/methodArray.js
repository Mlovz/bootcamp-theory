// https://doka.guide/js/array-length/
// https://doka.guide/js/array-map/
// https://doka.guide/js/array-filter/
// https://doka.guide/js/array-find/
// https://doka.guide/js/array-foreach/
// https://doka.guide/js/array-reduce/
// https://doka.guide/js/array-reduce-right/
// https://doka.guide/js/array-every/
// https://doka.guide/js/array-some/
// https://doka.guide/js/array-reverse/
// https://doka.guide/js/includes/
// https://doka.guide/js/array-slice/
// https://doka.guide/js/array-sort/
// https://doka.guide/js/array-splice/
// https://doka.guide/js/array-join/

// const nums = [100, 200, 221, 300, 323, 600, 601]

// () => {}
// function (){}

// Filter
// const newNums = nums.filter((trampapa) => {
//     return trampapa % 2 === 0
//     // if(trampapa % 2 === 0) return trampapa
// })

// const newNums = nums.filter((trampapa) => trampapa % 2 === 0)

// const newNums = nums.filter(function(trampapa){
//     if(trampapa % 2 === 0) return trampapa
// })

// console.log(newNums);

// Map
// const nums = [100, 200, 221, 300, 323, 600, 601]

// const newArr = nums.map((item) => {
//     if(item % 2 === 0) {
//         return item = 'четное'
//     }
//     return item = 'нечетное'
// })

// console.log(newArr);

// const users = [
//     {
//         username: 'user',
//         lastname: 'test',
//         age: 20,
//         isStudent: true,
//     },
//     {
//         username: 'user1',
//         lastname: 'test1',
//         age: 25,
//         isStudent: false,
//     },
//     {
//         username: 'user2',
//         lastname: 'test3',
//         age: 30,
//         isStudent: true,
//     }
// ] 

// const newUsers = users.map((item) => {
//     if(item.isStudent === true){
//         return {...item, isStudent: false}
//     }
//     return item
// })


// console.log(newUsers);

// const users = [
//     {
//         username: 'user',
//         lastname: 'test',
//         age: 20,
//         isStudent: true,
//     },
//     {
//         username: 'user1',
//         lastname: 'test1',
//         age: 25,
//         isStudent: false,
//     },
//     {
//         username: 'user2',
//         lastname: 'test3',
//         age: 30,
//         isStudent: true,
//     }
// ] 

// const newUser = users.find((item) => {
//     if(item.age === 25){
//         return item
//     }
// })
// console.log(newUser);

// ---------------------- Методы массива изучить!!!!!!!!!!!!
// forEach
// include
// every
// some
// reduce
// sort

// ----------------------- Контекст this
// bind
// call
// apply