// 1
const name = 'Makka'
console.log(name)

// 2
let age = 23
let city = 'Nazran'

// 3
const lastname = 'Ozieva'
let person = { name, lastname }
console.log(person.name + ' ' + person.lastname)

// 4
let isStudent = true
console.log(isStudent)

// 5
let count = 35
count = 25
console.log(count)

// 6
let letter_a = 'a'
let letter_b = 'b'
letter_a = 'b'
letter_b = 'a'
console.log(letter_a, letter_b)
// console.log((letter_a = 'b'), (letter_b = 'a'))

// 7
let price = 19.99
let priceString = '19.99'
console.log(typeof price)
console.log(typeof priceString)

// 8
const PI = 3.14
console.log(PI)
// само значение пи:
console.log(Math.PI)

// 9
let str = '123'
let notStr = parseInt(str)
console.log(notStr)
// ИЛИ
str = Number(str)
console.log(str)

// 10
let num = 456
let notNum = num.toString()
console.log(notNum)
// ИЛИ
num = String(num)
console.log(num)

// 11
let colors = ['red', 'green', 'blue']
console.log(colors)

// 12
colors.push('yellow')
console.log(colors)

// 13
colors.pop()
console.log(colors)

// 14
let fruits = ['apple', 'banana', 'cherry']
console.log(fruits[1])

// 15
let person_cat = {
	name: 'Lisa',
	age: 7,
}
console.log(person_cat)

// 16
let car = {
	make: 'Porsche',
	model: 911,
}
console.log(car.make)

// 17
person_cat.age = 7.5
console.log(person_cat.age)

// 18
car.color = 'orange'
console.log(car.color)

// 19
delete car.model
console.log('model' in car)

// 20
let firstName1 = 'Mur'
let age1 = 10
console.log(
	'My name is ' + [firstName1] + ' ' + 'and I am ' + [age1] + ' years old.'
)

// 21
let isAvailable = false
console.log(isAvailable)

// 22
let x = 10
let y = 'hello'
console.log(typeof x)
console.log(typeof y)

// 23
let a = 5
let b = 10
console.log(a <= b)

// 24
let a1 = 5
let b1 = 5
console.log(a1 === b1)

// 25
let isAdult = true
let hasTicket = true
console.log(isAdult && hasTicket == true)