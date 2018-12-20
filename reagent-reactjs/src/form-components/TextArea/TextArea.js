import React from "react";
import PropTypes from "prop-types"; // ES6
import styles from "./TextArea.css";
const TextAreaHTML = (props) => {
    let textAreaProps = props.props;
    return (<textarea
                className={textAreaProps.inputClassName}
                id={textAreaProps.id}
                name={textAreaProps.id}
                cols={textAreaProps.cols}
                rows={textAreaProps.rows}
                value={textAreaProps.value}
                onChange={textAreaProps.controlFunc}
                style={ textAreaProps.resize ? {resize: textAreaProps.resize } : {resize: "none"} }
                placeholder={textAreaProps.placeholder}
                key={textAreaProps.id}
             />);
} //end TextAreaHTML()

const TextArea = (props) => {
        return (props.label === true) ? 
                (
                    [   <label htmlFor={props.id} 
                               className={props.labelClassName} 
                               id={props.labelID}
                               key={props.labelID}
                        >
                            {props.labelTitle}
                        </label>,
                        <TextAreaHTML props={props} />
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
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    cols: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
    resize: PropTypes.bool
};

export default TextArea;