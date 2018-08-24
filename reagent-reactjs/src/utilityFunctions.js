/* Utility Functions to import into your JavaScript files for reuse! */

const openLinksInBrowser = (elementID) => {
    if (document.body.contains( document.getElementById(elementID) )) {
        
        document.getElementById(elementID).addEventListener("new-window", (e) => {
            const protocol = require("url").parse(e.url).protocol;
            if (protocol === "http:" || protocol === "https:") {
                const { shell } = window.require("electron");
                shell.openExternal(e.url)
                /* 
                    //Load in a new electron window
                   //const {BrowserWindow} = window.require('electron').remote; 
                   //let win = new BrowserWindow({width: 800, height: 600})
                   //win.loadURL(e.url); 
                */
            } //end if-statement
          }); //end addEventListener()

      //Prevent user from drag and dropping HTML from 3rd-party sites.   
      document.addEventListener("dragover", (event) => {
        event.preventDefault();
        return false;
      }, false); //end addEventListener()
    
      document.addEventListener("drop", (event) => {
        event.preventDefault();
        return false;
      }, false); //end addEventListener()

    } //end if-statement
}; //end openLinksInBrowser

export  { openLinksInBrowser };