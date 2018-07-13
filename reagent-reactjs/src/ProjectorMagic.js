
import React, { Component } from "react";

class ProjectorMagic extends Component {
    constructor(props) {
        super(props);
        this.projectorMagicIcon = "./img/icon-projector.png";
        }  
      }

      extendDisplay() {
        const electron = window.require("electron");
        const remote = electron.remote;
        const cmd = remote.require('node-cmd'); 
        const exec = remote.require('child_process').execFile;

        let displaySwitchExePath = "%windir%\\System32\\DisplaySwitch.exe /extend";
        cmd.get(
            displaySwitchExePath,
            function(err, data, stderr){
                console.log('Clone:\t', data);
            }
        );
    } 

      cloneDisplay() {
        const electron = window.require("electron");
        const remote = electron.remote;
        const cmd = remote.require('node-cmd'); 
        const exec = remote.require('child_process').execFile;

        let displaySwitchExePath = "%windir%\\System32\\DisplaySwitch.exe /clone";
        cmd.get(
            displaySwitchExePath,
            function(err, data, stderr){
                console.log('Clone:\t', data);
            }
        );
    }

    componentDidMount() {
        console.log("Projector Magic component");
        document.getElementById("button-extend").addEventListener("click", extendDisplay);
        document.getElementById("button-clone").addEventListener("click", cloneDisplay);
    }

    render() {
        return (
            <section className="wiFi-magic">
                {/* <img src={this.projectorMagicIcon} className="img-responsive wiggle" id="wifiMagic-fixingIcon" /> */}
                <button id="button-extend">Extend</button>
                <button id="button-clone">Clone</button>
                <p>Attempting repairs...</p>
                <p>{this.state.message}</p>
            </section>
            );
    }

}

export default ProjectorMagic;