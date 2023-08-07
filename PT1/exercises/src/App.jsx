import React from "react";
import "./App.scss";
import Card from "./Components/Card";

const App = (props) => {
  return (
    <div className="App">
      <Card 
        imgURL="./images/download.jpeg"
        name="Waliston Euripedes"
        title="Web Developer "
        about="A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server."
      />
    </div>
  );
};

export default App;
