import React from "react";
import PropTypes from "prop-types"; // ES6

const CheckBoxOrRadioGroup = (props) => {
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
    return ([
        <label className={props.className}>{props.title}</label>,
        <div className="">
            {
                props.options.map( (option) => {
                    return ( 
                    <label key={ option } className="form-label capitalize">
                        <input
                            className="form-checkbox"
                            name= { props.setName }
                            onChange= {props.controlFunc}
                            value= { option }
                            checked={ props.selectedOptions.indexOf(opt) > -1 }
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
    className: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    controlFunc: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
  };

export default CheckBoxOrRadioGroup;