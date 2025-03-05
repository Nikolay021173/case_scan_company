import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeader from'./LogoHeader';
import Menu from'./Menu';
import UserIntensification from'./UserIntensification';

const ContainerHeader = styled.div`
        width: 1440px;
        height: 93px;
        opacity: 0px;
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: 52px;       
`;

function HeaderAuth() {
   
        return <ContainerHeader> 
        <LogoHeader />
        <Menu pathInPage1={'/'} pathInPage2={'*'} pathInPage3={'*'} />
        <UserIntensification pathInPage1={'*'} pathInPage2={`/loginPage/1`} />
        </ContainerHeader>
    };
    
    export default HeaderAuth;