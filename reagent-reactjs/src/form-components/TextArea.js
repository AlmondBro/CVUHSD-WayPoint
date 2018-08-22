import React from "react";
import PropTypes from "prop-types"; // ES6

const TextArea = (props) => {
    return (
        [   <label className="form-label">{props.title}</label>,
            <textarea
                className="form-input"
                style={props.resize ? null : {resize: "none"}}
                name={props.name}
                rows={props.rows}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder}
            />
        ]
    );
}; //TextArea() declaration

TextArea.prototypes = {
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
    ]),
    rows: React.PropTypes.number.isRequired,
    resize: React.PropTypes.bool
};