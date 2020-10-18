import { formatBytes } from "./utilityFunctions.js";
const electron = require("electron");
require("dotenv").config();

// Module to control application life.
const { app } = electron; //ES6 Destructuring -- Same as const app = electron.app

// Module to create native browser window.
const { BrowserWindow } = electron; //ES6 Destructuring -- Same as const BrowserWindow = electron.BrowserWindow

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev"); 

const { nativeImage, ipcMain } = require("electron");

const { autoUpdater } = require("electron-updater"); 
// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'info';
// log.info('App starting...');

/*Keep a global reference of the electron window object, if you don't, the window will
 be closed automatically when the JavaScript object is garbage collected. */
let mainWindow = null;
let tray = null;

process.env['APP_PATH'] = app.getAppPath();

let installExtension, 
    REACT_DEVELOPER_TOOLS;

let sendStatusToWindow = (message, addNotification, urgent, notificationText, faIconClassName, image) => {
    console.log("sendStatusToWindow() message:\t" + message);
    if ( typeof mainWindow !== "undefined" || mainWindow !== null) {
        mainWindow.webContents.on("did-finish-load", () => { 
            mainWindow.webContents.send("sendStatus", message, addNotification, urgent, notificationText, faIconClassName, image);
        });
    } 
    else {
        return;
    }
}; //sendStatusToWindow()

let sendLastUpdateTime = () => {
    let convertHourFormat = (numberOfHours) => {
        //If numberOfHours is more than 12, subtract 12 to get the time in the afternoon.
        if (numberOfHours > 12)  {
            return numberofHours - 12;
        }

        //If numberOfHours is 0, it is either noon or midnight.
        if (numberOfHours === 0) {
            return 12;
        }
    }; //convertHourFormat()

    let getAMorPM = (numberOfHours) => {
        if (numberOfHours > 12) {
            return "PM";
        } else {
            return "AM";
        }
    }; //getAMorPM()

    let date = new Date();
    let currentDate = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    
    let time = convertHourFormat(date.getHours()) + ":" + date.getMinutes() + ":" + today.getSeconds() +"\t" + getAMorPM(date.getHours());

    if ( typeof mainWindow !== "undefined" || mainWindow !== null) {
        mainWindow.webContents.on("did-finish-load", () => { 
            mainWindow.webContents.send("sendLastUpdateTime", currentDate, time);
        });
    } else {
        return;
    } //end else-statement
}; //sendLastUpdateTime()

const autoUpdate = () => {
   // console.log("GH_TOKEN:\t" + process.env.GH_TOKEN);

    let WP_nativeImage = isDev ? nativeImage.createFromPath(path.join(__dirname, "./../public/img/wp-icon-grey.png")) : nativeImage.createFromPath(path.join(__dirname, "./../build/img/wp-icon-grey.png"));

    sendStatusToWindow("autoUpdate() called");

    autoUpdater.allowPrerelease = true;
    autoUpdater.allowDowngrade  = true;
    autoUpdater.autoDownload = true;
    autoUpdater.fullChangelog = true; //default is false
    autoUpdater.isForceRunAfter = false;
    autoUpdater.isSilent = false; //default is false. 
    autoUpdater.autoInstallOnAppQuit = false; //default is true

    const setFeedURLOptions = {
        provider: "github",
        token: process.env.GH_TOKEN,
        owner: "JuanDavidLopez95",
        repo: "CVUHSD-WayPoint"
    };

    autoUpdater.setFeedURL(setFeedURLOptions);

    //autoUpdater.checkForUpdates();
    console.log("autoupdate module\t:" + JSON.stringify(autoUpdate));
    //autoUpdater.autoDownload = true;

    sendStatusToWindow("hello()");

    autoUpdater.on('checking-for-update', (event) => {
        sendStatusToWindow('Checking for update...',true, true, "Checking for update...");
        //console.log("Info:\2t" + JSON.stringify(info));
    });
    
    autoUpdater.on('update-available', (updateInfo) => {
        /*
            UpdateInfo
        */
        sendStatusToWindow(`updateInfo:\t + ${JSON.stringify(updateInfo)}`);;
        sendStatusToWindow(`Release notes:\t ${updateInfo.releaseNotes}`);
        sendStatusToWindow(`Release name:\t ${updateInfo.releaseName}`);
        sendStatusToWindow(`Release date:\t ${updateInfo.releaseDate}`);

        sendStatusToWindow("Update available", true, true, "Update available"); //Add notification that there is an update available

        tray.displayBalloon({
            title: "WayPoint update available.",
            content: "Update will be downloaded.",
            icon: WP_nativeImage
        });
    });
    
    autoUpdater.on('update-not-available', (event, info) => {
        sendStatusToWindow("Update not available");
       // console.log("Info:\t" + JSON.stringify(info));
    });
    
    autoUpdater.on('error', (event, err) => {
        sendStatusToWindow("Error in auto-updater:\t" + err.toString());
        //console.log("Info:\t" + JSON.stringify(info));
    });
    
    autoUpdater.on('download-progress', (progressObj) => {
        let log_message = "Download speed: " + formatBytes(progressObj.bytesPerSecond) + "/s";
            log_message = log_message + ' Downloaded: ' + progressObj.percent.toFixed(0).toString() + '%';
            log_message = log_message + ' (' + formatBytes(progressObj.transferred) + "/" + formatBytes(progressObj.total) + ')';
        
        sendStatusToWindow("Download progress..." + log_message);

        tray.displayBalloon({
            title: "Update Download Progress",
            content: log_message,
            icon: WP_nativeImage
        });
    });
    
    autoUpdater.on('update-downloaded', (event) => {
        sendStatusToWindow("Update downloaded; will install in 5 seconds");

        tray.displayBalloon({
            title: "Update downloaded",
            content: "Will install in 5 seconds",
            icon: WP_nativeImage
        });

        setTimeout(() => {
            if (!isDev) {
                //sendLastUpdateTime();
                autoUpdater.quitAndInstall();  
            } 
        }, 5000);
    });
    
};

const createWindow = () => {
    // Create the browser window.
    //Show:false key-value pair is to delay loading until all resources have been loaded.
    mainWindow = new BrowserWindow({
        title: "WayPoint", //Title of window whe frame is enabled
        width: 376, 
        height: 700, 
        frame: false, 
        fullscreen: false, 
        resizable: false, 
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        show: false,
        skipTaskbar: false, //whether to show window in taskbar
        backgroundColor: "black",
        icon: isDev ? nativeImage.createFromPath(path.join(__dirname, "./../public/img/wp-icon-grey.png")) : nativeImage.createFromPath(path.join(__dirname, "./../build/img/wp-icon-grey.png"))
    });

    // ../public/img/wp-icon-grey.ico
    // ./gallery-icon.png
    const startUrl = isDev ? (process.env.ELECTRON_START_URL || "http://localhost:3000") : url.format({
        pathname: path.join(__dirname, "./../build/index.html"),
        protocol: "file:",
        slashes: true
    });

    //console.log(JSON.stringify(process.env)); //Log the environment variables
    console.log("process.env.ELECTRON_START_URL:\t" + process.env.ELECTRON_START_URL);
    // and load the index.html of the app.
    //mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.loadURL(startUrl);

    // Install the React tools, but only in development
    let prodDebug = true;
    if (isDev || prodDebug) {
         // Open the DevTools.
        mainWindow.webContents.openDevTools();
    } //end if-statement

    /*
    when everything is loaded, show the window and focus it so it pops up for the 
    user. You can do this with the “ready-to-show” event on your `BrowserWindow`, 
    which is recommended, or the ‘did-finish-load’ event on your webContents.
    * https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff
    */
    mainWindow.on("ready-to-show", () => { 
        mainWindow.show(); 
        mainWindow.focus(); 
        console.log(`App Path:\t ${app.getAppPath()}`);
    });  

    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
        /* Dereference the window object, usually you would store windows
            in an array if your app supports multi windows, this is the time
            when you should delete the corresponding element. */
        mainWindow = null;
    });

    //Always show the tray icon when the mainWindow is hidden
    mainWindow.on("hide", () => {
        if (tray) {
            tray.setHighlightMode("always");
        }
    });

    //Override minimize and close window functions to tray
    mainWindow.on("minimize", (event) => {
        event.preventDefault();
        mainWindow.minimize();
    });
    
    mainWindow.on("close", (event) => {
        if (tray) {
            if(!app.isQuitting) {
                event.preventDefault();
                mainWindow.hide();
            } //end inner if-statement
        } //end outer if-statement
        else {
           app.isQuitting = true;
           tray = null;
           mainWindow = null;
           app.quit();
        }
        return false;
    });

    autoUpdate();
} //end createWindow()

const setTrayIcon = () => {
    const {Menu, Tray, app, nativeImage} = require("electron");

    //let tray = null;
    //or use extraresources field in electron-builder package.json to bundle the icon
    const iconPath = isDev ? path.join(__dirname, "../public/img/wp-icon-grey-16x16.ico") : path.join(__dirname, "../build/img/wp-icon-grey-16x16.ico");
    
    tray = new Tray(nativeImage.createFromPath(iconPath));

    const contextMenu = Menu.buildFromTemplate([
        {   label: "Show WayPoint", 
            click:  () => {
                mainWindow.show();
            } //end click()
        },
        { label: "Quit", 
          click:  () => {
                app.isQuitting = true;
                 /* On OS X it is common for applications and their menu bar
                    to stay active until the user quits explicitly with Cmd + Q */
               /* if (process.platform !== "darwin") {
                    app.quit();
                } */
                if ( !tray.isDestroyed() ) {
                    tray.destroy();
                }
                tray = null;
                app.quit();
                mainWindow = null;
            } //end click()
        }
    ]); //contextMenu declaration

    tray.setToolTip("CVUHSD WayPoint");
    tray.setContextMenu(contextMenu);
    console.log("Set Tray Icon");

    tray.on("click", () => {
        mainWindow.show();
    });

    mainWindow.isVisible() ? tray.setHighlightMode("never") : tray.setHighlightMode("always");
}; //end setTrayIcon()

//Prevent user from launching two different instances of the app.
const preventMoreThanOneInstance = () => {
    const appSingleInstanceLock = app.requestSingleInstanceLock();

    if (!appSingleInstanceLock) {
        app.quit();
        return;
    } else {
        if (mainWindow) {
            if ( mainWindow.isMinimized() ) { 
                mainWindow.restore();
                mainWindow.show(); 
                mainWindow.focus(); 
              } // end inner if-statement
            mainWindow.focus();
          } //end outer if statement
    }
}; //preventMoreThanOneInstance()


var ws = require("windows-shortcuts");
ws.create("%APPDATA%/Microsoft/Windows/Start Menu/Programs/Electron.lnk", process.execPath);

/* Set app user model ID and setAsDefaultProtocol for windows notifications to run 
    Issue: https://github.com/electron/electron/issues/10864    
*/
//(`${./../package.json build.appId}` || "com.waypoint");

app.setAsDefaultProtocolClient("waypoint");

/*  This method will be called when Electron has finished
    initialization and is ready to create browser windows.
    Some APIs can only be used after this event occurs. 
    Trying out using async/wait here -- may need to remove */

app.on("ready", async () => {
    createWindow();

    if (isDev) {
        const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
        
        installExtension(REACT_DEVELOPER_TOOLS)
          .then(name => console.log(`Added Extension:  ${name}`))
          .catch(error => console.log(`An error occurred: , ${error}`));
      }

    await preventMoreThanOneInstance();

   /* await electron.protocol.registerServiceWorkerSchemes(["file:"]);
    ///* Register the file protocol as supported
        electron.webFrame.registerURLSchemeAsPrivileged("file");
        electron.webFrame.registerURLSchemeAsSecure("file");
        electron.webFrame.registerURLSchemeAsBypassingCSP("file"); */
    // */
   await setTrayIcon();
   //await autoUpdate();
   autoUpdater.checkForUpdates();

   const checkforUpdates_minutes = 1000*60*60; //1 hour - milliseconds => seconds in a minutes => minutes in a second
   setInterval(() => {
    autoUpdater.checkForUpdates()
   }, checkforUpdates_minutes );
   
   //sendStatusToWindow("Tessssttttinggg");
   ipcMain.on('toMainProcess', (event, monitorName, status, image) => {
        console.log(`toMainProcess received. ${monitorName} is ${status}. ImagePath is ${image}.Sending info to mainWindow`);
        // event.sender.send('toMainWindow', monitorName, status); //Sends event to window that sent it
        mainWindow.webContents.send("toMainWindow", monitorName, status, image);
        console.log("toMainWindow sending");
    });
});


// Quit when all windows are closed.
app.on("window-all-closed", () => {
    /* On OS X it is common for applications and their menu bar
    to stay active until the user quits explicitly with Cmd + Q */
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    /* On OS X it's common to re-create a window in the app when the
        dock icon is clicked and there are no other windows open. */
    if (mainWindow === null) {
        createWindow();
    }
});

//Prevent the creation of WebViews with insecure options
app.on("web-contents-created", (event, contents) => {
    contents.on("will-attach-webview", (event, webPreferences, params) => {
      // Strip away preload scripts if unused or verify their location is legitimate
      delete webPreferences.preload;
      delete webPreferences.preloadURL;
  
      // Disable Node.js integration
      webPreferences.nodeIntegration = false;

      // Verify URL being loaded
   /* if ( !params.src.startsWith("https://portal.centinela.k12.ca.us/staff.html") ) {
        event.preventDefault();
      }  //end if-statement
    else if ( !params.src.startsWith("https://portal.centinela.k12.ca.us/troubleshooting.html") ) {
        event.preventDefault();
      }  //end if-statement  */
    }); //end contents.on()
  });//end app.on

  /* Open the app when a user logins. Takes a settings object as an argument. 
    Docs: https://electronjs.org/docs/api/app#appsetloginitemsettingssettings-macos-windows
*/
app.setLoginItemSettings({
    "openAtLogin": true,
    "openAsHidden": false
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
/* window.eval = global.eval = function () {
   throw new Error(`Sorry, this app does not support window.eval().`)
  } 
  
  window.eval = global.eval = () => {
    console.error(`Sorry, this app does not support window.eval() for security purposes.`);
    return -1;
}; 

  
  */

