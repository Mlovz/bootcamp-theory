

// Типы данных

// Number
// String
// Boolean
// Undefined
// Null
// BigInt
// Object
// Symbol

// let, conts, var

// Приведение типом, Унарный плюс, Number, String, Boolean
// let a = 'true'

// console.log(Boolean(a))

// Префиксная форма и постфикс

// let count = 0

// function bar() {
//   return ++count
// }

// console.log(bar())

// typeof

// let user = 10
// console.log(typeof user)

// || && ??

// let a = 10
// let b = a ?? '20'

// if(a === 10 && b === 30) {
//   console.log('ok')
// }else{
//   console.log('notok')
// }


// Object and Array
// const a = [1,2]
// const b = [...a]
// b.push(20)
// console.log(a)

// const user = {}
// const newUser = {...user}
// newUser.age = 10
// console.log(user)


// ------------------------------------
// false, null, undefined, 0, ''

// let a = undefined

// if(a) {
//   console.log('ok')
// }else{
//   console.log('no')
// }

// Methods
// Find, map, filter, reduce

const nums = [100, 200, 300, 2212, 300, 2311]
const numsaa = [100, 200, 300, 2212, 300, 2311, 12123]

// const filterNums = nums.filter((num) => num === 300)
// const reduce = nums.reduce((acc, item) => {
//   acc.push(item + 10)
//   return acc
// }, [])
// const reduce = nums.reduce((acc, item) => {
//   acc = acc + item
//   return acc
// }, 0)

// console.log(reduce)

// const users = [
//   {
//     age: 10
//   },
//   {
//     age: 20
//   }
// ]

// const newItem = users.find((item) => item.age === 20)
// console.log(newItem)

// forEach

// nums.forEach((item) => {
//   console.log(item)
// })

// for(let a of nums){
//   console.log(a)
// }

// every, some, includes

