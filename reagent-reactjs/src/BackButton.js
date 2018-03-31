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
        return(<div class="back-button">
                    <a href="#"><i class="fa fa-angle-left"></i></a>
                </div>);
    }
}

export default BackButton;