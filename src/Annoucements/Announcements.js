import React, { useState, useEffect } from "react";

//import styled- subcomponents
import { AnnoucementsList, Image, HeaderContainer, Header, Details } from './styled-components.js';

const Annoucements = ({ updateTitle, renderFooter }) => {
    const pageTitle = "Announcements";
    
    const [ announcements, setAnnouncements ] = useState([]);

    const FetchAPI = () => {
    };  //end Fetch API()

    useEffect(() => {
        updateTitle(pageTitle);
        renderFooter(false);

        FetchAPI();
    }, []); //end componentDidMount()

    return  ( 
        <AnnoucementsList className="announcements-list">
            <Image src="img/gallery-icon.png" className="img-responsive" alt="Gallery icon" />
            <HeaderContainer className="announcement-text">
                <Header>
                    { announcements || "Earth Invaded by Aliens"}
                </Header>
                <Details className="announcement-details">
                    { announcements || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida..."}
                </Details>
            </HeaderContainer>
        </AnnoucementsList>
    ); //end return statement
}; //end Annoucements class

export default Annoucements;
