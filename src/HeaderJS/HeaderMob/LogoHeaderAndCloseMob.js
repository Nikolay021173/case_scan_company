import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const ContainerLogoHeaderMob = styled.div`  
        width: 325px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 20px;
`;

const LogoScan = styled.img`
    margin-left: -10px;
`;

const Close = styled.img`
   margin-left: -15px;
    margin-top: 34px;
    width: 25px;
    height: 25px;
`;

function LogoHeaderAndCloseMob() {
   
    return <ContainerLogoHeaderMob> 
        <LogoScan src={require("../../Images/generalis-image/Mobile-version/logo-company-footer-mob.png")} 
         alt="Логотип компании Scan"></LogoScan>
         <Close src={require("../../Images/generalis-image/Mobile-version/close-icon-mob.png")} 
         alt="Закрыть"></Close>
    </ContainerLogoHeaderMob>
};

export default LogoHeaderAndCloseMob;