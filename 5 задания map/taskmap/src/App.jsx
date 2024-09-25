import "./App.css";
import BookList from "./components/BookList/BookList";
import CityList from "./components/CityList/CityList";
import ProductList from "./components/ProductList/ProductList";
import StudentList from "./components/StudentList/StudentList";
import UserTable from "./components/UserTable/UserTable";

function App() {
  const Products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
  ];
  const Students = [
    { name: "John Doe", group: "A1" },
    { name: "Jane Smith", group: "B2" },
    { name: "Michael Johnson", group: "A3" },
  ];
  const users = [
    { name: "Alice", email: "alice@example.com", age: 25 },
    { name: "Bob", email: "bob@example.com", age: 30 },
    { name: "Charlie", email: "charlie@example.com", age: 35 },
  ];
  const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];
  const cities = [
    { name: "New York", population: 8419600 },
    { name: "Los Angeles", population: 3980400 },
    { name: "Chicago", population: 2716000 },
  ];

  return (
    <div className="App">
      {/* <ProductList products={Products} /> */}
      {/* <StudentList students={Students} /> */}
      {/* <UserTable users={users} /> */}
      {/* <BookList books={books} /> */}
      <CityList cities={cities} />
    </div>
  );
}

export default App;
