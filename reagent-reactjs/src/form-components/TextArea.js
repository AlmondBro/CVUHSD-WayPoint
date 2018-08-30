import React from "react";
import PropTypes from "prop-types"; // ES6

const TextAreaHTML = (props) => {
   // console.log("TextAreaHTML props:\t" + JSON.stringify(props));
    //onsole.log(props);
    return (<textarea
                className={props.props.inputClassName}
                id={props.props.id}
                name={props.props.id}
                cols={props.props.cols}
                rows={props.props.rows}
                value={props.props.content}
                onChange={props.props.controlFunc}
                style={ props.props.resize ? {resize: props.props.resize } : {resize: "none"} }
                placeholder={props.props.placeholder}
             />);
} //end TextAreaHTML()

const TextArea = (props) => {
        let textAreaProps = props;
        return (props.label === true) ? 
                (
                    [   <label htmlFor={props.id} 
                               className={props.labelClassName} 
                               id={props.labelID}
                               key={1}
                        >
                            {props.labelTitle}
                        </label>,
                        <TextAreaHTML key={2} props={textAreaProps} />
                    ]
                ) : ( <TextAreaHTML props={textAreaProps} />); //return statement
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