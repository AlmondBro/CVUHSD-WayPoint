import React, { Component } from "react";
import {Route, BrowserRouter, Switch, HashRouter} from "react-router-dom";

// Import General Page Components
import Home from "./Home.js";
import Footer from "./Footer.js";
import SubmitTicket from "./SubmitTicket.js";
import Titlebar from "./Titlebar.js";
import Header from "./Header.js";

// Import pages or external components
import WiFiMagic from "./WiFiMagic.js";
import ProjectorMagic from "./ProjectorMagic.js";
import QuickFixTutorials from "./QuickFixTutorials.js";
import HelpDesk from "./HelpDesk.js";
import AutoFixTools from "./AutoFixTools.js";
import StaffPortal from "./StaffPortal.js";
import Announcements from "./Announcements.js";
import QuickFixChromeOS from "./quickFix-Components/ChromeOS/quickFix-ChromeOS.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageTitle: "Home",
      renderFooter: false
    };
    //this.updatePageTitle= this.updatePageTitle.bind(this);
  } //end constructor()

  updatePageTitle = (newPageTitle) => {
    this.setState( {pageTitle: newPageTitle } ); 
  }; //end updatePageTitle()

  renderFooterFunction = (renderFooterBool) => {
    //Do not render footer on default
    if (arguments && (renderFooterBool !== "undefined") ) {
      this.setState( {renderFooter: renderFooterBool } );
    } else {
      this.setState( {renderFooter: false } );
    }
   
   
  }; //end renderFooterFunction()

  runDevTools = () => {
    const isDev = window.require("electron").remote.require("electron-is-dev"); 

    if (isDev) {
      window.require("devtron").install(); // can only be installed through renderer process
      console.log("Devtron installed");

      window.require("electron-react-devtools").install();
      console.log("Renderer process - electron-react-devtools ready to be installed");
    }
  }; //end runDevTools()

  componentDidMount = () => {
    this.runDevTools();
    this.setState( {renderFooter: true} );
  }; //end componentDidMount()

  render = () => {
    const isDev = window.require("electron").remote.require("electron-is-dev"); 
    
    const appHTML = () => {
      return (
      <div>
        <Titlebar pageTitle={this.state.pageTitle}  updatePageTitle={this.updatePageTitle} />
          <main>
            <Header/>
          {/* <Home/>*/}   {/* This is is the component you change when 
                        the page changes, since all components have a 
                        container, a main element, and a header. */}
            <section className="page-content">
              <Switch>
                <Route exact path="/" render={ (props) => <Home updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction}  /> } />
                <Route path="/autoFix-tools" render={ props => <AutoFixTools updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> } />
                <Route path="/submit-ticket" render={ props => <SubmitTicket updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> } />
                <Route path="/quickFix-tutorials" render={ props => <QuickFixTutorials updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> } />
                <Route path="/call-helpdesk" render={ props => <HelpDesk updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> }  />
                <Route path="/wiFiMagic" render={props => <WiFiMagic updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> } /> 
                <Route path="/ProjectorMagic"  render={props => <ProjectorMagic updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> }  />
                <Route path="/staffPortal" render={ props => <StaffPortal updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} />} /> 
                <Route path="/announcements" render={ props => <Announcements updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} />} />
                <Route path="/quickFix-ChromeOS" render={ props => <QuickFixChromeOS updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} />} />  
              </Switch>  
            </section>
            <Footer renderFooterBool={this.state.renderFooter} />
            <div className="blur-effect"></div>
          </main>
        </div>
        );
    } //end appHTML

    if (isDev) {
      return (
        <BrowserRouter>
            {appHTML()}
        </BrowserRouter>
      ); //end return statement
    } //end if-statement

    else {
      return (
        <HashRouter>
            {appHTML()}
        </HashRouter>
      ); //end return statement
    } //end else-statement

  } //end render() process
  
} //end App class

export default App;
