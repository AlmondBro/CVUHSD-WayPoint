import { requireNodeJSmodule} from "./utilityFunctions.js";

//Import NodeJS modules to be used
const path = requireNodeJSmodule("path");
const childProcess = requireNodeJSmodule("child_process");

const { dialog, nativeImage } = requireNodeJSmodule("electron");

const isDev = requireNodeJSmodule("electron-is-dev");
const publicOrBuild = isDev ? "public": "build";
const url = requireNodeJSmodule("url");

const installCertificate = () => {
    console.log("installCertificate()");

    const imagePath = path.join(`./${publicOrBuild}/img/firefox-white.png`);

    const dialogIcon = nativeImage.createFromPath(imagePath);
    console.log("dialogIcon:\t" + JSON.stringify(dialogIcon));

    const ffCertInstallPath = path.resolve(`./${publicOrBuild}/addFFCert/add-certs.cmd`);
    console.log("yolo:\t" + ffCertInstallPath);
    console.log("directory:\t" + __dirname);

    childProcess.exec(ffCertInstallPath, (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            
            const dialogOptions_success = {
                title: "Firefox Certificate Install Failed",
                message: "Failed to install the Centinela certificate. Please try again",
                icon:  dialogIcon
            };
        
            dialog.showMessageBox(dialogOptions_success);

            return 1;
        } else {
            console.log(stdout);

            const dialogOptions_success = {
                title: "Firefox Certificate Added!",
                message: stdout || ("Successfully installed the Centinela certificate"),
                icon:  dialogIcon
            };
        
            dialog.showMessageBox(dialogOptions_success);

            return 0;
        } 
    });
}; //end installCertificate()

export default installCertificate; 