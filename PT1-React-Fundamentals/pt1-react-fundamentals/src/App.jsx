import React from "react";

import Pizza from "./components/Pizza/Pizza";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Pizza />
      <Footer />
    </div>
  );
};

export default App;
