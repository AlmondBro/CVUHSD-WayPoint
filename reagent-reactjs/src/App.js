import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

// Import General Page Components
import Container from "./Container.js";
import Frame from "./Frame.js";
import Main from "./Main.js";
import Header from "./Header.js";

// Import Pages
import Home from "./Home.js";
import WiFiMagic from "./WiFiMagic.js";
import SubmitTicket from "./SubmitTicket.js";
import QuickFixTutorials from "./QuickFixTutorials.js";
import HelpDesk from "./HelpDesk.js";
import AutoFixTools from "./AutoFixTools.js";


class App extends Component {
  render() {
    return (
      <Container>
          <Frame/>
          <Main>
            <Header/>
            <Home/> {/* This is is the component you change when 
                        the page changes, since all components have a 
                        container, a main element, and a header. */}
          </Main>
      </Container>
    );
  }
}

export default App;
