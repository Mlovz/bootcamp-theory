// Создайте объект person с свойствами name и age.
const person = {
    name: 'Timur',
    age: 24
}

// Выведите значение свойства name объекта person.
console.log(person.name);


// Измените значение свойства age объекта person на 30.
person.age = 30
console.log(person);

// Добавьте свойство city с значением "New York" к объекту person.
person.city = 'New York';
console.log(person);
// Удалите свойство city из объекта person.
delete person.city;
console.log(person);

// Проверьте, существует ли свойство name в объекте person.
console.log('name' in person);

// Объедините два объекта obj1 и obj2 в один.
const obj1 = { name: 'Timur' }
const obj2 = { age: 24 }
const Ikrima = { ...obj1, ...obj2 }
console.log(Ikrima);
// Создайте копию объекта person.
const newPerson = { ...person }

// Переберите все свойства объекта person и выведите их значения.
for (let swag in person) { console.log(swag); }


// Создайте массив объектов people, каждый объект должен содержать свойства name и age.
const people = [
    
        {username: 'abbas',
        age: '10'}
    ,
    
    { username: 'John',
        age: 11
    }
    ]



// Найдите объект с именем "John" в массиве people.
const newItem = people.find(a => a.username === 'John')
console.log(newItem);

// Создайте функцию-конструктор Person для создания объектов с именем и возрастом.


// Создайте новый объект, используя функцию-конструктор Person.

// Добавьте метод greet в объект person, который выводит приветствие.
// person.greet = () => {
//     console.log('Hello');
// }

// Вызовите метод greet объекта person.
// console.log(person.greet());
// Добавьте метод setAge в объект person, который принимает параметр и устанавливает новое значение для свойства age.
// person.setAge = function (params)
// {person.age = params}
// console.log(person.setAge(10));

// console.log(person);    

// Добавьте метод getAge в объект person, который возвращает значение свойства age.
// person.getAge = function(){
//     return this.age
//     }


// Создайте объект company с вложенным объектом address, содержащим свойства city и street.
//     const company = {
//         address : {
//             city : "Nazran",
//             street: "Mutalieva",
//         }
//     }
        

// console.log(company);

// Выведите значение свойства city вложенного объекта address в объекте company.
// console.log(company.city);

// Добавьте метод getFullAddress в объект company, который возвращает полный адрес в виде строки.
// company.getFullAddress = function(){
//     return this.address
// }

// Добавьте массив объектов employees в объект company, каждый объект должен содержать свойства name и position.
// let  employees = ['name', ' position', 'alice'];
// let length = employees.push('name', ' position', 'alice');

// console.log(employees);

// Найдите объект сотрудника с именем "Alice" в массиве employees объекта company.
// let searchTerm = 'alice';
// let cityId = employees.find(employees => employees.name === alice).id
// console.log(cityId);

// Добавьте свойство с именем, заданным переменной, к объекту person.

// Удалите свойство с именем, заданным переменной, из объекта person.

// Добавьте геттер и сеттер для свойства name в объект person.

// Добавьте метод update в объект person, который принимает объект с новыми значениями свойств и обновляет соответствующие свойства объекта person.

// Проверьте тип свойства age в объекте person.

// Переберите все свойства объекта person с использованием цикла for...in и выведите их имена и значения.

// Создайте объект settings с несколькими свойствами и объявите его с помощью const. Попробуйте изменить одно из свойств.

// Добавьте метод printProperties в объект person, который выводит все свойства и их значения.

// Добавьте метод birthday в объект person, который увеличивает возраст на 1 и выводит новое значение.

// Создайте объект animal с методом speak. Создайте объект dog, который наследует от animal и добавляет метод bark.

// Добавьте метод isEqual в объект person, который принимает другой объект и возвращает true, если оба объекта имеют одинаковые значения для всех свойств.

// Создайте объект classroom с массивом студентов, каждый из которых является объектом с именем и оценками (массив чисел).

// Добавьте метод averageGrade в объект студента, который вычисляет и возвращает среднее значение оценок.

// Добавьте метод addGrade в объект студента, который принимает оценку и добавляет её в массив оценок.

// Создайте объект mixedData, который содержит строки, числа, булевы значения, массивы и другие объекты.

// Добавьте метод clone в объект person, который возвращает глубокую копию объекта.

// Создайте объект car с помощью Object.create, добавьте свойства и методы.

// Добавьте метод removeIf в объект person, который принимает имя свойства и булеву функцию, и удаляет свойство, если функция возвращает true.

// Создайте функцию createCar, которая возвращает объекты с заданными свойствами и методами.

// Добавьте метод findTopEmployee в объект company, который возвращает сотрудника с максимальным значением заданного свойства (например, salary).

// Добавьте метод filterByPosition в объект company, который возвращает массив сотрудников, занимающих заданную должность.

// Добавьте метод groupByPosition в объект company, который возвращает объект, где ключами являются должности, а значениями — массивы сотрудников с этими должностями.

// Добавьте метод getUniquePositions в объект company, который возвращает массив уникальных должностей сотрудников.

// Добавьте метод mergeWith в объект person, который принимает другой объект и сливает его свойства с текущим объектом.

// Добавьте метод hasPropertyValue в объект person, который принимает имя свойства и значение, и возвращает true, если свойство имеет это значение.

// Добавьте метод toString в объект person, который возвращает строковое представление объекта.

// Добавьте метод updateMultiple в объект company, который принимает массив объектов с новыми данными и обновляет соответствующие объекты сотрудников.

// Добавьте метод getProperties в объект person, который принимает массив имен свойств и возвращает новый объект, содержащий только эти свойства.
