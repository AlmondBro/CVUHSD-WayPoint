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

const { BrowserWindow, app } = requireNodeJSmodule("electron"); //Use electron.remote for BrowserWindow and app are modules exclusive to the main process.
const { ipcRenderer } = window.require('electron');

let monitorFetchWindow = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageTitle: "Home",
      renderFooter: false,
      notifications: [
          {   
              urgent: true, 
              notificationText: "Update required" 
          },
          {   urgent: false, 
              notificationText: "No HelpDesk Requests",
              faIconClassName: "fa fa-check greenCheck"  
          },
          {   urgent: false, 
              notificationText: "10 files",
              faIconClassName: "fas fa-archive archive"  
          },
          {   urgent: false, 
              notificationText: "Coffee Taken",
              faIconClassName: "fas fa-coffee coffee"  
          }
      ],
      noNotifications: false
    }; //end state object

    // console.log(`"App path:\t ${app.getAppPath()}"`);
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

  addNotification = (urgent, notificationText, faIconClassName, image) => {
    console.log("addNotification()");
    /* 
    Other way to add to array in state, using ES6 spread operator:
    this.setState(previousState => ({
    myArray: [...previousState.myArray, 'new value']
    }));

    // Append an array
    const newArr = [1,2,3,4]
    this.setState({ arr: [...this.state.arr, ...newArr] });

    // Append a single item
    this.setState({ arr: [...this.state.arr, 'new item'] });
    */
    /* State must be kept immutable, so you can not modify the state object directly.
       Unshift() does this on an arrray, instead of returning a new copy. */
   let newNotificationsArray =  [...this.state.notifications]; // Use ES6 destructuring to copy array.

    newNotificationsArray.unshift({
      urgent: urgent,
      notificationText: notificationText,
      faIconClassName: faIconClassName,
      image: image
    });

    this.setState({
        notifications: newNotificationsArray,
        noNotifications: false
    }); //end this.setState()
  }; //end addNotifications()

  removeNotification = (index) => {
    console.log(`Deleting notification with index of:\t ${index}`);
    let indexNumber = parseInt(index);
    let newNotificationsArray =  [...this.state.notifications]; // Use ES6 destructuring to copy array.

    newNotificationsArray.splice(indexNumber, 1);

    let newNoNotifications = (newNotificationsArray.length === 0) ? true : false;
    this.setState({
        notifications: newNotificationsArray,
        noNotifications: newNoNotifications
    }); //end this.setState()
  }; //end removeNotification()

  clearNotifications = () => {
      this.setState({
          notifications: [],
          noNotifications: true
      });
  }; //end clearNotifications()
  
  createInvisibleWindow = () => {
    const isDev = window.require("electron-is-dev");
    const path = window.require("path");
    const url = window.require("url");

    if (isDev) {
      corsAnywhere();
    }

    console.log("createInvisibleWindow()");
    monitorFetchWindow = new BrowserWindow({
        title: "WayPoint", //Title of window when frame is enabled
        width: 360, 
        height: 525, 
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
         // monitorFetchWindow.webContents.openDevTools({ mode: "undocked"});
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
    ipcRenderer.on("toMainWindow", (event, monitorName, status, monitorImage) => {
      console.log(`toMainWindow received. ${monitorName} is ${status}` );
      this.addNotification(false,`${monitorName} is ${status}`, null, monitorImage);
    });

    console.log("ipcEvents()");
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
            <Header addNotification={this.addNotification } removeNotification={this.removeNotification} clearNotifications={this.clearNotifications} notifications={this.state.notifications} noNotifications={this.state.noNotifications} />
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
