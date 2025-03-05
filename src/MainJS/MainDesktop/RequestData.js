import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const SharedContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        width: 1320px;
        height: 620px;
        margin-left: 60px;
        margin-top: 22px;
    `; 

const ContainerRequestData = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
`;

const H1 = styled.h1`
            font-family: Ferry;
            font-size: 60px;
            font-weight: 900;
            line-height: 72px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            width: 743px;
            height: 288px;
    `;

const Span = styled.span`
            width: 534px;
            height: 48px;
            width: 534px;
            height: 48px;
            font-family: Inter;
            font-size: 20px;
            font-weight: 400;
            line-height: 24.2px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            margin-top: -14px;
`;

//const hiddenButton = 'none';

const Button = styled.button`
            width: 335px;
            height: 59px;
            border-radius: 5px;
            border: none;
            background-color: rgba(89, 112, 255, 1);
            font-family: Inter;
            font-size: 22px;
            font-weight: 500;
            line-height: 26.63px;
            letter-spacing: 0.01em;
            text-align: center;
            text-underline-position: from-font;
            color: rgba(255, 255, 255, 1);
            margin-top: 70px;
            &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
`;

const ContainerImage = styled.div`
            margin-left: -20px;
`;



function RequestData({hiddenButton}) {   

    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(`/requestingData/1`);
  };
  
        return <SharedContainer> 
          <ContainerRequestData>
            <H1>сервис по поиску<br/> публикаций<br/> 
                о компани<br/> 
                по его ИНН
            </H1>
            <Span>
                  Комплексный анализ публикаций, получение данных 
                  в формате PDF на электронную почту.
            </Span>
            <Button onClick={handleLoginClick} style={{display: `${hiddenButton}`}}>Запросить данные</Button>
          </ContainerRequestData>
          <ContainerImage>
                <img src={require("../../Images/Main-page/Desktop-version/log-data-analysis.png")} 
                alt="Анализ запроса данных"></img>
            </ContainerImage>  
        </SharedContainer>
    };
    
    export default RequestData;