import React, { Component } from "react";
//import { Route, NavLink, HashRouter } from "react-router-dom";

import {Route, BrowserRouter, HashRouter, Switch} from "react-router-dom";

//import {BrowserRouter as Router, Route, Link} from "react-router-dom";

//import logo from "./logo.svg";

//Import CSS Styles
// import "./grid-system.css";
// import "./style.css";

// Import General Page Components
import Container from "./Container.js";
import Titlebar from "./Titlebar.js";
import Main from "./Main.js";
import Header from "./Header.js";
import PageContentContainer from "./PageContentContainer.js";

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
      <BrowserRouter>
        <Container>
            <Titlebar/>
            <Main>
              <Header/>
            {/* <Home/>*/}   {/* This is is the component you change when 
                          the page changes, since all components have a 
                          container, a main element, and a header. */}
              <PageContentContainer>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/autoFix-tools" component={AutoFixTools} />
                  <Route path="/submit-ticket" component={SubmitTicket} />
                  <Route path="/quickFix-tutorials" component={QuickFixTutorials} />
                  <Route path="/call-helpdesk" component={HelpDesk} />
                  <Route path="/wiFiMagic" component={WiFiMagic} /> 
                </Switch>  
              </PageContentContainer>
           
             
            </Main>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
