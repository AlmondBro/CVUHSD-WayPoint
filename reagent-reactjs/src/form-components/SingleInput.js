import React from "react";
import PropTypes from "prop-types"; // ES6

const SingleInput = (props) => {
    return ([
        <label htmlFor={props.for}>{props.labelTitle}</label>,
        <input type={props.inputType} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value || ""}  />
    ]
    );
}; //SingleInput() declaration

SingleInput.propTypes = { 
    for: PropTypes.string,
    className: PropTypes.string, 
    labelTitle: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(["text", "number", "file"]).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ])
  };

export default SingleInput;

