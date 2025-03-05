import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeaderMob from'./LogoHeaderMob';
import MenuAndAuthAMob from'./MenuAndAuthAMob';
import CounterMob from './CounterMob';

const ContainerHeaderMob = styled.div`
        width: 375px;
        height: 93px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: 15px;  
`;

function HeaderAuthUserMob() {
   
        return <ContainerHeaderMob> 
            <LogoHeaderMob />          
            <CounterMob />
            <MenuAndAuthAMob />           
        </ContainerHeaderMob>
    };
    
    export default HeaderAuthUserMob;