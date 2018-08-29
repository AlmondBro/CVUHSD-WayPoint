import React from "react";

//Import external components - ES6 JavaScript
import Email from "./Email.js";

//Import form components
import SingleInput from "./form-components/SingleInput.js";
import TextArea from "./form-components/TextArea.js";
import Select from "./form-components/SingleInput.js";
import CheckBoxOrRadioGroup from "./form-components/CheckBoxOrRadioGroup.js";
import FormButton from "./form-components/FormButton.js";

//Import 3rd-party libraries
import jsxToString from "jsx-to-string";
import lifecycle from "react-pure-lifecycle";

var pageTitle = "Message HelpDesk Support";

 // Create your lifecycle methods for 'react-pure-lifecycle'
const componentDidMount = (props) => {
    props.updateTitle(pageTitle);
    props.renderFooter(false);
}

// make the lifecycle methods properties on a standard object
const methods = {
    componentDidMount
};

const SubmitTicket = (props) => {
    var title;
    var description;
    //const clientName = document.getElementById("client-name").value;
    var email;
    var category;
    var location;
    var phoneExtension;
    var officeNumber;

    var fileAttachmentPath;
    var fileAttachmentName;

    window.onload = () => {
        title = document.getElementById("summary");
        description = document.getElementById("detailed-description");
        // clientName = document.getElementById("client-name").value;
        email = document.getElementById("client-email");
        category = document.getElementById("category");
        location = document.getElementById("location");
        phoneExtension = document.getElementById("phone-extension");
        officeNumber = document.getElementById("building-number");
    } //end window.onload

    (function fileAttachment() {
        var file_input = document.getElementById("file-input");
        var fileUpload_inputField = document.getElementById("uploadFile-path");
        
        const getFilePath = (file_input, fileUpload_inputField) => {
            console.log("getFilePath()");
            var fileUpload_valueArray = file_input.value.split('\\');
            console.log("fileUpload_valueArray:\t", fileUpload_valueArray);
            fileUpload_inputField.value =  fileUpload_valueArray[fileUpload_valueArray.length - 1];
            fileAttachmentName = fileUpload_valueArray[fileUpload_valueArray.length - 1];
            console.log("fileAttachmentName:\t" + fileAttachmentName);
        }
        //Do not allow dragging over
        document.addEventListener('dragover', function (e) {
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
                //document.getElementById("uploadFile-path").value = file_input.files[0].path;

                fileAttachmentPath = file_input.files[0].path;
                console.log("FileattachmentPath:\t" + fileAttachmentPath );
                /* for (let f of e.dataTransfer.files) {
                    console.log('File(s) you dragged here: ', f.path)
                    } */

                // this.value = null; 
                //return false; 
            });
        } //end formGetPathCode()
    
        if (file_input != null) {
            formGetPathCode();
        }   
    })();
 

    const sendEmail = (e) => {
        ((e) => {
            e.preventDefault();
            console.log("preventSubmit");
             //return false;
        })(e); 

        if (title.value === null || title.value  === undefined || 
            description.value === null || description.value === undefined ||
            email.value === null || email.value === undefined || 
            category.value === null ||  category.value  === undefined || 
            location.value === null || location.value === undefined || 
            phoneExtension.value === null || phoneExtension.value  === undefined || 
            officeNumber.value === null || officeNumber.value === undefined  ) {
                console.log("Undefined/null fields!");
                return;
        } else {
            const electron = window.require("electron");
            //const {session} = window.require('electron')
           // const ses = session.defaultSession;
            const remote = electron.remote;
            const sendmail = remote.require('sendmail')({silent: true});
            //const jsxToString = remote.require("jsx-to-string");endm
          
           var HTMLmessage =/* jsxToString(<Email title={title} 
                                                 description={description}
                                                 email={email}
                                                 category={category}
                                                 location={location}
                                                 phoneExtension={phoneExtension}
                                                 officeNumber={officeNumber} />
                                        ); */
                                        jsxToString(<Email />).toString();
    
            console.log("Sent."); 
            console.log("HTMLMessage:\t" + HTMLmessage);
         
           sendmail({
                from: email.value,
                to: "juandavidlopez95@yahoo.com",
                subject: title.value,
                html: HTMLmessage,
                attachments: [  {   // file on disk as an attachment
                                    filename: fileAttachmentName,
                                    path: fileAttachmentPath // stream this file
                                }
                            ]
              }, (err, reply) => {
                console.log("Sent email!")
                console.log(err && err.stack);
                console.dir(reply);
           });  
        } //end else-statement
    } //end sendMail() method

    return (
        <form className="helpDeskTicket-form" action="https://helpdesk.centinela.k12.ca.us/portal/new_ticket" method="POST" encType="multipart/form-data">
            <fieldset>
                <legend className="form-legend">
                    <h3>Submit Helpdesk Ticket</h3>
                </legend>
                <p>
                    {/* <label htmlFor="summary">Summary/Title:</label>
                    <input type="text" name="summary" id="summary" placeholder="Title or summary of the technical issue..." /> */}
                    <SingleInput label={true} labelTitle="Summary/Title" inputType="text" id="summary" placeholder="Title or summary of the technical issue..." />
                </p>
                <p>
                    <TextArea label={true} labelTitle="Detailed Description" id="detailed-description" cols={5} rows={3}  placeholder="Type the technical issue you are facing here..." resize="vertical"/>
                </p>
                <p>
                    <SingleInput label={true} labelTitle="Centinela E-mail" inputType="email" id="client-email" placeholder="Your Centinela e-mail..." />
                </p>
                <p className="inline fieldMargin">
                    <label htmlFor="category" className="block">Category:</label>
                    <select name="category" id="category">
                            <option>Computer Issue</option>
                            <option>Printer Issue</option>
                            <option>Projector Issue</option>
                            <option>Password Issue</option>
                            <option>Other Type of Issue</option>
                    </select>
                </p>
                <p className="inline fieldMargin">
                    <Select id="location" 
                            label={true} 
                            labelTitle="Location" 
                            labelClassName="block" 
                            options={["Lawndale", "Leuzinger", "Hawthorne", "Lloyde", "District Office"]} 
                            placeholder="hi" />

                    <label htmlFor="location" className="block">Location:</label>
                    <select name="location" id="location">
                            <option>Lawndale</option>
                            <option>Leuzinger</option>
                            <option>Hawthorne</option>
                            <option>Lloyde</option>
                            <option>District Office</option>
                    </select>
                </p>
                <p className="inline fieldMargin">
                    <label htmlFor="phone-extension" className="block">Phone Extension:</label>
                    <input type="tel" name="phone-extension" id="phone-extension" placeholder="7811" />
                </p>
                <p className="inline fieldMargin">
                    <label htmlFor="building-number" className="block">Office/Number #:</label>
                    <input type="text" name="building-number" id="building-number" placeholder="A13" />
                </p>
                <p>
                    <label>Optional Attachment:</label>
                    <label className="fileUpload-button redToDarkRedgradient clickable" htmlFor="file-input">
                            Upload File
                    </label>
                    <input type="file" name="attachment" id="file-input" value="" />

                    <label htmlFor="uploadFile-path">File name:</label>
                    <input type="text" placeholder="Optional file path..." readOnly name="uploadFile-path" id="uploadFile-path" />
                </p>
                <p>
                    <button type="submit" className="redToDarkRedgradient clickable" onClick={sendEmail} >Submit</button>
                    <button type="reset" className="redToDarkRedgradient clickable">Reset</button>
                </p>
            </fieldset>
    </form>
    ); //end return statement
}; //end submitTicket class

//Decorate exported component with lifecycle methods
export default lifecycle(methods)(SubmitTicket);