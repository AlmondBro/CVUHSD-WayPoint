import React from "react";
import PropTypes from "prop-types"; // ES6

const InputHTML = (props) => {
    let InputHTMLprops = props.props;
    return (
        <input 
            type={InputHTMLprops.inputType} 
            className={InputHTMLprops.inputClassName} 
            name={InputHTMLprops.id} id={InputHTMLprops.id} 
            placeholder={InputHTMLprops.placeholder} 
            // value={InputHTMLprops.value || ""} 
            readOnly={InputHTMLprops.readOnly}
            onChange={InputHTMLprops.controlFunc} 
            key={InputHTMLprops.value} />
        );
}; //end InputHTML()

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

