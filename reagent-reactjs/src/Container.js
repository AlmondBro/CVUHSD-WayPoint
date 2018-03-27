import React, { Component } from "react";

class Container extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="reagent-container greyToDarkGreyGradient animated fadeInUp">
            {this.props.children}
            </div>
        );
    }
   
}

export default Container; 