import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const ContainerLogoFooterMob = styled.div`  
   margin-left: 18px;
`;
function LogoFooterMob() {
   
    return <ContainerLogoFooterMob> 
        <img src={require("../../Images/generalis-image/Mobile-version/logo-company-footer-mob.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerLogoFooterMob>
};

export default LogoFooterMob;