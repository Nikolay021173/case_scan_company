import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {ReactComponent as BusinessIcon} from '../../Images/Main-page/Desktop-version/BusinessIcon.svg';
import {ReactComponent as FreelanceIcon} from '../../Images/Main-page/Desktop-version/FreelanceIcon.svg';
import {ReactComponent as ResearchIcon} from '../../Images/Main-page/Desktop-version/ResearchIcon.svg';
import {useNavigate} from 'react-router-dom';

const H2 = styled.h2`
        width: 743px;
        height: 54px;
        font-family: Ferry;
        font-size: 45px;
        font-weight: 900;
        line-height: 54px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
`;

const TariffsAndConditions = styled.div`
        width: 415px;
        height: 540px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const WhoIntended = styled.div`
    width: 415px;
    height: 132px;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: left; 
`;

const GeneralInfPart = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 38px;
`;

const PricingInform = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start
`;

const Div = styled.div`
        width: 1320px;
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 60px;
        margin-bottom: 118px
`;

const H3 = styled.h3`
        font-family: Inter;
        font-size: 30px;
        font-weight: 500;
        line-height: 36.31px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
`;

const Span1 = styled.span`
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        margin-top: -20px;
`;

const ContainerInfo = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 30px;
        margin-top: 0
`;

const CurrPricPlan = styled.div`
        width: 134px;
        height: 24px;
        border-radius: 10px;
        background-color: rgba(59, 165, 224, 1);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(255, 255, 255, 1);
        box-sizing: border-box;
        padding: 3px 13px;
        margin-top: 12px;
        margin-left: 271px;
    `;

const Price1 = styled.span`
    font-family: Inter;
    font-size: 30px;
    font-weight: 500;
    line-height: 36.31px;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
`;

const Price2 = styled.span`
    font-family: Inter;
    font-size: 25px;
    font-weight: 500;
    line-height: 30.26px;
    letter-spacing: 0.01em;
    text-align: left;
    text-decoration-line: line-through;
    text-underline-position: from-font;
    color: rgba(0, 0, 0, 0.5);
`;

const InstPlanCond = styled.span`
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    color: rgba(0, 0, 0, 1);
    margin-top: 13px;
`;

const ContainerPrice = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 30px;
`;

const ContainerTariff = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 30px;
`;

const Span2 = styled.span`
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24.2px;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    color: rgba(0, 0, 0, 1);
`;

const Ul = styled.ul`
    padding: 0;
    list-style-position: inside;
    margin: 10px 0 0 0;
    
`;
const Li = styled.li`
        font-family: Inter;
        font-size: 18px;
        font-weight: 400;
        line-height: 21.78px;
        letter-spacing: 0.01em;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
`;

const Button = styled.button`
            width: 355px;
            height: 59px;
            border-radius: 5px;
            font-family: Inter;
            font-size: 20px;
            font-weight: 400;
            line-height: 24.2px;
            letter-spacing: 0.01em;
            text-align: center;
            border: none;
            text-underline-position: from-font;
            margin-top: 55px;
             &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
`

const borderDiv = '2px solid rgba(255, 182, 79, 1)';

const color1 = 'rgba(255, 182, 79, 1)';
const color2 = 'rgba(124, 227, 225, 1)';
const color3 = 'rgba(0, 0, 0, 1)';

const colorButton1 = 'rgba(210, 210, 210, 1)';
const colorButton2 = 'rgba(89, 112, 255, 1)'
const colorTextButton1 = 'rgba(0, 0, 0, 1)';
const colorTextButton2 = 'rgba(255, 255, 255, 1)'

function  OurTariffs({pathInPage1, pathInPage2, pathInPage3}) { 
    const navigate = useNavigate();
       
     const handleBeginnerClick = () => {
        navigate(pathInPage1);
     } 
    
      const handleContTariffClick = () => {
        navigate(pathInPage2);
      };  

      const handleBusinessClick = () => {
        navigate(pathInPage3);
      };  
        return <Div> 
            <H2>наши тарифы</H2>
            <GeneralInfPart>
                <TariffsAndConditions style={{border: borderDiv}}>
                    <WhoIntended style={{backgroundColor: color1}}>
                            <ContainerInfo>
                                <H3>Beginner</H3>
                                <Span1>Для небольшого исследования</Span1>
                             </ContainerInfo>
                             <div style={{marginTop: '11px'}}>
                            <ResearchIcon />
                            </div>   
                    </WhoIntended>
                    <PricingInform>
                    <CurrPricPlan>Текущий тариф</CurrPricPlan>
                        <ContainerPrice style={{marginTop: '-7px'}}>
                            <div><Price1>799 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>1 200 ₽</Price2></div>
                            <InstPlanCond>или 150 ₽/мес. при рассрочке на 24 мес.</InstPlanCond>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '59px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Безлимитная история запросов</Li>
                                <Li style={{marginTop: '3px'}}>Безопасная сделка</Li>
                                <Li style={{marginTop: '3px'}}>Поддержка 24/7</Li>                            
                            </Ul >                      
                        <Button onClick={handleBeginnerClick} style={{backgroundColor: colorButton1, color: colorTextButton1}}>
                                            Перейти в личный кабинет</Button>
                            </ContainerTariff>                   
                    </PricingInform>
                </TariffsAndConditions>
                <TariffsAndConditions>
                    <WhoIntended style={{backgroundColor: color2}}>
                            <ContainerInfo>
                                <H3>Pro</H3>
                                <Span1>Для HR и фрилансеров</Span1>
                            </ContainerInfo>
                            <div style={{marginLeft: '52px'}}>
                                <FreelanceIcon />
                            </div>
                    </WhoIntended>
                    <PricingInform>
                    <ContainerPrice style={{marginTop: '36px'}}>
                    <div><Price1>1 299 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>2 600 ₽</Price2></div>
                    <InstPlanCond>или 279 ₽/мес. при рассрочке на 24 мес.</InstPlanCond>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '59px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Все пункты тарифа Beginner</Li>
                                <Li style={{marginTop: '3px'}}>Экспорт истории</Li>
                                <Li style={{marginTop: '3px'}}>Рекомендации по приоритетам</Li>                            
                            </Ul>
                            <Button onClick={handleContTariffClick} style={{backgroundColor: colorButton2, color: colorTextButton2,}}>Подробнее</Button>
                        </ContainerTariff>
                    </PricingInform>
                </TariffsAndConditions>
                <TariffsAndConditions>
                    <WhoIntended style={{backgroundColor: color3}}>
                            <ContainerInfo>
                                <H3 style={{color: 'rgba(255, 255, 255, 1)'}}>Business</H3>
                                <Span1 style={{color: 'rgba(255, 255, 255, 1)'}}>Для корпоративных клиентов</Span1>
                             </ContainerInfo>
                             <div style={{marginTop: '23px', marginLeft: '20px'}}>
                             <BusinessIcon />                           
                            </div>
                    </WhoIntended>
                    <PricingInform>
                    <ContainerPrice style={{marginTop: '36px'}}>
                           <div><Price1>2 379 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>3 700 ₽</Price2></div>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '91px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Все пункты тарифа Pro</Li>
                                <Li style={{marginTop: '3px'}}>Безлимитное количество запросов</Li>
                                <Li style={{marginTop: '3px'}}>Приоритетная поддержка</Li>                            
                            </Ul>                       
                        <Button onClick={handleBusinessClick} style={{backgroundColor: colorButton2, color: colorTextButton2}}>Подробнее</Button>
                        </ContainerTariff>
                    </PricingInform>
                </TariffsAndConditions>
            </GeneralInfPart>
         </Div>
    };
    
    export default OurTariffs;