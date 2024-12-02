import UserTable from "./components/UserTable/UserTable";
import BookList from "./components/BookList/BookList";
import CityList from "./components/CityList/CityList";
import ProductList from "./components/ProductList/ProductList";
import StudentList from "./components/StudentList/StudentList";


function App() {

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

const students = [
{ name: "John Doe", group: "A1" },
{ name: "Jane Smith", group: "B2" },
{ name: "Michael Johnson", group: "A3" }
];

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Moby Dick", author: "Herman Melville" }
];

const cities = [
{ name: "New York", population: 8419600 },
{ name: "Los Angeles", population: 3980400 },
{ name: "Chicago", population: 2716000 }
];

const users = [
{ name: "Alice", email: "alice@example.com", age: 25 },
{ name: "Bob", email: "bob@example.com", age: 30 },
{ name: "Charlie", email: "charlie@example.com", age: 35 }
];

  return (
    <div className="App">
      <ProductList products={products}/>
      <StudentList studentsNew = {students} />
      <UserTable users = {users}/>
      <BookList booksNew = {books}/>
      <CityList cities= {cities} />
    </div>

  );



}

export default App;


// Задание 1: Отображение списка товаров
// Создайте компонент ProductList, который принимает массив товаров (каждый товар — объект с названием и ценой) и выводит их в виде списка.
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// Выводите каждый товар в отдельном компоненте ProductItem, который получает название и цену через props.

// Задание 2: Отображение списка студентов
// Создайте компонент StudentList, который принимает массив студентов (каждый студент — объект с именем и номером группы) и выводит их в виде списка.
// const students = [
//   { name: "John Doe", group: "A1" },
//   { name: "Jane Smith", group: "B2" },
//   { name: "Michael Johnson", group: "A3" }
// ];
// Каждый студент должен отображаться в компоненте StudentItem, который получает имя и группу через props.

// Задание 3: Таблица пользователей
// Создайте компонент UserTable, который принимает массив пользователей (каждый пользователь — объект с именем, email и возрастом) и выводит их в виде таблицы с соответствующими заголовками.
// const users = [
//   { name: "Alice", email: "alice@example.com", age: 25 },
//   { name: "Bob", email: "bob@example.com", age: 30 },
//   { name: "Charlie", email: "charlie@example.com", age: 35 }
// ];
// Каждый пользователь должен выводиться в строке таблицы с использованием компонента UserRow.

// Задание 4: Отображение списка книг
// Создайте компонент BookList, который принимает массив книг (каждая книга — объект с названием и автором) и выводит их в виде списка.
// const books = [
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
//   { title: "Moby Dick", author: "Herman Melville" }
// ];
// Каждая книга должна отображаться в компоненте BookItem, который получает название и автора через props.

// Задание 5: Отображение списка городов
// Создайте компонент CityList, который принимает массив городов (каждый город — объект с названием и населением) и выводит их в виде списка.
// const cities = [
//   { name: "New York", population: 8419600 },
//   { name: "Los Angeles", population: 3980400 },
//   { name: "Chicago", population: 2716000 }
// ];
// Каждый город должен выводиться в компоненте CityItem, который получает название и население через props.