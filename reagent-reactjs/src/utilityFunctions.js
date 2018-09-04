
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
        const path = remote.require("path");

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
    
    const stringIsEmptyOrBlank = (string) => {
        //falsy values: null,undefined,0,000,"",false
        if (!string || (string.trim()).length === 0) {
            string = "Empty/blank/null string"
            console.log(string + " is empty, blank, null or undefined");
            return true;
        } //end if-statement
        else {
            console.log(string + " is not empty, blank, null or undefined");
            return false;
        } //end else-statement
    } //end stringIsEmptyOrBlank()

    const isNullOrUndefinedOrEmptyString = (element) => {
        if ( typeof(element) === "string" ) {
            if ( stringIsEmptyOrBlank(element) === true ) {
                return true;
            } else {
                return false;
            } //end inner else-statement
        } //end if-statement

        else if  (typeof(element) == "undefined" ) {
            return true;
        } else {
            return false;
        } //return false
    };

    const requireNodeJSmodule = (moduleName) => {
        if (typeof(moduleName) !== "string") {
            console.log("Please supply a string to requireNodeJSmodule!");
            return;
        } else {
            console.log(`require("${moduleName}")`);
            const electron = window.require("electron");
            const remote = electron.remote;
            
            return remote.require(moduleName); 
        } //end else-statement
        
    } //end requireNodeJSModule() 

    const whyDidYouUpdate = (optionsObject) => {
        const isDev = requireNodeJSmodule("electron-is-dev");
        if (isDev) {
          /*
            Optionally you can pass in options as a second parameter. The following options are available
            include: [RegExp]
            exclude: [RegExp]
            groupByComponent: boolean
            collapseComponentGroups: boolean
            notifier: (groupByComponent: boolean, collapseComponentGroups: boolean, displayName: string, diffs: [Object]) => void
        */
        let React = window.require("react");
        if (optionsObject) {
            console.log("whyDidYouUpdate w/ optionsObject");
            const { whyDidYouUpdate } = requireNodeJSmodule("why-did-you-update");
            whyDidYouUpdate(React, optionsObject);
          } //end inner if-statement
          else {
            console.log("whyDidYouUpdate");
            const { whyDidYouUpdate } = requireNodeJSmodule("why-did-you-update");
            whyDidYouUpdate(React);
          } //end else-statement
        } //end if-statement
    }; //end whyDidYouUpdate

    const functionsObject  = {
        openLinksInBrowser: openLinksInBrowser,
        canUseDOM: canUseDOM,
        popNotification: popNotification,
        stringIsEmptyOrBlank: stringIsEmptyOrBlank,
        requireNodeJSmodule: requireNodeJSmodule,
        whyDidYouUpdate: whyDidYouUpdate,
        isNullOrUndefinedOrEmptyString: isNullOrUndefinedOrEmptyString
    };

    return functionsObject;
}; //end utilityFunctions()
    
//Trying to encapsulate the utility functions inside a function appears to be a bit redudant...
let openLinksInBrowser = utilityFunctions().openLinksInBrowser;
let canUseDOM = utilityFunctions().canUseDOM;
let popNotification = utilityFunctions().popNotification;
let stringIsEmptyOrBlank = utilityFunctions().stringIsEmptyOrBlank;
let requireNodeJSmodule = utilityFunctions().requireNodeJSmodule;
let whyDidYouUpdate = utilityFunctions().whyDidYouUpdate;
let isNullOrUndefinedOrEmptyString = utilityFunctions().isNullOrUndefinedOrEmptyString;

export  { openLinksInBrowser, canUseDOM, popNotification, stringIsEmptyOrBlank, requireNodeJSmodule, whyDidYouUpdate, isNullOrUndefinedOrEmptyString };