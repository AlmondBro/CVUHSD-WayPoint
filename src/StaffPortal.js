import React from "react";

//Import utility functions
import { openLinksInBrowser } from "./utilityFunctions.js";

//Import 3rd-party libraries
import lifecycle from "react-pure-lifecycle";

var pagetitle = "Staff Portal";

const componentDidMount = (props) => {
    props.updateTitle(pagetitle);
    openLinksInBrowser("portal-webview");
    props.renderFooter(false);
} 

const methods = {
    componentDidMount,
    openLinksInBrowser
};

const StaffPortal = () => {
    if (document.body.contains(document.querySelector("div.blur-effect") ) ) {
        document.querySelector("div.blur-effect").style.maxWidth = "100%";
    }

    return (
        <webview src="https://portal.centinela.k12.ca.us/staff.html" className="staff-portal-embed" id="portal-webview"></webview>
    );
};

export default lifecycle(methods)(StaffPortal);