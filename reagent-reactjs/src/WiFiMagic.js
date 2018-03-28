import React, { Component } from "react";

class WiFiMagic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <section class="wiFi-magic">
            <i class="fas fa-wifi wiggle"></i>
            <p>Attempting repairs...</p>
        </section>
        );
    }
}

export default WiFiMagic;