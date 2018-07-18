import React from "react";
const submitTicket = (props) => {
    return (
        <form className="helpDeskTicket-form" action="https://helpdesk.centinela.k12.ca.us/portal/new_ticket" method="POST" encType="multipart/form-data">
            <fieldset>
                <legend className="form-legend">
                    <h3>Submit Helpdesk Ticket</h3>
                </legend>
                <p>
                    <label htmlFor="summary">Summary/Title:</label>
                    <input type="text" name="summary" id="summary" placeholder="Title or summary of the technical issue..." />
                </p>
                <p>
                    <label htmlFor="detailed-description">Detailed Description:</label>
                    <textarea id="detailed-description" name="detailed-description" placeholder="Type the technical issue you are facing here..." cols="5" rows="3"></textarea>
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
                    <input type="text" placeholder="Optional file path..." readonly="readonly" name="uploadFile-path" id="uploadFile-path" />
                </p>
                <p>
                    <button type="submit" className="redToDarkRedgradient clickable">Submit</button>
                    <button type="reset" className="redToDarkRedgradient clickable">Reset</button>
                </p>
            </fieldset>
    </form>
    );
};

export default submitTicket;