import { requireNodeJSmodule} from "./utilityFunctions.js";

//Import NodeJS modules to be used
const path = requireNodeJSmodule("path");
const childProcess = requireNodeJSmodule("child_process");

const { dialog, nativeImage } = requireNodeJSmodule("electron");

const isDev = requireNodeJSmodule("electron-is-dev");
const url = requireNodeJSmodule("url");

const publicOrBuild = isDev ? "public": "build";

const installCertificate = () => {
    console.log("installCertificate()");

    const image = "lil-kev.png";
    const imagePath = isDev ? path.join(`./${publicOrBuild}/img/${image}`) : (`./img/${image}`);

    const dialogIcon = nativeImage.createFromPath(imagePath);
    console.log("dialogIcon:\t" + JSON.stringify(dialogIcon));

    const ffCertInstallPath = path.resolve(`./${publicOrBuild}/addFFCert/add-certs.cmd`);
    console.log("ffCertInstallPath:\t" + ffCertInstallPath);
    console.log("__dirname:\t" + __dirname);

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