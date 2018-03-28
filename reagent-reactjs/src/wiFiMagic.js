import React, { Component } from "react";

class wiFiMagic extends Component {
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