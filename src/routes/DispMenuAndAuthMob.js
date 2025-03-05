import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import LogoHeaderAndCloseMob from'../HeaderJS/HeaderMob/LogoHeaderAndCloseMob';
import MenuMob from'../HeaderJS/HeaderMob/MenuMob';
import UserIntensificationMob from'../HeaderJS/HeaderMob/UserIntensificationMob';

function DispMenuAndAuthMob() {

  const ContainerMenuAndAuthMob = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        width: 375px;
        height: 494px;
        background: rgba(2, 148, 145, 1);
       
  `;
  
        return <ContainerMenuAndAuthMob >
           <LogoHeaderAndCloseMob />
           <MenuMob />
           <UserIntensificationMob />
        </ContainerMenuAndAuthMob >
        
    };
    
    export default DispMenuAndAuthMob;