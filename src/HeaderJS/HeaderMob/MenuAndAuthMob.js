import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const ContainerMenuAndAuthMob = styled.div`  
   margin-top: 34px;
   margin-left: 194px;  
    &:hover {
                cursor: pointer;
            }
`;
function MenuAndAuthMob() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate(`/dispMenu/1`);
    }
   
    return <ContainerMenuAndAuthMob onClick={handleLoginClick}> 
        <img src={require("../../Images/generalis-image/Mobile-version/authorization-icon-mob.png")} 
         alt="Логотип компании Scan"></img>
    </ContainerMenuAndAuthMob>
};

export default MenuAndAuthMob;