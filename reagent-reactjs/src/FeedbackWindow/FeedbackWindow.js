import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Titlebar from "./Titlebar/Titlebar.js";

import styles from "./FeedbackWindow.css";

//Import form components
import Select from "./../form-components/Select/Select.js";
import SingleInput from "./../form-components/SingleInput/SingleInput.js";
import TextArea from "./../form-components/TextArea/TextArea.js";
import FormButton from "./../form-components/FormButton/FormButton.js";

//Import external components - ES6 JavaScript
import Email from "./../Email.js";

//Import nice utility functions
import { popNotification, isNullOrUndefinedOrEmptyString } from "./../utilityFunctions.js";

class FeedbackWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitEmailMessage: "",
            emailSuccess: "",
            emailMessage: {
                title: "",
                description: "",
                email: this.getEmail(),
                category: "Computer Issue"
            } //end emailMessage object
        } //end state object
    } //end constructor

    getEmail = () => {
        let os = window.require("os");
        let windowsUserName = os.userInfo().username.toString();
        console.log("Window username:\t" + windowsUserName);
        let centinelaEmail = windowsUserName + "@centinela.k12.ca.us";
        return centinelaEmail;
    }; //end getEmail

    generateResultIcon = () => {
        if (this.state.emailSuccess === "" ) {
            return null; 
        } else {
            return this.state.emailSuccess ? (<i class="fa fa-check green-success" aria-hidden="true"></i> ) :
                                             (<i class="fa fa-times red-fail" aria-hidden="true"></i>);
        } //end else-statement
    }; //end generateResultIcon()

    sendEmail = (e) => {
        console.log("sendEmail(e)");
        ((e) => {
            e.preventDefault();
            console.log("preventSubmit");
             //return false;
        })(e); 

       if ( isNullOrUndefinedOrEmptyString(this.state.emailMessage.description) ||
            isNullOrUndefinedOrEmptyString(this.state.emailMessage.title) ) {
                console.log("Undefined/null fields!");
                this.setState({submitEmailMessage: "Please fill out all the fields!"});   
                popNotification("Empty fields", "Please fill out the form fields");        
        } else { 
            const sendmail = window.require("sendmail")({silent: true});

            const emailJSX = ( <Email   submitTicket={false}
                                        title={this.state.emailMessage.title} 
                                        description={this.state.emailMessage.description}
                                        email={this.state.emailMessage.email}
                                 />);
           
           const HTMLmessage =  ReactDOMServer.renderToStaticMarkup(emailJSX);

           console.log("HTMLMessage:\t" + HTMLmessage);

           /*
           ,
                attachments: [  {   // file on disk as an attachment
                        filename: this.state.emailMessage.fileAttachmentName,
                        path: this.state.emailMessage.fileAttachmentPath // stream this file
                    }
                ]
             */ 
           sendmail({
                from: this.state.emailMessage.email,
                to: "juandavidlopez95@yahoo.com",
                subject: "hi",
                html: HTMLmessage
              }, (error, reply) => {
                if (error) {
                    console.log(error && error.stack);
                    console.dir(reply);
                    this.setState({submitEmailMessage: "Error sending e-mail."});   
                    this.setState({ emailSuccess: false});
                    popNotification("Error sending e-mail", "Please try again");
                    return;
                } else {
                    console.log("Successfully sent email!");
                    console.dir(reply);
                    this.setState({submitEmailMessage: "Feedback e-mail sent"}); 
                    this.setState({ emailSuccess: true});
                    popNotification("Email sent!", "Success!");
                    return;
                } //end else-statement
           });  
        } //end else-statement
    }; //end sendMail() method

    clearForm = () => {
        let emailMessageReset = {
            ...this.state.emailMessage, 
            title: "",
            description: "",
            email: this.getEmail(),
            category: document.getElementById("fb-category").value,
            description: document.getElementById("fb-description").value
        };

        console.log(JSON.stringify(emailMessageReset));
        this.setState({
            submitEmailMessage: "",
            emailSuccess: "",
            emailMessage: emailMessageReset
        }); //end this.setState
    }; //end clearForm() method

    render = () => {
        return (
            <div id="fb-container" className="noDrag">
                <Titlebar />
                <section className="fb-page-content">
                    <div id="fb-form-container">
                        <form action="#">
                            <fieldset id="fb-fieldset">
                                <legend className="noHighlight">
                                    <h2 id="fb-title">Provide Feedback</h2>
                                </legend>
                                <p className="fb-inputContainer noHighlight">
                                    <Select 
                                        label={true} 
                                        id="fb-category" 
                                        labelTitle="Category:" 
                                        labelClassName="block" 
                                        options={["Computer Issue", "Printer Issue", "Projector Issue", "Password Issue", "Other Type of Issue"]} 
                                        placeholder="Problem Categories"
                                        selectedOption="Computer Issue"
                                        controlFunc={   (e) => { 
                                                let emailMessage = {...this.state.emailMessage};
                                                emailMessage.category = e.target.value;
                                                this.setState({ emailMessage }); 
                                            } 
                                        }
                                    />
                                </p>
                                <p className="fb-inputContainer noHighlight">
                                    <SingleInput label={true} labelID="fb-subject-label"
                                        labelTitle="Subject:" inputType="text" 
                                        id="fb-subject-input" placeholder="Insert tile here..."  
                                        controlFunc={
                                            (e) => { 
                                                let emailMessage = {...this.state.emailMessage};
                                                emailMessage.title = e.target.value;
                                                this.setState({ emailMessage }); 
                                            } 
                                        }
                                    />
                                </p>
                                <p className="fb-inputContainer noHighlight"> 
                                    <TextArea label={true} labelTitle="Description:" 
                                        id="fb-description" cols={5} rows={3}  
                                        placeholder="Let us know what you think of WayPoint! What features we can improve on, add, or even remove." 
                                        resize="none" 
                                        controlFunc={
                                            (e) => { 
                                                let emailMessage = {...this.state.emailMessage};
                                                emailMessage.description = e.target.value;
                                                this.setState({ emailMessage }); 
                                            } 
                                        }
                                    />
                                </p>
                                <p className="fb-inputContainer noHighlight" id="fb-formButtons-container">
                                    <FormButton inputType="submit" className="clickable fb-form-buttons" id="fb-submit" buttonTitle="Submit" controlFunc={(e)=> { this.sendEmail(e); }  }  />
                                    <FormButton inputType="reset" className="clickable  fb-form-buttons"  id="fb-reset" buttonTitle="Reset" controlFunc={this.clearForm}/>
                                </p>
                                <p className="poweredBy noHighlight">
                                 Powered by: The CV-way   
                                </p>
                            </fieldset>
                        </form>
                        {/* <p id="fb-submitEmailMessage">{this.state.submitEmailMessage}
                            <span className="submitEmailMessage-icon">
                                {this.generateResultIcon()}                    
                            </span>
                        </p> */}
                    </div> 
                </section>
            </div>
        ); //end return statement
    }; //end render method
} //end FeedbackWindow class

export default FeedbackWindow;