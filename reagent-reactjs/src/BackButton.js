import React, { Component } from "react";

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    onBackButtonEvent(e) {
        e.preventDefault();
        window.history.go(-1);
        console.log("onBackButtonEvent(e)");
    }
      
    componentDidMount() {
        window.onpopstate = this.onBackButtonEvent;
    }

    render() {
        return(
            <div class="messageAndGoBack-container">
                <a class="goBack-container" href="#">
                    <img src="img/icon-back.png" id="back-icon" title="Go Back One Page" />
                    <p>Back</p>
                </a>
                <p class="optionMessage">Please select an option:</p>
            </div>
        );
    }
}

export default BackButton;