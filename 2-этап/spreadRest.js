// https://doka.guide/js/spread/

// // Spread

// const user = {
//     username: 'user',
//     lastname: 'test',
//     age: 20,
//     isStudent: true,
// }

// // Spred Operator
// const newUser = {...user, h: 100, w: 200}

// // Rest Operator
// const {lastname, ...rest} = newUser

// console.log(user.username, user.lastname);
// console.log(username, lastname);



// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const newArr = [...arr1, ...arr2, 100, 500]

// console.log(newArr);

// const nums = [100, 200, 300]

// const newNums = [...nums, 400]

// console.log(newNums);

// function test({name, age}){
//     console.log(name, age);
// }

// test({name: 'user', age: 20})

// const user = {
//     username: 'user',
//     lastname: 'test',
//     age: 20,
//     isStudent: true,
// }

// function test({username, age, isStudent}){
//     console.log(username, age, isStudent);
// }   
    
// test({...user, w: 200, h: 100})

// const arr = ['test', 'user']

// const newArr = ['student', ...arr, 'admin'].reverse()

// console.log(newArr);
