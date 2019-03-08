
/* Utility Functions to import into your JavaScript files for reuse! */
let path = require("path");

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

        
    let formatBytes = (bytes, decimals) => {
        if (bytes == 0) {
            return '0 Bytes';
        } 
    
        var baseSize = 1024;
        var decimalPlaces = ( decimals <= 0 || typeof(decimals) != "undefined" ) ? 0 : decimals || 2;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        
        var i = Math.floor(Math.log(bytes) / Math.log(baseSize));
        return parseFloat((bytes / Math.pow(baseSize, i)).toFixed(decimalPlaces)) + ' ' + sizes[i];
    };
    

    let popNotification = (notificationTitle, notificationMessage, iconPath, soundOn, noWait) => {
        //User notifier NPM module since the native Electron Notifications is not working
        
        const notifier = require("node-notifier");
        const path = require("path");

        const  {asar} = require("./../package.json").build;
        path.resolve("./resources/app"+`${asar ? ".asar" : ""}`+`/build/img/wp-icon-grey.ico`);

        let notifierOptions = {
            title: notificationTitle || "Title",
            message: notificationMessage || "Message",
            icon: path.join(__dirname, "./../public/img/wp-icon-grey.png"), // Absolute path (doesn't work on balloons)
            sound: soundOn || true, // Only Notification Center or Windows Toasters
            wait: noWait || false, // Wait with callback, until user action is taken against notification
            type: 'info' 
        };

        console.log("Node notifier icon path:\t" + path.resolve(__dirname, "./img/wp-icon-grey.ico"));

        let callback = (error, response) => {
            // Response is response from notification
            console.log("Notifier response:\t" + response );
            console.log("Notifier errors:\t" + error );
        };

        return notifier.notify(notifierOptions, callback);
    }; //popNotification()
    
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
    }; //end stringIsEmptyOrBlank()

    const isNullOrUndefinedOrEmptyString = (element) => {
        if ( typeof(element) === "string" ) {
            if ( stringIsEmptyOrBlank(element) === true ) {
                return true;
            } else {
                return false;
            } //end inner else-statement
        } //end if-statement

        else if  (typeof(element) === "undefined" ) {
            return true;
        } else {
            return false;
        } //return false
    };

    const requireNodeJSmodule = (moduleName) => {
        if ( typeof(moduleName) !== "string" ) {
            console.log("Please supply a string to requireNodeJSmodule!");
            return;
        } else {
            console.log(`require("${moduleName}")`);
            const electron = window.require("electron");
            const remote = electron.remote;
            
            return remote.require(moduleName); 
        } //end else-statement
    }; //end requireNodeJSModule() 

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
        isNullOrUndefinedOrEmptyString: isNullOrUndefinedOrEmptyString,
        formatBytes: formatBytes
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
let formatBytes = utilityFunctions().formatBytes;

export  { openLinksInBrowser, canUseDOM, popNotification, stringIsEmptyOrBlank, requireNodeJSmodule, whyDidYouUpdate, isNullOrUndefinedOrEmptyString, formatBytes };