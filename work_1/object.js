
// Создайте объект person с свойствами name и age.

{const person = {
name :'Musa',
age : 42
}}

// Выведите значение свойства name объекта person.
{const person = {
name :'Musa',
age : 42
}

console.log(person.name);}

// Измените значение свойства age объекта person на 30.
{const person = {
name :'Musa',
age : 42
}
person.age = 30;
console.log(person.age);}

// Добавьте свойство city с значением "New York" к объекту person.
{const person = {
name :'Musa',
age : 42
}
person.city = 'New York'
console.log(person);
}

// Удалите свойство city из объекта person.
{const person = {
name :'Musa',
age : 42
}
person.city = 'New York'
console.log(person);

delete person.city
console.log(person);
}

// Проверьте, существует ли свойство name в объекте person.

{const person = {
name :'Musa',
age : 42
}

console.log( 'name' in person);}

// Объедините два объекта obj1 и obj2 в один.

{const obj1 = {
    name: 'Musa',
}
const obj2 = {
    age: 43
}

const infObj = {...obj1, ...obj2}
console.log(infObj);}

// Создайте копию объекта person.
{const person = {
name :'Musa',
age : 42
}
const person1 = {...person}

console.log(person1);}

// Переберите все свойства объекта person и выведите их значения.

{const person = {
name :'Musa',
age : 42
}
for (const key in person) {
console.log(person[key]);
}}

// Создайте массив объектов people, каждый объект должен содержать свойства name и age.

{const people = [
    {
    name: '',
    age: ''
    },
    {
    name: '',
    age: ''
    }
]}

// Найдите объект с именем "John" в массиве people.
{const people = [
    {
    name: 'John',
    age: ''
    },
    {
    name: 'Abas',
    age: ''
    },
    {
    name: 'Isa',
    age: ''
    }
]
const newItem = people.find((a) => a.name==='John')
console.log(newItem);}

// Создайте функцию-конструктор Person для создания объектов с именем и возрастом.

// Создайте новый объект, используя функцию-конструктор Person.

// Добавьте метод greet в объект person, который выводит приветствие.

{const person = {
name :'Musa',
age : 42
}
person.greet = 'hi'}

// Вызовите метод greet объекта person.

{const person = {
name :'Musa',
age : 42
}
person.greet = 'hi'
console.log(person.greet);}

// Добавьте метод setAge в объект person, который принимает параметр и устанавливает новое значение для свойства age.

{const person = {
name :'Musa',
age : 42
}
person.setAge = function(params){
    person.age = params
}

person.setAge(13);
console.log(person.age);}

// Добавьте метод getAge в объект person, который возвращает значение свойства age.

{const person = {
    name: 'Musa',
    age: 499,
    }
person.getAge = function(){
return this.age
}

console.log(person.getAge());
}
// Создайте объект company с вложенным объектом address, содержащим свойства city и street.
{const company = {
    address:{
        city: '',
        street: ''
    }
}
}

// Выведите значение свойства city вложенного объекта address в объекте company.

{const company = {
    address:{
        city: 'Magas',
        street: ''
    }
}
console.log(company.address.city);}

//39 Добавьте метод getFullAddress в объект company, который возвращает полный адрес в виде строки.

// {const company = {
//     address:{
//         city: 'Magas',
//         street: 34
//     }
// }
// company.getFullAddress = function() {

//     getTest = company.address.join('')

// console.log(getTest)
// }

// company.getFullAddress()}

// Добавьте массив объектов employees в объект company, каждый объект должен содержать свойства name и position.

{const company = {
    address:{
        city: 'Magas',
        street: 34
    }
}
company.emloyees = [
    {
    name:'',
    position:''
    },
    {
    name:'',
    position:''
    }
]
console.log(company.emloyees);}

//43 Найдите объект сотрудника с именем "Alice" в массиве employees объекта company.

// {const company = {
//     address:{
//         city: 'Magas',
//         street: 34 },
//     emloyees:[
//     {
//     name:'Isa',
//     position:'1'
//     },
//     {
//     name:'Alice',
//     position:'2'
//     }
// ]
// }
// }
// const result = emloyees.find((a) => a.name=='Alice')
// console.log(result);}

// Добавьте свойство с именем, заданным переменной, к объекту person.
{const person = {
name :'Musa',
}

const newName = 'age';
const newValue = 567
person[newName] = newValue

console.log(person);}
// Удалите свойство с именем, заданным переменной, из объекта person.

const person = {
name :'Musa',
}

const newName = 'age';
const newValue = 567
person[newName] = newValue
console.log(person);

delete person[newName];
console.log(person);


const
if (isAdmin)