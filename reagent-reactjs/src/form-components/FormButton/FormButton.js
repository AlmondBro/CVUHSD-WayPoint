import React from "react";
import PropTypes from "prop-types"; // ES6
import styles from "./FormButton.css";
const FormButton = (props) => {
    return(
        <button data-formbutton="1" type={props.inputType} className={props.className} onClick={props.controlFunc}>
            {props.buttonTitle}
        </button>
    );
}; //Form

FormButton.propTypes = {
    className: PropTypes.string, 
    inputType: PropTypes.oneOf(["submit", "reset"]).isRequired,
    id: PropTypes.string,
    controlFunc: PropTypes.func,
};

export default FormButton;

