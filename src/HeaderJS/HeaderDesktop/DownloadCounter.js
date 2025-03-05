import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

function DownloadCounter() {


  const ContainerCounter = styled.div`
        display: block;
        box-sizing: border-box;
        width: 175px;
        height: 63px;
        border-radius: 5px;
        opacity: 0.3px;
        background-color: rgba(217, 217, 217, 1);
        padding-top: 14px;
        padding-bottom: 18px;
        padding-left: 10px;
        margin-top: 15px;
        margin-left: 127px;
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

        margin: 19px 75px;
        animation: spin 2s linear infinite;
  `;
   
  
        return <ContainerCounter>
            <Img src={require("../../Images/generalis-image/Desktop-version/download-icon.png")} 
         alt="Загрузка запрошенных данных"></Img>
        </ContainerCounter>
    };
    
    export default DownloadCounter;