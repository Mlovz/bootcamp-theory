import { useState } from "react";
import Header from "./Header";
import LoginPage from "./LoginPage";
import { AuthProvider } from "./GlobalContext";
import Footer from './Footer'

function App() {
  return (
    <>
      <AuthProvider>
        <Header a={10}></Header>

        <LoginPage />
      </AuthProvider>
      <Footer/>
    </>
  );
}

export default App;
