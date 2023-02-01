import React from "react";
import { Navbar } from "./components/navbar";
import AboutPage from "./components/AboutPage";
import { Home } from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import Membership from "./components/Memership";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
          <Route path="/Membership" element={<Membership />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
