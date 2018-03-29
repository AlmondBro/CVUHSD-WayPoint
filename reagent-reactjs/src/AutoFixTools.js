import React, {Component} from "react";

import SupportSquaresContainer from "./SupportSquaresContainer.js";
import SupportSquare from "./SupportSquare.js";

class AutoFixTools extends Component {
    //Could use a for-loop (that iterates through an object of containing key-value pairs of the props) to make a general component? An idea for next time.
    render() {
        return(<p>AutoFix Tools:</p>,

            <SupportSquaresContainer>
                 <SupportSquare pageLink="/wiFiMagic" 
                                icon="fas fa-wifi" 
                                title="Wi-Fi Magic" />

                <SupportSquare pageLink="#" 
                        icon="fas fa-desktop" 
                        title="Projector Magic" />

                <SupportSquare pageLink="#" 
                        icon="far fa-file-audio" 
                        title="Audio Magic" />

                <SupportSquare pageLink="#" 
                icon="fas fa-print" 
                title="Printer Magic" />

                <SupportSquare pageLink="#" 
                icon="fas fa-question-circle" 
                title="Autofix" />

                <SupportSquare pageLink="#" 
                icon="fas fa-question-circle" 
                title="Autogix" />
 
             </SupportSquaresContainer>);
    }
}

export default AutoFixTools;