import React, { Component } from "react";
import BackButton from "./BackButton.js";

class Header extends Component {
    render() {
        return(
            <header class="redToDarkRedgradient">
                    <a href="#"><img src="https://portal.centinela.k12.ca.us/images/CV-600x600.png" class="img-responsive" id="reagentLogo" alt="Centinela Valley Union High School District Logo" /></a>
                    <h1>Waypoint</h1>
                    <BackButton />
            </header>
        );
    }
}

export default Header;