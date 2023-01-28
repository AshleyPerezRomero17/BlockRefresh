import React from "react";
import { Footer } from "./components/footer";
import Navbar from "./components/navbar";
import Looogo from "./images/logo.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={Looogo} alt="logo" />
      <Footer />
    </div>
  );
}

export default App;
