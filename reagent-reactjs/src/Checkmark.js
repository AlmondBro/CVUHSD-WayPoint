import React from "react";
 
const checkmark = (props) => {
    return ([
        <p className="compass-message" data-text={props.message}>{props.children}</p>,
        <div className="checkmark-container">
            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">,
            <circle className="checkmarkcircle" cx="26" cy="26" r="25" fill="none"/>,
            <path className="checkmarkcheck" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        </div>
        ]);
}

export default checkmark;