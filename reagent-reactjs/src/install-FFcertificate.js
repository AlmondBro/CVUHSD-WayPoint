import { requireNodeJSmodule} from "./utilityFunctions.js";

const nrc = requireNodeJSmodule("node-run-cmd");
const path = requireNodeJSmodule("path");
const { dialog, nativeImage } = requireNodeJSmodule("electron");


const installCertificate = () => {
    console.log("installCertificate()");

    const commandConsoleOutput = (data) => {
        console.log("Data:\t" + data);
    };

    const errorCallback = function(data) {
        console.log("Data:\t" + data);
    };

    nrc.run("./addFFCert/add-cert.cmd", { onData: commandConsoleOutput });

    const imagePath = path.join(__dirname, "./gallery-icon.png");
    console.log("imagePath:\t" + imagePath);

    const dialogIcon = nativeImage.createFromPath(imagePath);
    console.log("dialogIcon:\t" + JSON.stringify(dialogIcon));
    
    const dialogOptions = {
        title: "Firefox Certificate Added!",
        message: "Successfully installed the Centinela certificate",
        icon:  dialogIcon
    };

    dialog.showMessageBox(dialogOptions);
}

export default installCertificate; 