import React from "react";

//Inline CSS styles
const divStyle = {
    borderLeft: "2px solid #e73333",
    borderRight: "2px solid #e73333",
    borderBottom: "2px solid #e73333"
}

const paragraphStyle =  {
    padding: "5px",
    borderBottom: "2px solid #e73333"
}

const headingStyle = {
    color: "white",
    backgroundColor: "#e73333",
    padding: "20px",
    textAlign: "center",
    borderBottom: "2px solid white",
    width: "75%",
    margin: "0 auto"
}

const sectionStyle = {width: "50%", margin: "0 auto"};
const emailMessage = (props) => {
    return (
        <div style={divStyle}>
            <h1 style={headingStyle}>{  props.submitTicket ? "New HelpDesk Ticket" : "WayPoint Feedback" }</h1>
            <section style={sectionStyle}>
                <p style={paragraphStyle}><strong>Summary/Title:</strong> {props.title}</p>
                <p style={paragraphStyle}><strong>Description:</strong> {props.description}</p>
                <p style={paragraphStyle}><strong>Centinela Email:</strong> {props.email}</p>
               {    props.submitTicket ? ([
                        <p style={paragraphStyle}><strong>Category:</strong> {props.category}</p>,
                        <p style={paragraphStyle}><strong>Location:</strong> {props.location}</p>,
                        <p style={paragraphStyle}><strong>Phone Extension:</strong> <a></a>  {props.phoneExtension}</p>,
                        <p style={paragraphStyle}><strong>Office Number:</strong>{props.officeNumber}</p> 
                    ]): null
               } 
                
          </section>
      </div>
    );
};

export default emailMessage;