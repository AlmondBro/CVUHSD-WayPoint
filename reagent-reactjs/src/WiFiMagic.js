import React from "react";

const wifiMagic = () => {
//    const wifiIconSrc = "./img/icon-wifi.png";
    const compassNeedle = "./img/compass-needle.svg";
    const compassBody = "./img/compass-body.svg";

    return(
        <section class="wiFi-magic">
            <img src={compassBody} className="" id="compass-body" />
            <img src={compassNeedle} className="compass-rotate" id="compass-needle" />
            <p>Finding the CV-Way...</p>
        </section>
        );
};


export default wifiMagic;