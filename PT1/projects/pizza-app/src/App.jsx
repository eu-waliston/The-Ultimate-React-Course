import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Pizza from "./Components/Pizzas/Pizza";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;
