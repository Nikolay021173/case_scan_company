import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoFooter from'./LogoFooter';
import ContactsScanComp from'./ContactsScanComp';

function Footer() {

    const ContainerFooter = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        width: 1440px;
        height: 137px;
        background-color: rgba(2, 148, 145, 1);
    `;
   
        return <ContainerFooter> 
            <LogoFooter />
            <ContactsScanComp />
        </ContainerFooter>
    };
    
    export default Footer;