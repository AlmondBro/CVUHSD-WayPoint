import React, { Component } from "react";

class SubmitTicket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form class="helpDeskTicket-form" action="https://helpdesk.centinela.k12.ca.us/portal/new_ticket" method="post" enctype="multipart/form-data">
                <fieldset>
                    <legend>
                        <h3>Submit Helpdesk Ticket</h3>
                    </legend>
                    <p>
                        <label for="summary">Summary/Title:</label>
                        <input type="text" name="summary" id="summary" placeholder="Title or summary of the technical issue..." />
                    </p>
                    <p>
                        <label for="detailed-description">Detailed Description:</label>
                        <textarea id="detailed-description" name="detailed-description" placeholder="Type the technical issue you are facing here..." cols="5" rows="3"></textarea>
                    </p>
                    <p class="inline fieldMargin">
                        <label for="category" class="block">Category:</label>
                        <select name="category" id="category-select">
                            <option>Computer Issue</option>
                            <option>Printer Issue</option>
                            <option>Projector Issue</option>
                            <option>Password Issue</option>
                            <option>Other Type of Issue</option>
                        </select>
                    </p>
                    <p class="inline fieldMargin">
                        <label for="location" class="block">Location:</label>
                        <select name="location" id="location-select">
                            <option>Lawndale</option>
                            <option>Leuzinger</option>
                            <option>Hawthorne</option>
                            <option>Lloyde</option>
                            <option>District Office</option>
                        </select>
                    </p>
                    <p class="inline fieldMargin">
                        <label for="phone-extension" class="block">Phone Extension:</label>
                        <input type="tel" name="phone-extension" id="phone-extension" placeholder="7811" />
                    </p>
                    <p class="inline fieldMargin">
                        <label for="building-number" class="block">Office/Number #:</label>
                        <input type="text" name="building-number" id="building-number" placeholder="A13" /> 
                    </p>
                    <p>
                        <label for="file-input">Optional Attachment:</label>
                        <label class="fileUpload-button redToDarkRedgradient">
                            Upload File
                            <input type="file" name="attachment" id="file-input" value="Choose File" />
                        </label>
                    </p>
                    <p>
                        <button type="submit" class="redToDarkRedgradient">Submit</button>
                        <button type="reset" class="redToDarkRedgradient">Reset</button>
                    </p>
                </fieldset>
        </form>
        );
    }
}

export default SubmitTicket;