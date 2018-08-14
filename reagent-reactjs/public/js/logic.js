/*window.eval = global.eval = function () {
    throw new Error(`Sorry, this app does not support window.eval().`)
  } */

console.log("Logic.js file attached.");
  
window.eval = () => {
    throw new Error(`Sorry, this app does not support window.eval() for secuirt purposes.`);
} 

window.addEventListener("load", () => {
    console.log("Window loaded -- Logic.js");

    //Guess the electron and remote modules are not needed!
    //const electron = window.require("electron");
    //const remote = electron.remote;
    const isDev = require('electron-is-dev'); 
    
    if (isDev) {
        require('electron-react-devtools').install();
        console.log("Renderer process - electron-react-devtools ready to be installed");
    }

    const minimizeAndClose = (() => { 
        document.getElementById("button-minimize").addEventListener("click", function (e){
            console.log("Button minimize");
            const electron = window.require("electron");
            const remote = electron.remote;

            const browserWindow = remote.getCurrentWindow();
            browserWindow.minimize(); 
        });

        document.getElementById("button-close").addEventListener("click", (e) => {
            const electron = window.require("electron");
            const remote = electron.remote;
            const browserWindow = remote.getCurrentWindow();

            browserWindow.close();
        }); 
    })(); 

    document.onreadystatechange = () => {
        if (document.readyState == "complete") {
            minimizeAndClose(); 
        } //end if-statement
    } //end onreadystatechange()

}); //end window.onload
   