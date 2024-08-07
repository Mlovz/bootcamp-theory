// задание 1
// const numArr = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0; i < numArr.length; i++){
//  if (numArr[i] !== 3) {
//   console.log(numArr[i]);
//  }
// }


// задание 2 
// const numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for(let i = 0; i < numArr.length; i++){
//  if (numArr[i] % 2 === 0) {
//   console.log(numArr[i]);
//  }
// }


// задание 3
// const numArr = [10,9,8,7,6,5,4,3,2,1]
// for(let i = 0; i < numArr.length; i++){
//  if (numArr[i] !== 5) {
//   console.log(numArr[i]);
//  }
// }


// задание 4
// for(let i = 0; i < 100; i++){
//  if (i % 7 === 0) {
//   console.log(i);
//  }
// }


// задание 5
// let sum = 0
// for(let i = 0; i < 10; i++){
//  if(sum === 15) break
//  sum = sum + i 
// }
// console.log(sum);


// задание 6
// for(let i = 0; i < 30; i++){
//  if (i % 3 === 0) {
//   console.log('Fizz');
//  }else if(i % 5 === 0){
//   console.log("Buzz");
//  }else if (i % 3 === 0 && i % 5 === 0) {
//  console.log("FizzBuzz");
//  }
// }


// задание 7

// for(let i = 0; i < 50; i++){
//  if (i % 4 === 0) {
//   continue
//  } console.log(i);
// }


// задание 8
// for( let i = 0; i < 10; i++){
//   if (i < 10 ) {
//     console.log(i**2);
//   }
// }


// задание 9
// for( let i = 0; i < 20; i++){
//   if (i % 2 === 0) {
//     console.log('even');
//   }else if (i % 2 !== 0) {
//     console.log('odd');
//   }
// }


// задание 10
// let sum = 0
// for(let i = 0; i < 100; i++){
//   if (i % 5 !== 0) {
//     sum = sum + i
//   }
// }
// console.log(sum);



// задание 11     !

// let factorial = 1;
// for (let i = 1; i <= 6; i++){
// factorial = factorial * i
// }
// console.log(factorial);


// задание 12
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// }

// function printPrimes(max) {
//   for (let i = 2; i <= max; i++) {
//     if (isPrime(i)) console.log(i);
//   }
// }

// printPrimes(30);



// задание 13
// for( let i = 10; i < 100; i++){
//   if (i % 10 === 0) {
//     console.log("Milestone!");
//   }else{
//     console.log(i);
//   }
// }


// задание 14
// for(let i = 0; i < 50; i++){
//   if (i % 2 === 0 && i % 3 === 0) {
//     console.log("Divisible by 2 and 3");
//   }else if(i % 2 === 0){
//     console.log("Divisible by 2");
//   }else if(i % 3 === 0){
//     console.log("Divisible by 3");
//   }else{
//     console.log(i);
//   }
// }




// задание 15
// let sum = 0
// for(let i = 0; i <= 20; i++){
// if (i % 3 !== 0) {
//   sum = sum + i
// }
// }
// console.log(sum);




// задание 16
// for(let i = 0; i <= 50; i++){
//   if (i % 4 === 0 && i % 6 === 0) {
//     console.log("Wow");
//   }else if (i % 6 === 0) {
//     console.log("Great");
//   }else if (i % 4 === 0){
//      console.log("Cool"); 
//   }else {
//     console.log(i);
//   }
   
// } 



// задание 17
// let sum = 0
// for(let i = 0; i <= 20; i++)
// if (i % 3 !== 0) {
//   sum = sum + i
// }console.log(sum);



// задание 18
// for(let i = 1; i <= 40; i++){
//   if (i % 30 === 0 && i % 10 === 0){
// console.log('thirty');    
//   }else if(i % 20 === 0 && i % 30 !== 0){
//     console.log('twenty');
//   }else if(i % 10 === 0 && i % 20 !== 0){
//     console.log('ten');
//   }else{
//     console.log(i);
//   }
// }


// задание 19
// for(let i = 0; i <= 100; i++){
//   if (i % 7 === 0 || i % 9 === 0) {
//     console.log("Lucky");
//   }else{
//     console.log(i);
//   }
// }



// задание 20
// let sum = 0
// for(let i = 0; i <= 50; i++){
//   if (i % 7 === 0 || i % 9 === 0) {
//     sum = sum + i
//   }
// }
// console.log(sum);


// задание 21


// задание 22
// for(let i = 1; i < 30; i++){
//   if (i % 2 === 0 && i % 5 === 0) {
//     console.log("TwoFive");
//   }else if (i % 2 === 0 && i % 5 !== 0) {
//     console.log('two');
//   }else if (i % 5 === 0 && i % 2 !== 0) {
//     console.log('five')
// }else{
//   console.log(i);}
// }


// задание 23
// for(let i = 1; i < 100; i++){
//   if (i % 6 !== 0 && i % 8 !== 0) {
//     console.log(i);
//   }
// }


// задание 24
// for(let i = 1; i < 60; i++){
//   if (i % 7 === 0 && i % 14 !== 0) {
//     console.log("Seven");
//   }else if (i % 14 === 0 && i % 21 !== 0) {
//     console.log('"Fourteen"');
//   }else if (i % 21 === 0 && i % 7 === 0 && i % 14 !== 0) {
//     console.log("Twenty-One")
// }else{
//   console.log(i);}
// }


// задание 25
// for(let i = 1; i < 40; i++){
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("ThreeFive");
//   }else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log('three');
//   }else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('five');
//   }else{ console.log(i);}
// }


// задание 26
// let sum = 0
// for(let i = 1; i < 50; i++)
// if (i % 4 !== 0 && i % 6 !== 0) {
//   sum = sum + i
// } console.log(sum);



// задание 27
// for(i = 0; i < 20; i++){
//   if (i % 2 === 0 && i % 3 !== 0) {
//     console.log("EvenNotThree");
//   }else{
//     console.log(i);
//   }
// }



//  задание28
//  for(i = 1; i <= 30; i++){
//   if (i % 8 === 0 && i % 16 !== 0) {
//     console.log("Eight");
//   } else if (i %12 === 0) {
//     console.log("Twelve");
//   } else if (i %16 === 0) {
//     console.log("Sixteen");
//   } else{
//     console.log(i);
//   }
//  }


//  задание 29
// let sum = 0
// for(let i = 1; i < 100; i++)
// if (i % 8 !== 0 || i % 10 !== 0) {
//   sum = sum + i
// } console.log(sum);


//  задание 30
// for(i = 1; i <= 50; i++){
//   if (i % 3 === 0 && i % 7 === 0) {
//     console.log("ThreeSeven");
//   }else if (i % 3 === 0 && i % 7 !== 0) {
//     console.log("Three");
//   }else if (i % 7 === 0 && i % 3 !== 0) {
//     console.log('seven');
//   }else {
//     console.log(i);
//   }
// }

