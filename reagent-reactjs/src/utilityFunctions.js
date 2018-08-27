/* Utility Functions to import into your JavaScript files for reuse! */
const utilityFunctions = () => {
    let openLinksInBrowser = (elementID) => {
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

    let canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
    );

    let popNotification = (notificationTitle, notificationMessage, iconPath, soundOn, noWait) => {
        const electron = window.require("electron");
        const remote = electron.remote;

        //User notifier NPM module since the native Electron Notifications is not working
        const notifier = remote.require("node-notifier");
        const path = remote.require('path');

        let notifierOptions = {
            title: notificationTitle || "Title",
            message: notificationMessage || "Message",
            icon: iconPath || path.join(__dirname, "./../public/img/wp-icon-grey.ico"), // Absolute path (doesn't work on balloons)
            sound: soundOn || true, // Only Notification Center or Windows Toasters
            wait: noWait || false // Wait with callback, until user action is taken against notification
        }

        let callback = (error, response) => {
            // Response is response from notification
            console.log("Notifier response:\t" + response );
            console.log("Notifier errors:\t" + error );
        };

        notifier.notify(notifierOptions, callback);
    } //notification()
    
    stringIsEmptyOrBlank = (string) => {
        //falsy values: null,undefined,0,000,"",false
        if (!string || (string.trim()).length === 0) {
            console.log(string + " is empty, blank, null or undefined");
            return true;
        } //end if-statement
        else {
            console.log(string + " is not empty, blank, null or undefined");
            return false;
        } //end else-statement
    } //end stringIsEmptyOrBlank()


    const functionsObject  = {
        openLinksInBrowser: openLinksInBrowser,
        canUseDOM: canUseDOM,
        popNotification: popNotification,
        stringIsEmptyOrBlank: stringIsEmptyOrBlank
    };

    return functionsObject;
}; //end utilityFunctions()
    
//Trying to encapsulate the utility functions inside a function appears to be a bit redudant...
let openLinksInBrowser = utilityFunctions().openLinksInBrowser;
let canUseDOM = utilityFunctions().canUseDOM;
let popNotification = utilityFunctions().popNotification;
let stringIsEmptyOrBlank = utilityFunctions().stringIsEmptyOrBlank;

export  { openLinksInBrowser, canUseDOM, popNotification, stringIsEmptyOrBlank };