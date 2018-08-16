import React from "react";
import PropTypes from "prop-types"; // ES6

const Select = (props) => {
    return ([
        <label htmlFor={props.for} className="block">{props.labelTitle}</label>,
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunc}
            className={props.className}
        >
            <option value="">{props.placeholder}</option>
                {props.options.map(choice => {
                    return (
                        <option
                            key={choice}
                            value={choice}>{choice}
                        </option>
                    );
                })}
      </select>
    ]
    );
}; //Select() declaration

Select.propTypes = {  
    for: PropTypes.string,
    className: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  };

export default Select;