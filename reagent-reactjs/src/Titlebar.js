import React from "react";

//Import 3rd-party libraries 
import { requireNodeJSmodule} from "./utilityFunctions.js";

//Import NodeJS modules to be used
const path = window.require("path");

const { nativeImage, app, BrowserWindow } = requireNodeJSmodule("electron");

const isDev = window.require("electron-is-dev");
const url = window.require("url");

const Titlebar = (props) => {
    let feedbackWindow; 
    const electron = window.require("electron");
    const remote = electron.remote;
    let currentWindow = remote.getCurrentWindow();

    let minimizeWindow = () => {
        console.log("Button minimize");
        const electron = window.require("electron");
        const remote = electron.remote;

        const currentWindow = remote.getCurrentWindow();
        currentWindow.minimize(); 
    }; //end minimizeAndClose()

    let closeWindow = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const currentWindow = remote.getCurrentWindow();

        currentWindow.close();
    };

    let createFeedbackWindow = () => {
        console.log("createWindow()");
        // Create the browser window.
        //Show:false key-value pair is to delay loading until all resources have been loaded.
        feedbackWindow = new BrowserWindow({
            parent: currentWindow,
            modal: true,
            title: "WayPoint", //Title of window whe frame is enabled
            width: 360, 
            height: 525, 
            frame: false, 
            fullscreen: false, 
            resizable: false, 
            webPreferences: {
                nodeIntegration: true,
            },
            show: false,
            skipTaskbar: false, //whether to show window in taskbar
            backgroundColor: "black",
            icon: isDev ? nativeImage.createFromPath(path.join(__dirname, "./../public/img/wp-icon-grey.png")) : nativeImage.createFromPath(path.join(__dirname, "./../build/img/wp-icon-grey.png"))
        });
        // const currentWindow = remote.getCurrentWindow();

        // ../public/img/wp-icon-grey.ico
        // ./gallery-icon.png
        //Productions paths are with "#/[component-path]"
        const startUrl = isDev ? (process.env.ELECTRON_START_URL || "http://localhost:3000/feedbackWindow") : url.format({
            pathname: path.resolve(`./resources/app.asar/build/index.html#/feedbackWindow"`),
            protocol: "file:",
            slashes: true
        });
    
        console.log("New window path:\t",  path.join(__dirname, "./build/index.html")); 

        console.log(JSON.stringify(process.env)); //Log the environment variables
        console.log("process.env.ELECTRON_START_URL:\t" + process.env.ELECTRON_START_URL);
        // and load the index.html of the app.
        //mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
        feedbackWindow.loadURL(startUrl);

        /*
        when everything is loaded, show the window and focus it so it pops up for the 
        user. You can do this with the “ready-to-show” event on your `BrowserWindow`, 
        which is recommended, or the ‘did-finish-load’ event on your webContents.
        * https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff
        */
        feedbackWindow.on("ready-to-show", () => { 
            feedbackWindow.show(); 
            feedbackWindow.focus(); 
            console.log(`App Path:\t ${app.getAppPath()}`);
        });  
    
        // Emitted when the window is closed.
        feedbackWindow.on("close", () => {
            /* Dereference the window object, usually you would store windows
                in an array if your app supports multi windows, this is the time
                when you should delete the corresponding element. */
            feedbackWindow = null;
        });

        //Override minimize and close window functions to tray
        feedbackWindow.on("minimize", (event) => {
            event.preventDefault();
            feedbackWindow.minimize();
        });
        
    } //end createWindow()

    return ( 
        <div id="titlebar" className="noHighlight noDrag">
            <div className="titleBarButtons-container">
                <div 
                    className="titleBar-button" id="button-feedback" 
                    title="Provide Feedback"  onClick={createFeedbackWindow} 
                >
                    <img src="img/icon-feedback.png" alt="feedback" />
                </div>

                <div className="titleBar-button noDrag" id="button-minimize" title="Minimize Window">
                    <img 
                        src="img/icon-minimize.png" 
                        className="noDrag" 
                        alt="minimize" 
                        onClick={ minimizeWindow }/>
                </div>

                <div className="titleBar-button noDrag" id="button-close" title="Close Window">
                    <img 
                        src="img/icon-close.png" 
                        className="noDrag" 
                        alt="close" 
                        onClick={ closeWindow } />
                </div>
            </div>

            <div id="title">
                <div id="wp-icon-container" className="noDrag">
                    <img id="wp-icon" src="img/wp-icon-grey.png" title="Waypoint Version 0.1" alt="WayPoint Icon" />
                </div>
                <div id="page-title-container"><h2 id="page-title">{props.pageTitle}</h2></div>
            </div>
        </div>
    ); //end return
}; //end titlebar()

export default Titlebar;