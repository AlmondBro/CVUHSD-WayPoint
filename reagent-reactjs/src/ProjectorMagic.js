
import React, { Component } from "react";

class ProjectorMagic extends Component {
    constructor(props) {
        super(props);
        this.pageTitle = "Projector Magic";
        this.projectorMagicIcon = "./img/icon-projector.png";
        this.state = {
            message: "Click a button to clone or extend display."
        };
    } //end constructor  

    convertSlashes = (string) => {
        let newString = "";
        for (let i = 0; i < string.length; i++ ) {
            if (string.substring(i, i+1) === "\\") {
                newString += "\\";

            } //end if-statement
            else {
                console.log("Substring:\t" + string.substring(i, i+1));
                newString += string.substring(i, i+1);
            }
        } //end for-loop
        console.log("newstring:\t" + newString);
        return newString;
    };
 
    displaySwitchExePath = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const process = remote.require("process");
        
        console.log("process.env:\t" + JSON.stringify(process.env));
        console.log("process.env[windir]:\t" + JSON.stringify(process.env["WINDIR"]));

        let driveRoot = (process.env["WINDIR"] || process.env["SystemRoot"] || "C:\\Windows" );
        console.log("DriveRoot:\t" + driveRoot);
        
        let displaySwitchExePath = this.convertSlashes(driveRoot) + "\\System32\\DisplaySwitch.exe";

        console.log("DisplaySwitchExe:\t" + displaySwitchExePath);
        return displaySwitchExePath;
    }; //end displaySwitchExePath()

    commandConsoleOutput = (data) => {
        console.log("Data:\t" + data);
    };

    extendDisplay = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const nrc = remote.require("node-run-cmd");

        console.log("Extend display");
        nrc.run( this.displaySwitchExePath() + " /extend", { onData: this.commandConsoleOutput });
        this.setState({ message: "Extended display" });
    }; //end extendDisplay() method 

    cloneDisplay = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const nrc = remote.require("node-run-cmd");

        console.log("Clone display");
        nrc.run(  this.displaySwitchExePath() + " /clone", { onData: this.commandConsoleOutput });
        this.setState({ message: "Cloned display" });
    }; //end cloneDisplay() method 

    componentDidMount = () => {
        this.props.updateTitle(this.pageTitle);
        this.props.renderFooter(false);
    }; //end componentDidMount()

    render = () => {
        return (
            <section className="projector-magic">
                {/* <img src={this.projectorMagicIcon} className="img-responsive wiggle" id="wifiMagic-fixingIcon" /> */}
                <button className="redToDarkRedgradient waypoint-Button" id="button-extend" onClick={this.extendDisplay} >Extend</button>
                <button className="redToDarkRedgradient waypoint-Button" id="button-clone" onClick={this.cloneDisplay} >Clone</button>
                <p>{this.state.message}</p>
            </section>
        );
    }; //end render()
} //end ProjectorMagic class

export default ProjectorMagic;