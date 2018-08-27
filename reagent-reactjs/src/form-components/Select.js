import React from "react";
import PropTypes from "prop-types"; // ES6

const Select = (props) => {
    if (props.label == true) {
        return ([
            <label htmlFor={props.for} className={props.labelClassName}>{props.labelTitle}</label>,
            <select
                name={props.name}
                value={props.selectedOption}
                onChange={props.controlFunc}
                className={props.selectClassName}
            >
                <option value="">
                    {
                        props.options.map(choice => {
                                return (
                                    <option
                                        className={optionClassName}
                                        key={choice}
                                        value={choice}>{choice}
                                    </option>
                                );
                            }
                        )
                    }
                </option>
                 
          </select>
        ]
        );
    } //end if-statement

    else {
        return (
            <select
                name={props.name}
                value={props.selectedOption}
                onChange={props.controlFunc}
                className={props.selectClassName}
            >
                <option value="">
                    {
                        props.options.map(choice => {
                                return (
                                    <option
                                        className={optionClassName}
                                        key={choice}
                                        value={choice}>{choice}
                                    </option>
                                );
                            }
                        )
                    }
                </option>
                 
          </select>
        ); //end return statement
    } //end else statement
 
}; //Select() declaration

Select.propTypes = {  
    label: PropTypes.bool,
    for: PropTypes.string,
    labelClassName: PropTypes.string, 
    selectClassName: PropTypes.string,
    optionClassName: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  };

export default Select;