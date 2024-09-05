import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  const logger = () => {
    console.log("logger");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Header logger={logger} username="Test">
        kjsandjkasdn
      </Header>

      <main>
        <HomePage />
      </main>

      <Footer />
    </div>
  );
}

export default App;
