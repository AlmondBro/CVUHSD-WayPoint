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
            <div id="container">
                <Titlebar />
                <section class="fb-page-content">
                    <div id="fb-form-container">
                        <form action="#">
                            <fieldset>
                                <legend>
                                    <h2 id="fb-title">Provide Feedback</h2>
                                </legend>
                                <p>
                                    <Select 
                                        label={true} 
                                        id="category" 
                                        labelTitle="Category:" 
                                        labelClassName="block" 
                                        options={["Computer Issue", "Printer Issue", "Projector Issue", "Password Issue", "Other Type of Issue"]} 
                                        placeholder="Problem Categories"
                                        selectedOption="Computer Issue"
                                        
                                        controlFunc=""
                                        
                                    />
                                </p>
                                <p>
                                    <SingleInput label={true} 
                                        labelTitle="Subject" inputType="text" 
                                        id="system" placeholder=""  
                                        controlFunc=""
                                    />
                                </p>
                                <p>
                                    <TextArea label={true} labelTitle="Description" 
                                        id="subject" cols={5} rows={3}  
                                        placeholder="Let us know what you think of WayPoint! What features we can improve on, add, or even remove." 
                                        resize="vertical" 
                                        controlFunc=""
                                    />
                                </p>
                                <p>
                                    <FormButton inputType="submit" className="clickable" buttonTitle="Submit" controlFunc="" />
                                    <FormButton inputType="reset" className="clickable" buttonTitle="Reset" controlFunc=""/>
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