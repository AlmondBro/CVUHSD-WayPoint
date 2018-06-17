import React from "react";

const footer = (props) => {
    return (
        <footer>
            <p>Welcome <span className="currentUserName">{props.userName || "UserName"}</span></p>
            <p className="IP-message">Your IP Addresss:&#9;<span>{props.userName || "127.0.0.1"}</span></p>
            <p className="cv-way">Powered by: The CV-Way</p>
        </footer>
    );
};

export default footer;