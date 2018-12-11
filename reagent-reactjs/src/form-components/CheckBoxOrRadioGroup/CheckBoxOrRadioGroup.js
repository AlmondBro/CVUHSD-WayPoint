import React from "react";
import PropTypes from "prop-types"; // ES6

const CheckBoxOrRadioGroup = (props) => {
    return ([
        <label className={props.labelClassName} id={props.labelID}>{props.title}</label>,
        <div className="">
            {
                props.options.map( (option) => {
                    return ( 
                    <label HTMLfor={option} key={ option } className={props.labelClassName} id={option}>
                        <input
                            className={props.inputClassName}
                            name= { props.id }
                            onChange= {props.controlFunc}
                            value= { option }
                            checked={ props.selectedOptions.indexOf(option) > -1 }
                            type={ props.type } /> { option }
                    </label>);
                })
            }
        </div>
    ]
    ); 
};

CheckBoxOrRadioGroup.propTypes = {  
    for: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    labelClassName: PropTypes.string,
    labelID: PropTypes.id, 
    inputClassName: PropTypes.string,
    
    type: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    controlFunc: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

export default CheckBoxOrRadioGroup;

   /*
        Select Handler:
            selectHandler(e) {
                const newSelection = e.target.value;
                let newSelectionArray;

                if(this.state.selectedPets.indexOf(newSelection) > -1) {
                    newSelectionArray = this.state.selectedPets.filter(s => s !== newSelection)
                } else {
                    newSelectionArray = [...this.state.selectedPets, newSelection];
                }

                    this.setState({ selectedPets: newSelectionArray });
            }
    */
