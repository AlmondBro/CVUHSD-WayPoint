import React, { Component } from "react";

class BackButton extends Component {
    constructor(props) {
        super(props);
    }

    //Example from https://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
     }
    
    render() {
        return(
            <div className="messageAndGoBack-container">
                <a className="goBack-container" href="#" onClick={this.context.router.history.goBack}>
                    <img src="img/icon-back.png" id="back-icon" title="Go Back One Page" />
                    <p>Back</p>
                </a>
                {/* <p className="optionMessage">Please select an option:</p> */}
            </div>
        );
    }
}

export default BackButton;