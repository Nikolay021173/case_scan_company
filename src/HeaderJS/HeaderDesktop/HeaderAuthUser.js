import React from 'react';
import styled from 'styled-components';
import LogoHeader from'./LogoHeader';
import Menu from'./Menu';
import Counter from'./Counter';
import AuthorizedUser from'./AuthorizedUser';

const ContainerHeader = styled.div`
        width: 1440px;
        height: 93px;
        opacity: 0px;
        display: flex;
        flex-direction: row;
        justify-content: left;  
        margin-left: 52px;      
`;


function HeaderAuthUser() {
   
        return <ContainerHeader> 
        <LogoHeader />
        <Menu pathInPage1={`/account/1`} pathInPage2={'*'} pathInPage3={'*'}/>
        <Counter />
        <AuthorizedUser />
        </ContainerHeader>
    };
    
    export default HeaderAuthUser;