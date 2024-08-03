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
// ИЛИ
console.log(`${person.name} ${person.lastname}`)

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

// 26
// функция с_именем(и_параметрами){
function greet(name) {
	// объявляет переменную, которая включает в себя в т. ч. параметры}
	let str = `Hello, ${name}`
	console.log(str)
	// ИЛИ другой способ вывода в консоль
	console.log(`Hello, ${name}`)
}
// вызываем_функцию_по_имени('задавая значения параметров')
greet('world')

// 27
function square(number) {
	// return number * number
	console.log(number ** 2)
	// функция корень (обратная степени 2):
	// console.log(Math.sqrt(number))
}
square(9)

// 28
function multiply(a, b, c) {
	b = 1
	console.log(a, b, c)
}
multiply(2, b, 12)

// 29
let num29 = 10
let str29 = '20'
const unite29 = { num29, str29 }
console.log(`${unite29.num29 + unite29.str29}`)

// 30
let isHappy = true
isHappy = String(isHappy)
console.log(typeof isHappy)
// ИЛИ:
let isHappyStr = isHappy.toString()
console.log(typeof isHappyStr)

// 31
let array31 = [1, 2, 3, 4, 5]
// в join в кавычках мы указываем символ, которым будем разделять элементы массива
array31 = array31.join(' ')
console.log(array31)

// 32
let elements32 = 'convert to array.'
// в сплите в кавычках мы указываем символ, на которую сплит внутри своей переменной опирается для разделения, т. е. если указать пробел, то всё содержимое переменной разделяется на части, между которых есть пробелы
elements32 = elements32.split(' ')
console.log(elements32)

// 33
let text = 'just_text'
console.log(text.length)

// 34
let arrays_in_array = [
	['pomegranate', 'peach'],
	['orange', 'pomelo'],
	['chicken', 'pineapple', 'banana'],
]
arrays_in_array[2][0] = 'watermelon'
console.log(arrays_in_array)

// 35
console.log(arrays_in_array[1][0])

// 36
let obj = {
	// функция внутри объекта является методом, массив внутри объекта - свойством
	greet: function (arg_или_какой_то_параметр_функции) {
		console.log(arg_или_какой_то_параметр_функции + ' И какой-то текст')
	},
	// функции вызываются двумя способами
	farewell: (
		скобки_если_больше_1_параметра_или_ни_одного,
		а_так_без_них = 'А_тут_2й_параметр'
	) => {
		console.log(скобки_если_больше_1_параметра_или_ни_одного, а_так_без_них)
	},
}
obj.greet('Hi!')
obj.farewell('Bye!')

// 37
let obj1 = {
	greet: function (name) {
		console.log(name)
	},
	farewell: function (name) {
		console.log(name)
	},
}
obj1.greet('123123')

// 38
if (person_cat.name) {
	console.log(person_cat.name)
}

// 39
let user = { name: 'John', age: 20 }
// затем надо создать пустой объект:
let clone = {}
// копирование свойств user в clone:
// вместо all можно key или что-то ещё
for (let all in user) {
	clone[all] = user[all]
}
// переименование нового объекта:
clone.name = 'Pete'
console.log(clone)
console.log(user)

// 40
let user40 = { name: 'Jan' }
let permission1 = { canView: true }
let permission2 = { canEdit: false }
// копирование всех свойств из permission1 и permission2 в user40
Object.assign(user40, permission1, permission2)
console.log(user40)

// 41
let x1

// 42
console.log(x1)

// 43
let y1 = null

// 44
console.log(y1)

// 45
// см. задание 34

// 46
const numbers = [1, 2, 3, 4]
numbers.forEach(num => console.log(num))

// 47
let itsNum = 100
itsNotNum = itsNum.toString()
console.log(itsNotNum)
noItsNum = parseInt(itsNotNum)
console.log(noItsNum)
// ИЛИ без новых переменных:
itsNum = String(itsNum)
console.log(itsNum)
itsNum = Number(itsNum)
console.log(itsNum)

// 48
const str48a = 'banana'
const str48b = 'apple'
console.log(str48a == str48b)

// 49
let array49 = [1, 2, 3, 8, 9]
console.log(array49.length)

// 50
let student = {
	address: {
		country: 'Switzerland',
	},
	grades: {
		grade: 1,
	}
}
console.log('Страна проживания: ', student.address.country)
console.log('Курс:', student.grades.grade)

