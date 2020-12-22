import React, { Fragment, useEffect, useState } from 'react';

//Import styled-components
import SupportSquare from './../SupportSquare/SupportSquare.js';

//Import InstallFirefoxCertificate() function
import installCertificate from './../install-FFcertificate.js';

const AutoFixTools = ({ updateTitle, renderFooter }) => {
        let pageTitle = "AutoFix Tools";

        let [ supportSquares, setSupportSquares ] = useState([]);
 
        let supportSquaresInfo = [
                {
                        pageLink: "/wiFiMagic",
                        icon: "fas fa-wifi",
                        title: "Wi-FI Magic",
                        imgSrc: "./img/icon-wifi.png",
                        id: "wiFi-magic-button"
                },
                {
                        pageLink: "/ProjectorMagic",
                        icon: "fas fa-desktop",
                        title: "Audio Magic",
                        imgSrc: "./img/icon-projector.png",
                        id: "projector-magic-button"
                },
                {
                        pageLink: "#",
                        icon: "far fa-file-audio",
                        title: "Projector Magic",
                        imgSrc: "./img/icon-audio.png",
                        id: "audio-magic-button"
                },
                {
                        pageLink: "#",
                        icon: "fas fa-print",
                        title: "Printer Magic",
                        imgSrc: "./img/icon-printer.png",
                        id: "printer-magic-button"
                },
                {
                        pageLink: "#",
                        icon: "fab fa-firefox",
                        title: "Install Certificate",
                        imgSrc: "./img/firefox-white.png",
                        id: "printer-magic-button",
                        onClick: installCertificate 
                },
        ];

        const generateSquares = () => {
                let supportSquares = [];

                supportSquaresInfo.forEach((squareInfo, index) => {
                        supportSquares.push(
                                (<SupportSquare 
                                        pageLink        = {squareInfo.pageLink } 
                                        icon            = {squareInfo.icon }
                                        title           = {squareInfo.title }
                                        imgSrc          = {squareInfo.imgSrc }
                                        id              = {squareInfo.id }
                                        onClick         = { squareInfo.onClick }

                                        key             = { index }
                                />)
                        ); //end push()
                }); //end forEach()

                return supportSquares;
        }; //end generateSquares

        useEffect(() => {
                updateTitle(pageTitle); 
                renderFooter(false);
                
                setSupportSquares(generateSquares());
        }, []);
        
        //Passing props in React Router: https://github.com/ReactTraining/react-router/issues/4105
        //Could use a for-loop (that iterates through an object of containing key-value pairs of the props) to make a general component? An idea for next time.
        return ( 
                <Fragment>
                        { supportSquares  }
                </Fragment>
        ); //end return statement
}; //end AutoFixTools()

export default AutoFixTools;