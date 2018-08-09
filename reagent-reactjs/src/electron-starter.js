const electron = require('electron');
const remote = electron.remote;
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev'); 

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 376, 
        height: 700, 
        frame: false, 
        fullscreen: false, 
        resizable: false, 
        webPreferences: {
            nodeIntegration: true,
        },
        icon: path.join(__dirname, "../public/img/wp-icon-grey.png")
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true
    });

    // and load the index.html of the app.
    //mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.loadURL(startUrl);

    if (isDev) {
        //require('electron-react-devtools').install(); // can only be installed through renderer process
        console.log("Devtron installed");
        require("devtron").install();
      }

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
} //end createWindow()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

app.on('ready', () => {
    electron.protocol.registerServiceWorkerSchemes(['file:']);
});

//Prevent the creation of WebViews with insecure options
app.on('web-contents-created', (event, contents) => {
    contents.on('will-attach-webview', (event, webPreferences, params) => {
      // Strip away preload scripts if unused or verify their location is legitimate
      delete webPreferences.preload;
      delete webPreferences.preloadURL;
  
      // Disable Node.js integration
      webPreferences.nodeIntegration = false;
  
      // Verify URL being loaded
      if (!params.src.startsWith('https://portal.centinela.k12.ca.us/staff.html')) {
        event.preventDefault();
      } //end if-statement
    }); //end contents.on()
  });//end app.on


/* //Register the file protocol as supported
electron.webFrame.registerURLSchemeAsPrivileged('file');
electron.webFrame.registerURLSchemeAsSecure('file');
electron.webFrame.registerURLSchemeAsBypassingCSP('file');
*/


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
/* window.eval = global.eval = function () {
   throw new Error(`Sorry, this app does not support window.eval().`)
  } */