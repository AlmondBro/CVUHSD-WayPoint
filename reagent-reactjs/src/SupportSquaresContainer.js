import React, {Component} from "react";

class SupportSquaresContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<div class="support-squares-container">
                    {this.props.children}
                </div>);
    }
}

export default SupportSquaresContainer;