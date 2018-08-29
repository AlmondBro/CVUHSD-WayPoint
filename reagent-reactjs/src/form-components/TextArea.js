import React from "react";
import PropTypes from "prop-types"; // ES6



const TextArea = (props) => {
    const TextAreaHTML = (props) => {
        return ( <textarea
                    className={props.inputClassName}
                    style={ props.resize ? null : {resize: "vertical"} }
                    id={props.id}
                    name={props.id}
                    cols={props.cols}
                    rows={props.rows}
                    value={props.content}
                    onChange={props.controlFunc}
                    placeholder={props.placeholder}
                /> );
    } //end TextAreaHTML()

        return (props.label === true) ? 
                (
                    [   <label htmlFor={props.id} 
                               className={props.labelClassName} 
                               id={props.labelID}
                        >
                            {props.labelTitle}
                        </label>,
                        <TextAreaHTML />
                    ]
                ) : ( <TextAreaHTML props={props} />); //return statement
}; //TextArea() declaration

TextArea.prototypes = {
    label: PropTypes.bool,
    labelTitle: PropTypes.string.isRequired,
    labelClassName: PropTypes.string, 
    labelID: PropTypes.string,
    inputClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    resize: PropTypes.bool
};

export default TextArea;