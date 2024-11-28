import "./App.css";
import EventCalendar from "./components/EventCalendar/EventCalendar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  const products = ["apple", "banana", "bread", "milk"];
  const films = [
    { title: "Inception", year: 2010 },
    { title: "The Matrix", year: 1999 },
    { title: "Interstellar", year: 2014 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Fight Club", year: 1999 },
  ];
  const events = [
    { name: "Конференция по IT", date: "2024-10-05" },
    { name: "День рождения компании", date: "2024-11-10" },
    { name: "Новогодняя вечеринка", date: "2024-12-31" },
    { name: "Митап разработчиков", date: "2024-09-30" },
    { name: "Тренинг по лидерству", date: "2024-10-15" },
  ];

  const imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
  ];
  const menuItems = ["Главная", "О нас", "Услуги", "Контакты", "Блог"];

  return (
    <div className="App">
      {/* <ShoppingList products={products} /> */}
      {/* <MovieList films={films} /> */}
      {/* <EventCalendar events={events} /> */}
      {/* <ImageGallery imageUrls={imageUrls} /> */}
      <NavBar menuItems={menuItems} />
    </div>
  );
}

export default App;
