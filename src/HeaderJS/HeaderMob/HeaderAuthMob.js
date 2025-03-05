import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeaderMob from'./LogoHeaderMob';
import MenuAndAuthMob from'./MenuAndAuthMob';

const ContainerHeaderMob = styled.div`
        width: 375px;
        height: 93px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: 15px;  
`;


function HeaderAuthMob() {
   
        return <ContainerHeaderMob> 
            <LogoHeaderMob />
            <MenuAndAuthMob />
        </ContainerHeaderMob>
    };
    
    export default HeaderAuthMob;