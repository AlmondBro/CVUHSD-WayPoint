import React from "react";
import PropTypes from "prop-types"; // ES6
//dfgdfg
const SelectHTML = (props) => {
    console.log("SelectHTML props:\t");
    console.dir(props);
    return (
        <select
            id={props.props.id}
            name={props.props.id}
            value={props.props.selectedOption}
            onChange={props.props.controlFunc}
            className={props.props.selectClassName}
        >
            {/* <option value=""> {props.props.placeholder} </option> */}
                {
                    props.props.options.map(choice => {
                            return (
                                <option
                                    className={props.props.optionClassName}
                                    key={choice}
                                    value={choice}>{choice}
                                </option>
                            );
                        } //end interior arrow function
                    ) //end map()
                }
        </select>
    );
}; //SelectHTML()

const Select = (props) => {
    let selectProps = props;
    return ( (props.label === true) ?  
            (
                [   <label htmlFor={props.for} 
                           className={props.labelClassName} 
                           key={1}
                           id={props.labelID}
                    >
                        {props.labelTitle}
                    </label>,
                    <SelectHTML props={selectProps} />
                ]
            ) : (<SelectHTML props={selectProps} />)
    ); //end return

}; //Select() declaration

Select.propTypes = {  
    label: PropTypes.bool,
    labelTitle: PropTypes.string.isRequired,
    labelClassName: PropTypes.string,
    labelID: PropTypes.string,
    for: PropTypes.string,
    id: PropTypes.string.isRequired,
    selectClassName: PropTypes.string,
    optionClassName: PropTypes.string,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    placeholder: PropTypes.string,
    controlFunc: PropTypes.func,
};

export default Select;