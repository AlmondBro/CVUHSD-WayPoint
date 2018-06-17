import React, { Component } from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";

// Import General Page Components
import Titlebar from "./Titlebar.js";
import Header from "./Header.js";
import SubmitTicket from "./SubmitTicket.js";

// Import Pages
import Home from "./Home.js";
import WiFiMagic from "./WiFiMagic.js";
import QuickFixTutorials from "./QuickFixTutorials.js";
import HelpDesk from "./HelpDesk.js";
import AutoFixTools from "./AutoFixTools.js";
import StaffPortal from "./StaffPortal.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Titlebar/>
          <main>
            <Header/>
          {/* <Home/>*/}   {/* This is is the component you change when 
                        the page changes, since all components have a 
                        container, a main element, and a header. */}
            <section className="page-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/autoFix-tools" component={AutoFixTools} />
                <Route path="/submit-ticket" component={SubmitTicket} />
                <Route path="/quickFix-tutorials" component={QuickFixTutorials} />
                <Route path="/call-helpdesk" component={HelpDesk} />
                <Route path="/wiFiMagic" component={WiFiMagic} /> 
                <Route path="/staffPortal" component={StaffPortal} /> 
              </Switch>  
            </section>
            <div className="blur-effect"></div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
