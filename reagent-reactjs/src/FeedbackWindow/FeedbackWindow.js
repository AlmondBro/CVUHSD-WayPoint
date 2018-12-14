import React, { Component } from "react";
import Titlebar from "./Titlebar/Titlebar.js";

import styles from "./FeedbackWindow.css";

//Import form components
import Select from "./../form-components/Select/Select.js";
import SingleInput from "./../form-components/SingleInput/SingleInput.js";
import TextArea from "./../form-components/TextArea/TextArea.js";
import FormButton from "./../form-components/FormButton/FormButton.js";

class FeedbackWindow extends Component {
    constructor(props) {
        super(props);
    } //end constructor

    render = () => {
        return (
            <div id="fb-container" class="noDrag">
                <Titlebar />
                <section class="fb-page-content">
                    <div id="fb-form-container">
                        <form action="#">
                            <fieldset id="fb-fieldset">
                                <legend>
                                    <h2 id="fb-title">Provide Feedback</h2>
                                </legend>
                                <p class="fb-inputContainer">
                                    <Select 
                                        label={true} 
                                        id="fb-category" 
                                        labelTitle="Category:" 
                                        labelClassName="block" 
                                        options={["Computer Issue", "Printer Issue", "Projector Issue", "Password Issue", "Other Type of Issue"]} 
                                        placeholder="Problem Categories"
                                        selectedOption="Computer Issue"
                                        
                                        controlFunc=""
                                        
                                    />
                                </p>
                                <p class="fb-inputContainer">
                                    <SingleInput label={true} labelID="fb-subject-label"
                                        labelTitle="Subject:" inputType="text" 
                                        id="fb-subject-input" placeholder=""  
                                        controlFunc=""
                                    />
                                </p>
                                <p class="fb-inputContainer"> 
                                    <TextArea label={true} labelTitle="Description:" 
                                        id="fb-description" cols={5} rows={3}  
                                        placeholder="Let us know what you think of WayPoint! What features we can improve on, add, or even remove." 
                                        resize="none" 
                                        controlFunc=""
                                    />
                                </p>
                                <p class="fb-inputContainer" id="fb-formButtons-container">
                                    <FormButton inputType="submit" className="clickable fb-form-buttons" id="fb-submit" buttonTitle="Submit" controlFunc="" />
                                    <FormButton inputType="reset" className="clickable  fb-form-buttons"  id="fb-reset" buttonTitle="Reset" controlFunc=""/>
                                </p>
                                <p class="poweredBy">
                                 Powered by: The CV-way   
                                </p>
                            </fieldset>
                        </form>
                       
                    </div>
                </section>
            </div>
        ); //end return statement
    }; //end render method
} //end FeedbackWindow class

export default FeedbackWindow;