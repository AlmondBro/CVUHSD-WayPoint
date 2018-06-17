import React, {Component} from "react";
import {Route, BrowserRouter} from "react-router-dom";

import SupportSquare from "./SupportSquare.js";
import WiFiMagic from "./WiFiMagic.js";

class AutoFixTools extends Component {
    //Could use a for-loop (that iterates through an object of containing key-value pairs of the props) to make a general component? An idea for next time.
    render() {
        console.log("Props:\t\n"+this.props);
        return( <p>AutoFix Tools:</p>,
                <div class="support-squares-container">
                    {/* {<Route path={this.props.match.url+"/wiFiMagic"} component={WiFiMagic} />} */}
                    <SupportSquare pageLink="/wiFiMagic" 
                                    icon="fas fa-wifi" 
                                    title="Wi-Fi Magic"
                                    imgSrc="./img/icon-wifi.png" />

                    <SupportSquare pageLink="#" 
                            icon="fas fa-desktop" 
                            title="Projector Magic"
                            imgSrc="./img/icon-projector.png" />

                    <SupportSquare pageLink="#" 
                            icon="far fa-file-audio" 
                            title="Audio Magic"
                            imgSrc="./img/icon-audio.png"  />

                    <SupportSquare pageLink="#" 
                        icon="fas fa-print" 
                        title="Printer Magic"
                        imgSrc="./img/icon-printer.png"  />
                </div>);
    }
}

export default AutoFixTools;