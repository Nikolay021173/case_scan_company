import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeaderMob from'./LogoHeaderMob';
import MenuAndAuthAMob from'./MenuAndAuthAMob';
import DownloadCounterMob from './DownloadCounterMob';

const ContainerUploadDataMob = styled.div`
        width: 375px;
        height: 93px;
        background-color: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: 15px;  
`;

function HeaderUploadDataMob() {
   
        return <ContainerUploadDataMob> 
            <LogoHeaderMob />          
            <DownloadCounterMob />
            <MenuAndAuthAMob />           
        </ContainerUploadDataMob>
    };
    
    export default HeaderUploadDataMob;