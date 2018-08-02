import React from "react";

//Import required external components
import SupportSquare from "./SupportSquare.js";

const helpDesk = (props) => {
    return (
        <div className="support-squares-container">
            <SupportSquare pageLink="tel:+01-310-263-3200;ext=7398" 
                        icon="fas fa-phone-square" 
                        title="Helpdesk Hotline"
                        id="helpdeskHotline-supportSquare"
                        imgSrc="./img/icon-building2.png" />

            <SupportSquare pageLink="tel:+01-310-263-3100" 
                        icon="fas fa-building" 
                        title="Lawndale" 
                        imgSrc="./img/icon-building2.png" />

            <SupportSquare pageLink="tel:+01-310-263-2346" 
                        icon="fas fa-building" 
                        title="Leuzinger" 
                        imgSrc="./img/icon-building2.png" />

            <SupportSquare pageLink="tel:+01-310263-3286" 
                        icon="fas fa-building" 
                        title="Hawthorne" 
                        imgSrc="./img/icon-building2.png" />

            <SupportSquare pageLink="tel:+01-310-263-3286" 
                icon="fas fa-building" 
                title="Lloyde" 
                imgSrc="./img/icon-building2.png" />      

            </div>
        );
}

export default helpDesk;