import React, {Component} from "react";

class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default Main;