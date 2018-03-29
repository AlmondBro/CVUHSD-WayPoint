import React, {Component} from "react";
import { Route, NavLink, HashRouter } from "react-router-dom"
import PropTypes from "prop-types";

class SupportSquare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="support-square" id={this.props.id}>
                    <NavLink to={this.props.pageLink}>
                        <i className={this.props.icon}></i>
                        <h3>{this.props.title}</h3>
                    </NavLink>
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