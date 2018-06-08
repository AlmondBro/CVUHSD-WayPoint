import React from "react";

const pageContentContainer = (props) => {
    return (<section class="page-content">{props.children}</section>);
};

export default pageContentContainer;