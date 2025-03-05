import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const ContainerLogoHeader = styled.div`  
   margin-right: 362px;
`;
function LogoHeader() {
   
    return <ContainerLogoHeader> 
        <img src={require("../../Images/generalis-image/Desktop-version/logo-company-header.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerLogoHeader>
};

export default LogoHeader;