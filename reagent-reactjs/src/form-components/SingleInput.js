import React from "react";
import PropTypes from "prop-types"; // ES6

const SingleInput = (props) => {
    if (props.label == true) {
        return ([
            <label htmlFor={props.id} className={props.labelClassName} >{props.labelTitle}</label>,
            <input type={props.inputType} className={props.inputClassName} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value || ""}  />
        ]
        );
    } //end if-statement

    else {
        return (
            <input type={props.inputType} className={props.inputClassName} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value || ""}  />
        );
    } //end else-statement
   
}; //SingleInput() declaration

SingleInput.propTypes = { 
    label: PropTypes.bool,
    labelClassName: PropTypes.string, 
    inputClassName: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(["text", "number", "file"]).isRequired,
    readOnly: PropTypes.func,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  };

export default SingleInput;

