import React from "react";

//Import required external components
import SupportSquare from "./SupportSquare.js";

//Import 3rd-party libraries
import lifecycle from "react-pure-lifecycle";

var pagetitle = "Call Helpdesk";

const componentDidMount = (props) => {
    props.updateTitle(pagetitle);
    props.renderFooter(false);
}

const methods = {
    componentDidMount
};

const HelpDesk = (props) => {
    return (
        <div className="support-squares-container">
            <SupportSquare phone="tel:+01-310-263-3200;ext=7398" 
                        icon="fas fa-phone-square" 
                        title="Helpdesk Hotline"
                        id="helpdeskHotline-supportSquare"
                        imgSrc="./img/icon-building2.png" 
                        ext="3290"/>

            <SupportSquare phone="tel:+01-310-263-3200;ext=4413" 
                        icon="fas fa-building" 
                        title="Lawndale" 
                        imgSrc="./img/icon-lawndale.png" 
                        ext="4413"/>

            <SupportSquare phone="tel:+01-310-263-3200;ext=7395" 
                        icon="fas fa-building" 
                        title="Kevin" 
                        imgSrc="./img/icon-leuzinger.png"
                        ext="7395" />

            <SupportSquare phone="tel:+01-310-263-3200;ext=2346" 
                        icon="fas fa-building" 
                        title="Hawthorne" 
                        imgSrc="./img/icon-hawthorne.png" 
                        ext="2346"/>

            <SupportSquare phone="tel:+01-310-263-3200;ext=3286" 
                icon="fas fa-building" 
                title="Lloyde" 
                imgSrc="./img/icon-building2.png"
                ext="3286" />      

            </div>
        );
}

export default lifecycle(methods)(HelpDesk);