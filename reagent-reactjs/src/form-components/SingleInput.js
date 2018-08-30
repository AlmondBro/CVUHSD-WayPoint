import React from "react";
import PropTypes from "prop-types"; // ES6

const InputHTML = (props) => {
    return(
        <input 
            type={props.props.inputType} 
            className={props.props.inputClassName} 
            name={props.props.id} id={props.props.id} 
            placeholder={props.props.placeholder} 
            value={props.props.value || ""} 
            readOnly={props.props.readOnly}
            onChange={props.props.controlFunc} 
            value={props.props.value}
            key={props.props.value} />
        );
} //end InputHTML()

const SingleInput = (props) => {
    return ( (props.label === true) ?
         ([
            <label 
                htmlFor={props.id} 
                className={props.labelClassName} 
                id={props.labelID} 
                key={11} 
            >{props.labelTitle}</label>,
         <InputHTML props={props} /> 
        ]):  
         <InputHTML props={props} /> 
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

