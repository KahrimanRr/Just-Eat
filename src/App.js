import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
