import React from "react";

//Import utility functions
import { openLinksInBrowser } from "../../utilityFunctions.js";

//Import 3rd-party libraries
import lifecycle from "react-pure-lifecycle";

var pagetitle = "QuickFix | Chrome OS";

const componentDidMount = (props) => {
    props.updateTitle(pagetitle);
    openLinksInBrowser("portalTutorials-webview");
} 

const methods = {
    componentDidMount,
    openLinksInBrowser
};

const QuickFixChromeOS = () => {
    return (
        <webview src="https://portal.centinela.k12.ca.us/troubleshooting.html" className="staff-portal-embed" id="portalTutorials-webview"></webview>
    );
}; //end quickFixChromeOS()


export default lifecycle(methods)(QuickFixChromeOS);