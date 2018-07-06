import React from "react";

const wifiMagic = () => {
   const wifiIconSrc = "./img/icon-wifi.png";

    return(
        <section className="wiFi-magic">
            <img src={wifiIconSrc} className="img-responsive wiggle" id="wifiMagic-fixingIcon" />
            <p>Attempting repairs...</p>
        </section>
        );
};


export default wifiMagic;