import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoFooterMob from'./LogoFooterMob';
import ContactsScanCompMob from'./ContactsScanCompMob';

function FooterMob() {

    const ContainerFooterMob = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        width: 375px;
        height: 137px;
        background: rgba(2, 148, 145, 1);
    `;
   
        return <ContainerFooterMob> 
            <LogoFooterMob />
            <ContactsScanCompMob />
        </ContainerFooterMob>
    };
    
    export default FooterMob;