import React from "react";
import PropTypes from "prop-types"; // ES6
//dfgdfg
const SelectHTML = (props) => {
    // console.log("SelectHTML props:\t");
    // console.dir(props);
    var selectHTMLProps = props.props; 
    return (
        <select
            id={selectHTMLProps.id}
            name={selectHTMLProps.id}
            value={ (props.selectedOption === "") ? selectHTMLProps.options[0]: props.selectedOption }
            onChange={selectHTMLProps.controlFunc}
            className={selectHTMLProps.selectClassName}
        >
            {/* <option value=""> {selectHTMLProps.placeholder} </option> */}
                {
                    selectHTMLProps.options.map(choice => {
                            return (
                                <option
                                    className={selectHTMLProps.optionClassName}
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
//fdsf
const Select = (props) => {
    var selectProps = props;

    return ( (props.label === true) ?
         ([
            <label 
                htmlFor={props.id} 
                className={props.labelClassName} 
                id={props.labelID} 
                key={props.id} 
            >{props.labelTitle}</label>,
            <SelectHTML value={props.selectedOption} props={selectProps} />
        ]):  
            <SelectHTML value={props.selectedOption} props={selectProps} />
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
    value: PropTypes.string,
    controlFunc: PropTypes.func,
};

export default Select;