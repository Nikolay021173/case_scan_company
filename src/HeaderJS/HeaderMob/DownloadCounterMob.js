import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

function DownloadCounterMob() {

  const ContainerCounterMob = styled.div`
        display: block;
        box-sizing: border-box;
        width: 132px;
        height: 75px;
        border-radius: 5px;
        opacity: 0.3px;
        background-color: rgba(217, 217, 217, 1); 
        padding-left: 5px;
        padding-rigth: 10px;  
        margin-left: 31px;  
        margin-top: 9px; 
  `;

  const Img = styled.img`
   @keyframes spin {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
            }

        margin: 25px 49px;
        animation: spin 2s linear infinite;
  `;
   
  
        return <ContainerCounterMob>
            <Img src={require("../../Images/generalis-image/Mobile-version/download-icon-mob.png")} 
         alt="Загрузка запрошенных данных"></Img>
        </ContainerCounterMob>
    };
    
    export default DownloadCounterMob;