
import React, { Component } from "react";
class ProjectorMagic extends Component {
    constructor(props) {
        super(props);
        this.projectorMagicIcon = "./img/icon-projector.png";
        this.state = {
            message: "Click a button to clone or extend display."
        };
    }  

    displaySwitchExePath = "%windir%\\System32\\DisplaySwitch.exe";

    commandConsoleOutput = (data) => {
        console.log("Data:\t" + data);
    };

    extendDisplay = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const nrc = remote.require("node-run-cmd");

        console.log("Extend display");
        console.log("Path:\t" + this.displaySwitchExePath);
        nrc.run(  "ls", { onData: this.commandConsoleOutput });
        nrc.run(  "%windir%\\System32\\DisplaySwitch.exe \\extend", { onData: this.commandConsoleOutput });
        this.setState({ message: "Extended display" });
    } //end extendDisplay() method 

    cloneDisplay = () => {
        const electron = window.require("electron");
        const remote = electron.remote;
        const nrc = remote.require("node-run-cmd");

        console.log("Clone display");

        nrc.run(  "%windir%\\System32\\DisplaySwitch.exe \\clone", { onData: this.commandConsoleOutput });
        this.setState({ message: "Cloned display" });
    } //end cloneDisplay() method 

    componentDidMount() {
        console.log("Projector Magic component");
        document.getElementById("button-extend").addEventListener("click", this.extendDisplay);
        document.getElementById("button-clone").addEventListener("click", this.cloneDisplay);
    }

    render() {
        return (
            <section className="projector-magic">
                {/* <img src={this.projectorMagicIcon} className="img-responsive wiggle" id="wifiMagic-fixingIcon" /> */}
                <button className="redToDarkRedgradient waypoint-Button" id="button-extend">Extend</button>
                <button className="redToDarkRedgradient waypoint-Button" id="button-clone">Clone</button>
                <p>{this.state.message}</p>
            </section>
        );
    }
}


export default ProjectorMagic;