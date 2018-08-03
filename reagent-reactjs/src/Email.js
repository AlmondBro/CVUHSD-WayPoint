import React from "react";

const emailMessage = (props) => {
    return ([
        <p><strong>Summary/Title:</strong> {props.title}</p>,
        <p><strong>Description:</strong> {props.description}</p>,
        <p><strong>Centinela Email:</strong> {props.email}</p>,
        <p><strong>Category:</strong> {props.category}</p>,
        <p><strong>Location:</strong> {props.location}</p>,
        <p><strong>Phone Extension:</strong> {props.phoneExtension}</p>,
        <p><strong>Office Number:</strong> {props.officeNumber}</p>
    ]
    );
};

export default emailMessage;