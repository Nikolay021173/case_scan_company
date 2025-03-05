import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeader from'./LogoHeader';
import Menu from'./Menu';
import DownloadCounter from'./DownloadCounter';
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

function HeaderUploadData() {
   
    return <ContainerHeader> 
        <LogoHeader />
        <Menu />
        <DownloadCounter />
        <AuthorizedUser />
        </ContainerHeader>
    };
    
    export default HeaderUploadData;