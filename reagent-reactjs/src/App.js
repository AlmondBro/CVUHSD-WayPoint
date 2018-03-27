import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

//Import Components
import Container from "./Container.js";
import Frame from "./Frame.js";
import Main from "./Main.js";
import Header from "./Header.js";
import Home from "./Home.js";

class App extends Component {
  render() {
    return (
      <Container>
          <Frame />
          <Main>
            <Header />
            <Home />
          </Main>
      </Container>
    );
  }
}

export default App;
