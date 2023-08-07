import React from "react";

import Pizza from "./components/Pizza/Pizza";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Chef from "./components/Chef/Chef.Component";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Pizza />
      <Chef />
      <Footer />
    </div>
  );
};

export default App;
