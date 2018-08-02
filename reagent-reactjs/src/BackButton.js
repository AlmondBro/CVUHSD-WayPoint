import React, { Component } from "react";

class BackButton extends Component {
    //Example from https://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
     }
    
    render() {
        console.log("History:\t" + JSON.stringify(this.context.router.history));
        
        if (this.context.router.history.location.pathname == "/") {
            // return (
            //     <div className="messageAndGoBack-container">
            //         <p className="optionMessage">Please select an option:</p>
            //     </div>);
            return null;
        }

        else {
            return(
                <div className="messageAndGoBack-container">
                    <a className="goBack-container" onClick={this.context.router.history.goBack}>
                        <img src="img/icon-back.png" id="back-icon" title="Go Back One Page" alt="Go Back Button" />
                        <p>Back</p>
                    </a>
                    {/* <p className="optionMessage">Please select an option:</p> */}
                </div>
            );
        }//end else
    } //end render() method
} //end BackButton class

export default BackButton;