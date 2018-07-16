import React from "react";

const wifiMagic = () => {
//    const wifiIconSrc = "./img/icon-wifi.png";
    const compassNeedle = "./img/compass-needle.svg";
    const compassBody = "./img/compass-body.svg";

    return(
        <section class="wiFi-magic">
            <img src={compassNeedle} className="needle-rotate" id="compass-needle" />
            <img src={compassBody} className="" id="compass-body" />
            <p id="compass-message">Finding the CV-Way...</p>
        </section>
        );
};


export default wifiMagic;