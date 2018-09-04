import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";

//Import external components - ES6 JavaScript
import Email from "./Email.js";

//Import form components
import SingleInput from "./form-components/SingleInput.js";
import TextArea from "./form-components/TextArea.js";
import Select from "./form-components/Select.js";
import CheckBoxOrRadioGroup from "./form-components/CheckBoxOrRadioGroup.js";
import FormButton from "./form-components/FormButton.js";

//Import 3rd-party libraries

//Impoty utility functions
import { requireNodeJSmodule, whyDidYouUpdate, isNullOrUndefinedOrEmptyString } from "./utilityFunctions.js";

class SubmitTicket extends Component {      
    // ---- Class Properties ----
    pageTitle = "Submit HelpDesk Ticket";

    //Form elements
    title;
    description;
    email;
    category;
    location;
    phoneExtension;
    officeNumber;

    fileAttachmentPath;
    fileAttachmentName;

    constructor(props) {
        super(props);
        this.state = {
            submitEmailMessage: "",
            emailMessage: {
                title: "",
                description: "",
                email: "",
                category: "Computer Issue",
                location: "Lawndale",
                phoneExtension: "",
                officeNumber: "",
                fileAttachmentPath: "",
                fileAttachmentName: ""
            }
           
        } //end state object {}
    } //end constructor

    sendEmail = (e) => {
        console.log("sendEmail(e)");
        ((e) => {
            e.preventDefault();
            console.log("preventSubmit");
             //return false;
        })(e); 

       if ( isNullOrUndefinedOrEmptyString(this.state.emailMessage.description) ||
            isNullOrUndefinedOrEmptyString(this.state.emailMessage.email) ||
            isNullOrUndefinedOrEmptyString(this.state.emailMessage.officeNumber) ||
            isNullOrUndefinedOrEmptyString(this.state.emailMessage.phoneExtension) ||
            isNullOrUndefinedOrEmptyString(this.state.emailMessage.title) ) {
                console.log("Undefined/null fields!");
                this.setState({submitEmailMessage: "Please fill out all the fields!"});             
        } else { 
            const sendmail = requireNodeJSmodule("sendmail")({silent: true});

            const emailJSX = ( <Email title={this.state.emailMessage.title} 
                                    description={this.state.emailMessage.description}
                                    email={this.state.emailMessage.email}
                                    category={this.state.emailMessage.category}
                                    location={this.state.emailMessage.location}
                                    phoneExtension={this.state.emailMessage.phoneExtension}
                                    officeNumber={this.state.emailMessage.officeNumber} />);
           
           const HTMLmessage =  ReactDOMServer.renderToStaticMarkup(emailJSX);

           console.log("HTMLMessage:\t" + HTMLmessage);

           sendmail({
                from: this.state.emailMessage.email,
                to: "leggomyyeggo95@gmail.com",
                subject: this.state.emailMessage.title,
                html: HTMLmessage,
                attachments: [  {   // file on disk as an attachment
                        filename: this.state.emailMessage.fileAttachmentName,
                        path: this.state.emailMessage.fileAttachmentPath // stream this file
                    }
                ]
              }, (err, reply) => {
                if (err) {
                    console.log(err && err.stack);
                    console.dir(reply);
                    return;
                } else {
                    console.log("Successfully sent email!");
                    console.dir(reply);
                    this.setState({submitEmailMessage: "HelpDesk e-mail sent"}); 
                    return;
                } //end else-statement
           });  
        } //end else-statement
    }; //end sendMail() method


    fileAttachment = () => {
        let file_input = document.getElementById("file-input");
        let fileUpload_inputField = document.getElementById("uploadFile-path");
        
        const getFilePath = (file_input, fileUpload_inputField) => {
            console.log("getFilePath()");
            let fileUpload_valueArray = file_input.value.split("\\");
            console.log("fileUpload_valueArray:\t", fileUpload_valueArray);
            fileUpload_inputField.value =  fileUpload_valueArray[fileUpload_valueArray.length - 1];
            this.fileAttachmentName = fileUpload_valueArray[fileUpload_valueArray.length - 1];
            console.log("fileAttachmentName:\t" + this.fileAttachmentName);
        };

        //Do not allow dragging over
        document.addEventListener("dragover",  (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        const formGetPathCode = () => {
            file_input.addEventListener("change", (e) => {
                e.preventDefault();
                e.stopPropagation();

                console.log("onchange");
                getFilePath(file_input, fileUpload_inputField);
                console.log("transfer:\t" + e.dataTransfer);
                console.log("path:\t" + file_input.files[0].path);
                document.getElementById("uploadFile-path").value = this.fileAttachmentName ;

                this.fileAttachmentPath = file_input.files[0].path;
                console.log("FileattachmentPath:\t" + this.fileAttachmentPath );

                //emailMessage
                var emailMessage = {...this.state.emailMessage}
                emailMessage.fileAttachmentPath = this.fileAttachmentPath;
                emailMessage.fileAttachmentName = this.fileAttachmentName


                this.setState({emailMessage}); //update fileAttachmentPath state 
                //this.setState({fileAttachmentName: this.fileAttachmentName}); //update fileAttachmentName state
            /* for (let f of e.dataTransfer.files) {
                    console.log('File(s) you dragged here: ', f.path)
                } //end for loop */

                // this.value = null; 
                //return false; 
            });
        } //end formGetPathCode()

    if (file_input != null) {
            formGetPathCode();
        } //end if-statement   
    }; //end fileAttachment() method

    clearForm = () => {
        let emailMessageReset = {
            ...this.state.emailMessage, 
            title: "",
            description: "",
            email: "",
            category: document.getElementById("category").value,
            location: document.getElementById("location").value,
            phoneExtension: "",
            officeNumber: "",
            fileAttachmentPath: "",
            fileAttachmentName: ""
        }
        console.log(JSON.stringify(emailMessageReset));
        this.setState({
            emailMessage: emailMessageReset
        }); //end this.setState
    }; //end clearForm() method

    componentDidMount = (props) => {
        console.log("SubmitTicket component did mount");
        this.props.updateTitle(this.pageTitle);
        this.props.renderFooter(false);
        window.onload = () => {
            this.title = document.getElementById("summary");
            this.description = document.getElementById("detailed-description");
            // clientName = document.getElementById("client-name").value;
            this.email = document.getElementById("client-email");
            this.category = document.getElementById("category");
            this.location = document.getElementById("location");
            this.phoneExtension = document.getElementById("phone-extension");
            this.officeNumber = document.getElementById("building-number");
        } //end window.onload
        window.onload = this.fileAttachment();

        const isDev = requireNodeJSmodule("electron-is-dev");
        if (isDev) {
            whyDidYouUpdate
        } //end if-statement

    }; //end componentDidMount()

    render = () => {
        return (
            <form className="helpDeskTicket-form" action="https://helpdesk.centinela.k12.ca.us/portal/new_ticket" method="POST" encType="multipart/form-data"  >
                <fieldset>
                    <legend className="form-legend">
                        <h3>{this.pageTitle}</h3>
                    </legend>
                    <p className="submitForm-inputContainer">
                        <SingleInput label={true} 
                                     labelTitle="Summary/Title" 
                                     inputType="text" id="summary" 
                                     placeholder="Title or summary of the technical issue..."  
                                     controlFunc={ (e) => {    let emailMessage = {...this.state.emailMessage};
                                                                    emailMessage.title = e.target.value;
                                                                    this.setState({emailMessage}); 
                                                            }
                                                } />
                    </p>
                    <p className="submitForm-inputContainer">
                        <TextArea label={true} labelTitle="Detailed Description" 
                                  id="detailed-description" cols={5} rows={3}  
                                  placeholder="Type the technical issue you are facing here..." 
                                  resize="vertical" 
                                  controlFunc={ (e) => {    let emailMessage={...this.state.emailMessage};
                                                            emailMessage.description = e.target.value;
                                                            this.setState({emailMessage}); 
                                                        }
                                            } />
                    </p>
                    <p className="submitForm-inputContainer">
                        <SingleInput label={true} 
                                    labelTitle="Centinela E-mail" inputType="email" 
                                    id="client-email" placeholder="Your Centinela e-mail..."  
                                    controlFunc={ (e) => {  let emailMessage = {...this.state.emailMessage};
                                                                emailMessage.email = e.target.value
                                                                this.setState({emailMessage}); 
                                                        } 
                                                } />
                    </p>
                    <p className="inline fieldMargin">
                        <Select 
                            label={true} 
                            id="category" 
                            labelTitle="Category:" 
                            labelClassName="block" 
                            options={["Computer Issue", "Printer Issue", "Projector Issue", "Password Issue", "Other Type of Issue"]} 
                            placeholder="Problem Categories"
                            selectedOption={ this.state.emailMessage.category }
                            controlFunc={ (e) => { 
                                                    let emailMessage = {...this.state.emailMessage};
                                                    emailMessage.category = e.target.value;
                                                    this.setState({ emailMessage }); 
                                                } 
                                            }  />
                    </p>
                    <p className="inline fieldMargin">
                        <Select 
                                label={true}
                                id="location" 
                                labelTitle="Location:" 
                                labelClassName="block" 
                                options={["Lawndale", "Leuzinger", "Hawthorne", "Lloyde", "District Office"]} 
                                placeholder="School Sites" 
                                selectedOption={ this.state.emailMessage.location }
                                controlFunc={ (e) => { 
                                                let emailMessage = {...this.state.emailMessage};
                                                emailMessage.location = e.target.value;
                                                this.setState({ emailMessage }); 
                                            } 
                                        }  />
                    </p>
                    <p className="inline fieldMargin">
                        <SingleInput label={true} labelClassName="block" 
                                     labelTitle="Phone Extension:" inputType="tel" 
                                     id="phone-extension" placeholder="7811" 
                                     controlFunc={ (e) => { 
                                                           let emailMessage = { ...this.state.emailMessage};
                                                           emailMessage.phoneExtension = e.target.value;
                                                           this.setState( {emailMessage}); 
                                                        } 
                                                } />
                    </p>
                    <p className="inline fieldMargin">
                        <SingleInput label={true} 
                                     labelClassName="block" 
                                     labelTitle="Office/Number #:" 
                                     inputType="text" id="building-number" 
                                     placeholder="A13" 
                                     controlFunc={ (e) => { let emailMessage = {...this.state.emailMessage};
                                                                emailMessage.officeNumber = e.target.value;
                                                                this.setState( {emailMessage}); 
                                                          } 
                                                } />
                    </p>
                    <p>
                        <label>Optional Attachment:</label>
                
                        <label className="fileUpload-button redToDarkRedgradient clickable" htmlFor="file-input">
                                Upload File
                        </label>
                        
                        <input type="file" name="attachment" id="file-input" value="" />

                        <SingleInput label={true} labelClassName=""
                                     labelTitle="File name:" inputType="text" 
                                     id="uploadFile-path" placeholder="File attachment name..." 
                                     readOnly={true} />
                    </p>
                    <p>
                        <FormButton inputType="submit" className="redToDarkRedgradient clickable" buttonTitle="Submit" controlFunc={(e)=> { this.sendEmail(e); }  } />
                        <FormButton inputType="reset" className="redToDarkRedgradient clickable" buttonTitle="Reset" controlFunc={this.clearForm} />
                    </p>
                    {/* <i class="fa fa-check green-success" aria-hidden="true"></i> */}
                    <p id="submitEmailMessage">{this.state.submitEmailMessage}<span class="submitEmailMessage-icon"><i class="fa fa-times red-fail" aria-hidden="true"></i></span></p>
                </fieldset>
        </form>
        ); //end return statement
    }; //end render()

}//end SubmitTicket class

export default SubmitTicket;