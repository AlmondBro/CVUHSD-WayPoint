import React from "react";
import PropTypes from "prop-types"; // ES6

const SingleInput = (props) => {
    return ( (props.label == true) ?
         ([
            <label 
                htmlFor={props.id} 
                className={props.labelClassName} 
                id={props.labelID} 
                key={11} 
            >{props.labelTitle}</label>,
            <input 
                type={props.inputType} 
                className={props.inputClassName} 
                name={props.id} id={props.id} 
                placeholder={props.placeholder} 
                value={props.value || ""} 
                readOnly={props.readOnly}
                key={23} />
            ]) :  
            <input 
                type={props.inputType} 
                className={props.inputClassName} 
                name={props.id} id={props.id} 
                placeholder={props.placeholder} 
                value={props.value || ""} 
                readOnly={props.readOnly}
                key={12} 
                readOnly={props.readOnly || false}
            />
        ); //end return
}; //SingleInput() declaration

SingleInput.propTypes = { 
    label: PropTypes.bool,
    labelTitle: PropTypes.string.isRequired,
    labelClassName: PropTypes.string, 
    labelID: PropTypes.string, 
    inputClassName: PropTypes.string,
    inputType: PropTypes.oneOf(["text", "number", "file", "email", "tel"]).isRequired,
    readOnly: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  };

export default SingleInput;

