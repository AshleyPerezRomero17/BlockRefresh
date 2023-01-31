import React from "react";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import AboutPage from "./components/AboutPage";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
