1.
const person = {
  name:'Suleim',
  age:21
}
2.
console.log(person.name);
3.
person.age = 30;
4.
person.city = 'New York';
console.log(person);
5.
delete person.city;
console.log(person);
6.
console.log('name' in person);
7.
const obj1 = {name: 'John'}
const obj2 = {age: 1000000}
const mergedObj = {...obj1,...obj2}
console.log(mergedObj);
8.
const persontwo = {...person}
console.log(persontwo);
9.
for(let item in person){
  console.log(item);
} 
9.
for (let i = 0; i < person.length; i++) {
console.log(person[i]);  
}
10.
const people = [
  {
    name: 'John',
    age: 23
  },
  {
    name:'Ivan',
    age:13
  }
]
11.
const newItem = people.find((a) => a.name === 'John')
console.log(newItem);
12.
