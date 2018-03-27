import React, { Component } from "react";
class Frame extends Component {
    render() {
        return(
        [  
            <a href="index.html" class="home-button">
                <i class="fas fa-home"></i>
            </a>,
            <a href="#" class="close-button">
                <i class="fas fa-times"></i>
            </a>,
            <h2 class="window-title">Project reAgent</h2>
        ]
        );
    }
}

export default Frame; 