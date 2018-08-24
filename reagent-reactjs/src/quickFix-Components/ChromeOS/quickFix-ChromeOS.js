import React from "react";

//Import 3rd-party libraries
import lifecycle from "react-pure-lifecycle";

var pagetitle = "QuickFix | Chrome OS";

const openLinksInBrowser = () => {
    if (document.body.contains( document.getElementById("portalTutorials-webview") )) {
        
        document.getElementById("portalTutorials-webview").addEventListener("new-window", (e) => {
            const protocol = require("url").parse(e.url).protocol;
            if (protocol === "http:" || protocol === "https:") {
                const {shell} = window.require("electron");
                shell.openExternal(e.url)
                /* 
                    //Load in a new electron window
                   //const {BrowserWindow} = window.require('electron').remote; 
                   //let win = new BrowserWindow({width: 800, height: 600})
                   //win.loadURL(e.url); 
                */
            } //end if-statement
          }); //end addEventListener()

          
      document.addEventListener("dragover", (event) => {
        event.preventDefault();
        return false;
      }, false); //end addEventListener()
    
      document.addEventListener("drop", (event) => {
        event.preventDefault();
        return false;
      }, false); //end addEventListener()

    } //end if-statement
} //end openLinksInBrowser

const componentDidMount = (props) => {
    props.updateTitle(pagetitle);
    openLinksInBrowser();
} 

const methods = {
    componentDidMount,
    openLinksInBrowser

};


const QuickFixChromeOS = () => {
    return (
        <webview src="https://portal.centinela.k12.ca.us/troubleshooting.html" className="staff-portal-embed" id="portalTutorials-webview"></webview>
    );
}; //end quickFixChromeOS()


export default lifecycle(methods)(QuickFixChromeOS);