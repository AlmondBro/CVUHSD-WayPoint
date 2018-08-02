import React, {Component} from "react";

import SupportSquare from "./SupportSquare.js";

class AutoFixTools extends Component {
    //Could use a for-loop (that iterates through an object of containing key-value pairs of the props) to make a general component? An idea for next time.
    render() {
        return( <p>AutoFix Tools:</p>,
                <div className="support-squares-container">
                    {/* {<Route path={this.props.match.url+"/wiFiMagic"} component={WiFiMagic} />} */}
                    <SupportSquare pageLink="/wiFiMagic" 
                                    icon="fas fa-wifi" 
                                    title="Wi-Fi Magic"
                                    imgSrc="./img/icon-wifi.png" 
                                    id="wiFi-magicButton" />

                    <SupportSquare pageLink="/ProjectorMagic" 
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