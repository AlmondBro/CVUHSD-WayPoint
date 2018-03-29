import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
class Frame extends Component {
    render() {
        return(
        [  
            <NavLink to="/" class="home-button">
                <i class="fas fa-home"></i>
            </NavLink>,
            <a href="#" class="close-button">
                <i class="fas fa-times"></i>
            </a>,
            <h2 class="window-title">Project reAgent</h2>
        ]
        );
    }
}

export default Frame; 