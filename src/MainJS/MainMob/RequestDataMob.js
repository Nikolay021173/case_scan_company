import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';


const SharedContainerMob = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; 
    align-items: flex-start;
    width: 361px;
    margin-left: 14px;
    margin-top: 0px;
`;

const H1 = styled.h1`
    font-family: Ferry;
    font-weight: 900;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
`;

const Span = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
`;

const Button = styled.button`
    width: 335px;
    height: 59px;
    border-radius: 5px;
    border: none;
    background-color: rgba(89, 112, 255, 1);
    font-family: Inter;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 1%;
    color: rgba(255, 255, 255, 1);
    margin-top: 32px;
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const ContainerImageMob = styled.div`
        margin-top: 27px;
`;

function RequestDataMob() {  
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate(`/requestingData/1`);
    }; 
    return <SharedContainerMob> 
         <H1>сервис по поиску<br/> публикаций<br/> 
                о компани<br/> 
                по его ИНН
            </H1>
            <Span>
                  Комплексный анализ публикаций, получение данных 
                  в формате PDF<br/> на электронную почту.
            </Span>
            <Button onClick={handleLoginClick}>Запросить данные</Button>
            <ContainerImageMob>
                <img src={require("../../Images/Main-page/Mobile-version/log-data-analysis-mob.png")} 
                alt="Анализ запроса данных"></img>
            </ContainerImageMob>  
        </SharedContainerMob>
};

export default RequestDataMob;