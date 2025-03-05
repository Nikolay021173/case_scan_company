import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const ContainerLogoHeaderMob = styled.div`  
   
`;
function LogoHeaderMob() {
   
    return <ContainerLogoHeaderMob> 
        <img src={require("../../Images/generalis-image/Mobile-version/logo-company-header-mob.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerLogoHeaderMob>
};

export default LogoHeaderMob;