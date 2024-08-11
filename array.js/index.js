// 1
// const nums = [32, 10, 1, 0, 43, 17, 25, 3]
// let sum = 0

// for(let i = 0; i < nums.length; i++) {
//     // sum += nums[i]
//     sum = sum + nums[i]
// }
// console.log(sum);



// 2
// const arr = [10,10,32,4,5]

// let max = 0

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }   
// }

// console.log(max);



// 3
// const minNum = [5, -1, 40, 355, 17, 3];
// let min = minNum[0]

// for (let i = 0; i < minNum.length; i++) {
//   if(minNum[i] < min){
//     min = minNum[i]
//   }
// }
// console.log(min);




// 4
// const myArray = [1,2,3,4,5]
// console.log(myArray.includes(2));



// 5
// const myArray = [1,2,3,4,2,5];

// const hasObj = {}
// const myArray2 = []


// for(let item of myArray){
//     if(!hasObj[item]){
//       hasObj[item] = item
//       myArray2.push(item)
//     }
// }

// console.log(myArray2);



// 6
// const masive = [1,2,3,3,4,5]
// const masive1 = [6,6,7,8,9]

// const result = [...new Set(masive), ...new Set(masive1)]

// console.log(result);


// 7
// const myArray = [1,2,3]
// myArray.reverse()
// console.log(myArray);

// 8
// const myArray = [1,5,3,6]
// myArray.sort((a,b) => a - b)
// console.log(myArray);



// 9
// const myArray = ['a','b','c','d'];
// console.log(myArray.indexOf('c'));


// 10
// const array = [1,2,3,4,5,6,7,8,9];
// const array_size = 3
// const myArray = []
// for(let i = 0; i < array.length; i += array_size){
// myArray.push(array.slice(i, i + array_size));
// }
// console.log(myArray);



// 11        
// const arr = [1,-4,6,-5,3];
// for(let i = 0; i <= arr.length; i++){
//   if (arr[i] < 0) {
//     arr[i] = 0
//   }
// }

// console.log(arr);



// 12
// const arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//   sum += arr[i]
// }

// sum2 = Math.floor(sum / arr.length)
// console.log(sum2);



// 13
// const array = [1,2,3,4,5,6,7,8,9];
// const myArray = []
// for(let i = 0; i <= array.length; i ++){
// if (array[i] % 2 === 0) {
//   myArray.push(array[i]);
// }

// }
// console.log(myArray);



// 14
// const array = [1,2,3,4,5,6,7,8,9,10];
// array.sort( function () {
//  return Math.random() - 0.5
// })

// console.log(array);


// 15
        // function mostFrequent(data) {
        //     let result;
        //     let max = 0;
        //     let count;
        //     for (let i = 0; i < data.length; i++) {
        //         count = 0;
        //         for (let k = 0; k < data.length; k++) { // с нулевого индекса
        //             if (data[i] === data[k])
        //                 ++count;
        //         }
        //         if (count > max) { // Вынесем из внутреннего цикла
        //             max = count;
        //             result = data[i];
        //         }
        //     }
        //     return result;
        // }
 
        // console.log(mostFrequent([1,2,3,4,1,2,4,1]));