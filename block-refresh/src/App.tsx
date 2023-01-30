import React from "react";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import AboutPage from "./components/AboutPage";
import { Home } from "./components/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutPage />
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;

