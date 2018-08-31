import React, { Component } from "react";

//Import external components - ES6 JavaScript
import Email from "./Email.js";

//Import form components
import SingleInput from "./form-components/SingleInput.js";
import TextArea from "./form-components/TextArea.js";
import Select from "./form-components/Select.js";
import CheckBoxOrRadioGroup from "./form-components/CheckBoxOrRadioGroup.js";
import FormButton from "./form-components/FormButton.js";

//Import 3rd-party libraries
import jsxToString from "jsx-to-string";

class SubmitTicket extends Component {     
    //Class Properties
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
            title: "",
            description: "",
            email: "",
            category: "Computer Issue",
            location: "Lawndale",
            phoneExtension: "",
            officeNumber: "",
            fileAttachmentPath: "",
            fileAttachmentName: ""
        } //end state object {}
    } //end constructor

    sendEmail = (e) => {
        ((e) => {
            e.preventDefault();
            console.log("preventSubmit");
             //return false;
        })(e); 

        if (this.title.value === null || this.title.value  === undefined || 
            this.description.value === null || this.description.value === undefined ||
            this.email.value === null || this.email.value === undefined || 
            this.category.value === null ||  this.category.value  === undefined || 
            this.location.value === null || this.location.value === undefined || 
            this.phoneExtension.value === null || this.phoneExtension.value  === undefined || 
            this.officeNumber.value === null || this.officeNumber.value === undefined  ) {
                console.log("Undefined/null fields!");
                return;
        } else {
            const electron = window.require("electron");
            //const {session} = window.require('electron')
           // const ses = session.defaultSession;
            const remote = electron.remote;
            const sendmail = remote.require("sendmail")({silent: true});
            //const jsxToString = remote.require("jsx-to-string");endm
          
           var HTMLmessage =/* jsxToString(<Email title={title} 
                                                 description={description}
                                                 email={email}
                                                 category={category}
                                                 location={location}
                                                 phoneExtension={phoneExtension}
                                                 officeNumber={officeNumber} />
                                        ); */
                                        jsxToString(<Email  title={this.title} 
                                                            description={this.description}
                                                            email={this.email}
                                                            category={this.category}
                                                            location={this.location}
                                                            phoneExtension={this.phoneExtension}
                                                            officeNumber={this.officeNumber} />).toString();
    
            console.log("Sent."); 
            console.log("HTMLMessage:\t" + HTMLmessage);
         
           sendmail({
                from: this.email.value,
                to: "juandavidlopez95@yahoo.com",
                subject: this.title.value,
                html: HTMLmessage,
                attachments: [  {   // file on disk as an attachment
                                    filename: this.fileAttachmentName,
                                    path: this.fileAttachmentPath // stream this file
                                }
                            ]
              }, (err, reply) => {
                console.log("Sent email!")
                console.log(err && err.stack);
                console.dir(reply);
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
        }
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
//sd
    clearForm = () => {
        this.setState({
            title: "",
            description: "",
            email: "",
            category: document.getElementById("category").value,
            location: document.getElementById("location").value,
            phoneExtension: "",
            officeNumber: "",
            fileAttachmentPath: "",
            fileAttachmentName: ""
        }); //end this.setState
    }; //end clearForm() method

    componentDidMount = (props) => {
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
    } //end componentDidMount()
    
    render = () => {
        return (
            <form className="helpDeskTicket-form" action="https://helpdesk.centinela.k12.ca.us/portal/new_ticket" method="POST" encType="multipart/form-data">
                <fieldset>
                    <legend className="form-legend">
                        <h3>{this.pageTitle}</h3>
                    </legend>
                    <p className="submitForm-inputContainer">
                        <SingleInput label={true} labelTitle="Summary/Title" inputType="text" id="summary" placeholder="Title or summary of the technical issue..."  value={ this.state.title } controlFunc={(e)=>{ this.setState({title: e.target.value}); }} />
                    </p>
                    <p className="submitForm-inputContainer">
                        <TextArea label={true} labelTitle="Detailed Description" id="detailed-description" cols={5} rows={3}  placeholder="Type the technical issue you are facing here..." resize="vertical" value={ this.state.description } controlFunc={(e)=>{ this.setState({description: e.target.value}); }}/>
                    </p>
                    <p className="submitForm-inputContainer">
                        <SingleInput label={true} labelTitle="Centinela E-mail" inputType="email" id="client-email" placeholder="Your Centinela e-mail..."  controlFunc={(e)=>{ this.setState({email: e.target.value}); }} />
                    </p>
                    <p className="inline fieldMargin">
                        <Select 
                            label={true} 
                            id="category" 
                            labelTitle="Category" 
                            labelClassName="block" 
                            options={["Computer Issue", "Printer Issue", "Projector Issue", "Password Issue", "Other Type of Issue"]} 
                            placeholder="Problem Categories"
                            selectedOption={ this.state.category }
                            controlFunc={ (e) => { this.setState({ category: e.target.value })} }  />
                    </p>
                    <p className="inline fieldMargin">
                        <Select 
                                label={true}
                                id="location" 
                                labelTitle="Location" 
                                labelClassName="block" 
                                options={["Lawndale", "Leuzinger", "Hawthorne", "Lloyde", "District Office"]} 
                                placeholder="School Sites" 
                                selectedOption={ this.state.location }
                                controlFunc={ (e) => { this.setState({ location: e.target.value })} } />
                    </p>
                    <p className="inline fieldMargin">
                        <SingleInput label={true} labelClassName="block" labelTitle="Phone Extension:" inputType="tel" id="phone-extension" placeholder="7811" controlFunc={ (e) => { this.setState( {phoneExtension: e.target.value}); } } />
                    </p>
                    <p className="inline fieldMargin">
                        <SingleInput label={true} labelClassName="block" labelTitle="Office/Number #" inputType="text" id="building-number" placeholder="A13" controlFunc={ (e) => { this.setState( {officeNumber: e.target.value}); } } />
                    </p>
                    <p>
                        <label>Optional Attachment:</label>
                   
                        <label className="fileUpload-button redToDarkRedgradient clickable" htmlFor="file-input">
                                Upload File
                        </label>
                        
                        <input type="file" name="attachment" id="file-input" value="" />
    
                        <SingleInput label={true} labelClassName="" labelTitle="File name:" inputType="text" id="uploadFile-path" placeholder="File attachment name..." readOnly={true} />
    
                       {/* 
                            <label htmlFor="uploadFile-path">File name:</label>
                            <input type="text" placeholder="Optional file path..." readOnly name="uploadFile-path" id="uploadFile-path" />
                        */} 
                       
                    </p>
                    <p>
                        <FormButton inputType="submit" className="redToDarkRedgradient clickable" buttonTitle="Submit" eventFunc={this.sendEmail}  />
                        <FormButton inputType="reset" className="redToDarkRedgradient clickable" buttonTitle="Reset" eventFunc={this.clearForm} />
                    </p>
                </fieldset>
        </form>
        ); //end return statement
    } //end render()
   
} //end SubmitTicket class

//Decorate exported component with lifecycle methods
export default SubmitTicket;