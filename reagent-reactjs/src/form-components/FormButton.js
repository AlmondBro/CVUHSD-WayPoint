import React from "react";
import PropTypes from "prop-types"; // ES6

const FormButton = (props) => {
    return(
        <button type={props.inputType} className={props.className} onClick={props.eventFunc}>
            {props.buttonTitle}
        </button>
    );
}; //Form

FormButton.propTypes = {
    className: PropTypes.string, 
    inputType: PropTypes.oneOf(["submit", "reset"]).isRequired,
    id: PropTypes.string,
    eventFunc: PropTypes.func,
};

export default FormButton;

