import { requireNodeJSmodule} from "./utilityFunctions.js";

//Import NodeJS modules to be used
const path = window.require("path");
const childProcess = window.require("child_process");

const { dialog, nativeImage } = requireNodeJSmodule("electron");

const isDev = window.require("electron-is-dev");

const publicOrBuild = isDev ? "public": "build";

const installCertificate = () => {
    console.log("installCertificate()");

    const image = "lil-kev.png";
    //Looks like paths are relative to the WayPoint.exe in the "dist" folder in production. Use just "app" instead of "app.asar" if not using the asar option.
    const imagePath = isDev ? path.resolve(`./${publicOrBuild}/img/${image}`) :  path.resolve(`./resources/app.asar/build/img/${image}`);

    const dialogIcon = nativeImage.createFromPath(imagePath);

    console.log("\nImagePath:\t" + imagePath);
    console.log("dialogIcon:\t" + JSON.stringify(dialogIcon));

    const ffCertInstallPath = path.resolve(`./${publicOrBuild}/addFFCert/add-certs.cmd`);
    console.log("ffCertInstallPath:\t" + ffCertInstallPath);
    console.log("__dirname:\t" + __dirname);
    console.log(`Current directory (process.cwd()): ${process.cwd()}`);

    // console.log(`lil-kev Path:\t ${app.getPath(image)}`);
    // console.log(`Exe Path:\t ${app.getPath("exe")}`);
    // console.log(`App Path:\t ${app.getAppPath()}`);

    childProcess.exec(ffCertInstallPath, (error, stdout, stderr) => {
        if (error) {
            console.log(error);
            
            const dialogOptions_error = {
                title: "Firefox Certificate Install Failed",
                message: "Failed to install the Centinela certificate. Please try again",
                type: "error",
            };
        
            dialog.showMessageBox(dialogOptions_error);

            return 1;
        } else {
            console.log(stdout);

            const dialogOptions_success = {
                title: "Firefox Certificate Added!",
                message: stdout || ("Successfully installed the Centinela certificate. Please restart your browser"),
                icon:  dialogIcon
            };
        
            dialog.showMessageBox(dialogOptions_success);

            return 0;
        } 
    });
}; //end installCertificate()

export default installCertificate; 