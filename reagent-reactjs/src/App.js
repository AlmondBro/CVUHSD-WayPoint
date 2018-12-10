import React, { Component } from "react";
import { Route, BrowserRouter, Switch, HashRouter } from "react-router-dom";
import { requireNodeJSmodule } from "./utilityFunctions.js";

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

import { corsAnywhere } from "./server.js";

const { BrowserWindow, ipcRenderer, app } = requireNodeJSmodule("electron");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageTitle: "Home",
      renderFooter: false
    };
    console.log(`"App path:\t ${app.getAppPath()}"`);
    //this.updatePageTitle= this.updatePageTitle.bind(this);
  } //end constructor()

  updatePageTitle = (newPageTitle) => {
    this.setState( {pageTitle: newPageTitle } ); 
  }; //end updatePageTitle()

  renderFooterFunction = (renderFooterBool) => {
    //Do not render footer on default
    if ((renderFooterBool !== "undefined") ) {
      this.setState( {renderFooter: renderFooterBool } );
    } else {
      this.setState( {renderFooter: false } );
    }
  }; //end renderFooterFunction()
  
  createInvisibleWindow = () => {
    const isDev = window.require("electron-is-dev");
    const path = window.require("path");
    const url = window.require("url");

    if (isDev) {
      corsAnywhere();
    }

    console.log("createInvisibleWindow()");
    let monitorFetchWindow = new BrowserWindow({
        title: "WayPoint", //Title of window when frame is enabled
        width: 500, 
        height: 200, 
        frame: false, 
        fullscreen: false, 
        resizable: false, 
        webPreferences: {
          sandbox: false,
          nodeIntegrationInWorker: true
        },
        show: false
    });

   // const imagePath = isDev ? path.resolve(`./${publicOrBuild}/img/${image}`) :  path.resolve(`./resources/app.asar/build/img/${image}`);
    // Production paths are relative to the WayPoint.exe executable. 
   const startUrl = isDev ? (process.env.ELECTRON_START_URL || path.resolve("./public/background-process.html") ) : url.format({
        pathname: path.resolve("./resources/app.asar/build/background-process.html"),
        protocol: "file:",
        slashes: true
    });

    monitorFetchWindow.loadURL(startUrl);

    monitorFetchWindow.on("did-finish-load", () => { 
      monitorFetchWindow.webContents.send("fetch-monitor");
      ipcRenderer.on("monitor-fetched", (event, monitorData) => {
        //Write code to update notifications according to monitor statuses
        });
    }); //end monitorFetchWindow.on()

    //monitorFetchWindow.setFocusable(true);

    //Do mot use service workers since the electron module is not supported.
    let installWebWorker = () => {
      if (typeof(Worker) !== "undefined") {
        console.log("Web worker supported");
        let monitorsWorker = new Worker("worker.js");
      } else {
        console.log("Sorry! No Web Worker support...");
      }
    }; //end installWebWorker();

    let prodDebug = true;
    if (isDev || prodDebug) {
         // Open the DevTools.
         monitorFetchWindow.webContents.openDevTools({ mode: "undocked"});
    } //end if-statement
   
    /*
    monitorFetchWindow.on("close", (event) => {
      monitorFetchWindow.close();
    });  //end monitorFetchWindow.on()
*/
  }; //end createInvisibleWindow()

  runDevTools = () => {
    const isDev = window.require("electron-is-dev"); 

    if (isDev) {
      window.require("devtron").install(); // can only be installed through renderer process
      console.log("Devtron installed");

      window.require("electron-react-devtools").install();
      console.log("Renderer process - electron-react-devtools ready to be installed");
    }
  }; //end runDevTools()

  ipcEvents = () => {
    const { ipcRenderer } = window.require('electron');

    ipcRenderer.on('monitorDown', (event, monitor) => {
      window.alert("notification received" + monitor) ;// prints "pong"
    });
  
  }; //end ipcEvents() 

  componentDidMount = () => {
    this.runDevTools();
    this.setState( {renderFooter: true} );
    this.createInvisibleWindow();
    this.ipcEvents();
  }; //end componentDidMount()

 
  render = () => {
    const isDev = requireNodeJSmodule("electron-is-dev"); 
    
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
                <Route path="/feedback" render={ props => <SubmitTicket updateTitle={this.updatePageTitle} renderFooter={this.renderFooterFunction} /> } />
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
