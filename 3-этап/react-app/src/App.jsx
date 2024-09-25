import Header from "./components/Header";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const users = [
    { name: "John", lastname: "Doe" },
    { name: "Jane", lastname: "Doe" },
    { name: "Bob", lastname: "Smith" },
    { name: "Alice", lastname: "Johnson" },
    { name: "Mark", lastname: "Williams" },
  ];

  return (
    <>
      {/* <Header name='Test' lastname='Testov' /> */}
      {/* <main>
        Main
      </main> */}

      <UsersList users={users} />

      {/* <Footer isOpen={true}/> */}
    </>
  );
}

export default App;
