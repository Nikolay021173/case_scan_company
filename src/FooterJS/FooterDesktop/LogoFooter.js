import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const ContainerLogoFooter = styled.div`  
   margin-left: 51px;
`;
function LogoFooter() {
   
    return <ContainerLogoFooter> 
        <img src={require("../../Images/generalis-image/Desktop-version/logo-company-footer.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerLogoFooter>
};

export default LogoFooter;
