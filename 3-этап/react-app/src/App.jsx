import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BussinesCard from "./components/BussinesCard/BussinesCard";

function App() {
  return (
    <BrowserRouter>
      <BussinesCard name='Suleim' jobTitle='Frontend Developer' company='Amazon' />

      {/* <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </main>

      <footer></footer> */}
    </BrowserRouter>
  );
}

export default App;
