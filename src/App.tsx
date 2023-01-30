import React from "react";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Membership from "./components/Memership";
// import Hero from "./Hero";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Membership />
      <Footer />
    </div>
  );
}
export default App;
