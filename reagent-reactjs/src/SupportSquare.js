import React, {Component} from "react";
import PropTypes from "prop-types";

class SupportSquare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="support-square" id={this.props.id}>
                    <a href={this.props.pageLink}>
                        <i className={this.props.icon}></i>
                        <h3>{this.props.title}</h3>
                    </a>
                </section>);
    }

    propTypes = {
        pageLink: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string
    };
}

export default SupportSquare;