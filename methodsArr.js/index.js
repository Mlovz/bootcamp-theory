// 1
// const arr = [1,2,3,4,5];
// const myArr = arr.map((Element) => Element + 1)

// console.log(myArr);


// 2
// let arr = "hello world";
// const myarr = arr.split('')
// const myArr1 = myarr.map((i) => i + i)
// console.log(myArr1);



// 3
// const arr = [
//   {name: "John", age:25},
//   {name: 'Jane', age:30}
// ]
// const myarr = arr.map((ii) => ii.name)
// console.log(myarr);


// 4
// const arr = [1, 4, 9];
// const myarr = arr.map((i) => i * i)
// console.log(myarr);


// 5
// const arr = ['a','b','c'];
// const myArr = arr.map((i) => i.charCodeAt(0))

// console.log(myArr);


// 6
// const arr = [1,2,3,4,5];
// arr.forEach((i) => {
//   console.log(i);
// });


// 7
// let arr = ["hello","world"];
// let myarr = "";
// arr.forEach(function (item) {
//   myarr += item + ", ";

// });
// console.log(myarr.trim());


// 8
// const arr = [
// {name: 'John'},
// {name: 'Jane'}
// ]
// arr.forEach((i) => {
//   console.log(i.name);
// })


// 9
// const arr = [15,25,35];
// let sum = 0;
// arr.forEach(function (arr) {
//   sum += arr
// })
// console.log(sum);




// 10
// const arr =['apple', 'banana', 'cherry'];
// arr.forEach((i) => {
//   console.log(i.length);
// });



// 11
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.filter(item => item % 2 === 0);
// console.log(myarr);




// 12
// const arr = ['apple', 'banana', 'cherry'];
// const myArr = arr.filter(item => item.length > 5);
// console.log(myArr);



// 13
// const arr = [
// {name: 'John', age: 25},
// {name: 'Jane', age: 30}
// ]
// const myarr = arr.filter(i => i.age > 25)
// console.log(myarr);



// 14
// const arr = [1, -2, 3, -4, 5];
// const myarr = arr.filter(i => i > 0)
// console.log(myarr);




// 15
// const arr = ['a', 'b', 'a', 'c', 'a'];
// const myArr = arr.filter(function (value,index,self) {
//   return self.indexOf(value) === index;
// })
// console.log(myArr);



// 16
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.find(i => i > 3)
// console.log(myarr);



// 17
// const arr = ['apple', 'banana', 'cherry'];
// const myarr = arr.find(i => i.startsWith('b'))
// console.log(myarr);



// 18
// const arr = [
//   {name: 'John', age: 25},
//    {name: 'Jane', age: 30}
// ]
// const myarr = arr.find(i => i.name === 'Jane')

// console.log(myarr);


// 19
// const arr = [10, 20, 30, 40, 50];
// const myarr = arr.find(i => i % 4 === 0)
// console.log(myarr);



// 20
// const arr = ['a', 'b', 'c'];
// const myarr = arr.find(i => i.startsWith ('b'))
// console.log(myarr);


// 21
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.some(i => i > 4)
// console.log(myarr);




// 22
// const arr = ['apple', 'banana', 'cherry'];
// const myarr = arr.some(i => i.length > 6)
// console.log(myarr);



// 23
// const arr = [
//   {name: 'John', age: 25},
//   {name: 'Jane', age: 30}
// ];
// const myarr = arr.some(i => i.age < 20)
// console.log(myarr);



// 24
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.some(i => i < 0)
// console.log(myarr);


// 25
// const arr = ['a', 'b', 'c'];
// const myarr = arr.some(i => i === 'b')
// console.log(myarr);



// 26
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.includes(3)
// console.log(myarr);




// 27
// const arr = ['apple', 'banana', 'cherry'];
// const myarr = arr.includes('banana')
// console.log(myarr);



// 28
// const arr = [
//   {name: 'John'}, 
//   {name: 'Jane'}
// ]
// const myarr = arr.map(i => i.name);
// const myArr1 = myarr.includes('John')
// console.log(myArr1);




// 29
// const arr = [10, 20, 30, 40, 50];
// const myarr = arr.includes(25)
// console.log(myarr);



// 30
// const arr = ['a', 'b', 'c'];
// const myarr = arr.includes('c')
// console.log(myarr);



// 31
// const arr = [2, 4, 6, 8];
// const myarr = arr.every(i => i % 2 === 0)
// console.log(myarr);




// 32
// const arr =  ['apple', 'banana', 'cherry'];
// const myarr = arr.every((i) => i.includes('a'))
// console.log(myarr);




// 33
// const arr = [
// {name: 'John', age: 25},
//  {name: 'Jane', age: 30}
// ]
// const myarr = arr.every((i) => i.age > 20)
// console.log(myarr);




// // 34
// const arr = [1, 2, 3, 4, 5];
// const myarr = arr.every(i => i > 0)
// console.log(myarr);



// // 35
// const arr = ['a', 'b', 'c'];
// const myarr = arr.every(i => i.length === 1);
// console.log(myarr);





// // 36
// const arr = [3, 1, 4, 2, 5]
// const myarr = arr.sort()
// console.log(myarr);




// // 37
// const arr = ['banana', 'apple', 'cherry'];
// const myarr = arr.sort()
// console.log(myarr);





// // 38
// const arr = [
//   {name: 'John', age: 25},
//    {name: 'Jane', age: 30}
//   ]
// arr.sort(function (a,b) {
//   return b.age - a.age;
// })
// console.log(arr);



// // 39
// const arr = [10, 5, 20, 15];
// arr.sort(function (a,b) {
//   return b - a
// }) 

// console.log(arr);



// // 40
// const arr = ['apple', 'banana', 'cherry']
// arr.sort(function (a,b) {
//   return b.length - a.length
// })
// console.log(arr);




// 41
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2)
// console.log(arr);



// 42
// const arr = ['apple', 'banana', 'cherry'];
// arr.splice(1,1,'blueberry')
// console.log(arr);



// 43
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2,0,6)
// console.log(arr);



// 44
// const arr = ['a', 'b', 'c', 'd'];
// arr.splice(0,2,'x','y')
// console.log(arr);


// 45
// const arr = [10, 20, 30, 40, 50];
// arr.splice(3,2)
// console.log(arr);



// 46
// const arr =  [1, 2, 3, 4, 5];
// const myArr = arr.reduce((sum,i) => sum + i, 0)
// console.log(myArr);



// 47
// const arr =  ['a', 'b', 'c'];
// const myArr = arr.reduce((sum,i) => sum + i)
// console.log(myArr);



// 48
// const arr = [1, 2, 3, 4, 5]
// const myArr = arr.reduce((sum, i) => sum * i)
// console.log(myArr);


// 49
// const arr = [
// {value: 10},
//  {value: 20}]
// const myArr = arr.reduce((sum,i) => sum.value + i.value)
// console.log(myArr);


// 50
// const arr = [10, -10, 20, -20];
// const myArr = arr.reduce((sum,i) => sum + i)
// console.log(myArr);



// 51
// const arr =  [1, 2, 3, 4, 5];
// const myArr = arr.reduceRight((sum,i) => sum + i, 0)
// console.log(myArr);



// 52
// const arr =  ['a', 'b', 'c'];
// const myArr = arr.reduceRight((sum,i) => sum + i, )
// console.log(myArr);


// 53
// const arr = [1, 2, 3, 4, 5]
// const myArr = arr.reduceRight((sum, i) => sum * i)
// console.log(myArr);


// 54
// const arr = [
// {value: 10},
//  {value: 20}]
// const myArr = arr.reduceRight((sum,i) => sum.value + i.value)
// console.log(myArr);


// 55
// const arr = ['apple', 'banana', 'cherry'];
// const myArr = arr.reduceRight((sum,i) => sum + i)
// console.log(myArr);