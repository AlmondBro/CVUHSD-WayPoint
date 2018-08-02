import React from "react";

const emailMessage = (props) => {
    return ([
        <p>Summary/Title: + {props.title}</p>,
        <p>Description: + {props.description}</p>,
        <p>Centinela Email: + {props.email}</p>,
        <p>Category: + {props.category}</p>,
        <p>Location: + {props.location}</p>,
        <p>Phone Extension: + {props.phoneExtension}</p>,
        <p>Office Number: + {props.officeNumber}</p>
    ]
    );
};

export default emailMessage;