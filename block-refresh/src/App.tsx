import React from "react";
import { Navbar } from "./components/Navigation/navbar";
import AboutPage from "./components/About Us Page/AboutPage";
import { Home } from "./components/Home Page/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Navigation/footer";
import Membership from "./components/Membership Page/Memership";
import { Contact } from "./components/Contact Page/contact";

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
