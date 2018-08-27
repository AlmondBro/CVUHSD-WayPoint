import React from "react";
import PropTypes from "prop-types"; // ES6

const FormButton = (props) => {
    return(
        <button type="submit" className="redToDarkRedgradient clickable" onClick={props.controlFunc}>
            {props.buttonTitle}
        </button>
    );
}; //Form

FormButton.propTypes = {
    className: PropTypes.string, 
    inputType: PropTypes.oneOf(["submit", "reset"]).isRequired,
    id: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
};

export default FormButton;

