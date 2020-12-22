import React from "react";

import { withRouter } from 'react-router-dom';

import { GoBackContainer, BackIcon, Text } from './styled-components.js';

const BackButton = ({history}) => {
        //Example from https://stackoverflow.com/questions/30915173/react-router-go-back-a-page-how-do-you-configure-history
        return (window.location.pathname === "/") ? null : 
                (
                    <GoBackContainer 
                        className="noHighlight noDrag" 
                        onClick={ history.goBack }
                    >

                            <BackIcon
                                className="back-icon noHighlight noDrag"
                                name="angle-left"
                              
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                            />
                            <Text>
                            Go Back
                            </Text>
                    </GoBackContainer>
                    
                );
}; //end BackButton()

export default withRouter(BackButton);