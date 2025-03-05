import React/*, {useState}*/ from 'react';
import styled from 'styled-components';


const ContainerMenuAndAuthMob = styled.div`  
   margin-top: 34px;
   margin-left: 31px;
`;
function MenuAndAuthMobA() {

   
    return <ContainerMenuAndAuthMob> 
        <img src={require("../../Images/generalis-image/Mobile-version/authorization-icon-mob.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerMenuAndAuthMob>
};

export default MenuAndAuthMobA;