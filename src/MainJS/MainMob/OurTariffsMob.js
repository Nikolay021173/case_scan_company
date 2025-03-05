import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {ReactComponent as BusinessIcon} from '../../Images/Main-page/Mobile-version/BusinessIconMob.svg';
import {ReactComponent as FreelanceIcon} from '../../Images/Main-page/Mobile-version/FreelanceIconMob.svg';
import {ReactComponent as ResearchIcon} from '../../Images/Main-page/Mobile-version/ResearchIconMob.svg';
import {useNavigate} from 'react-router-dom';

const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);

`;

const TariffsAndConditionsMob = styled.div`
        width: 335px;
        height: 512px;
       border-radius: 10px 10px 10px 10px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const WhoIntendedMob = styled.div`
   width: 335px;
   height: 132px;
   border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: left; 
`;

const GeneralInfPartMob = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-top: 37px;
`;

const PricingInform = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
`;

const Div = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 14px;
        margin-bottom: 43px;
`;

const H3 = styled.h3`
        font-family: Inter;
        font-weight: 500;        
        letter-spacing: 1%;
        color: rgba(0, 0, 0, 1);
`;

const Span1 = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 1%;
        white-space: nowrap;
        color: rgba(0, 0, 0, 1);
`;

const ContainerInfo = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 24px;
        margin-top: 7px;
`;


const Price1 = styled.span`
   font-family: Inter;
    font-weight: 500;
    font-size: 30px;
    line-height: 36.31px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
`;

const Price2 = styled.span`
    font-family: Inter;
font-weight: 500;
font-size: 25px;
line-height: 30.26px;
letter-spacing: 1%;
text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
`;

const InstPlanCond = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
`;

const ContainerPrice = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 24px;
`;

const ContainerTariff = styled.div`
        display: flex;
        flex-direction: column;
        jalign-items: flex-start;
        margin-left: 24px;
`;

const Span2 = styled.span`
    font-family: Inter;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);

`;

const Ul = styled.ul`
    padding: 0;
    list-style-position: inside;
    margin: 10px 0 0 0;
    
`;
const Li = styled.li`
      font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 1%;
        color: rgba(0, 0, 0, 1); 
`;

const Button = styled.button`
     width: 287px;
        height: 59px;
        top: 2181px;
        left: 38px;
        border-radius: 5px;
      font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 1%;
        border: none;
        margin-top: 37px;
         &:hover {
                opacity: 0.3;
                cursor: pointer;
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
            <GeneralInfPartMob>
                <TariffsAndConditionsMob style={{border: borderDiv}}>
                    <WhoIntendedMob style={{backgroundColor: color1}}>
                            <ContainerInfo>
                                <H3 style={{fontSize: '20px',lineHeight: '24.2px'}}>Beginner</H3>
                                <Span1>Для небольшого исследования</Span1>
                             </ContainerInfo>
                             <div style={{marginTop: '13px', marginLeft: '-30px'}}>
                             <ResearchIcon />
                            </div>   
                    </WhoIntendedMob>
                    <PricingInform>
                        <ContainerPrice>
                            <div><Price1>799 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>1 200 ₽</Price2></div>
                            <InstPlanCond style={{marginTop: '10px'}}>или 150 ₽/мес. при рассрочке на 24 мес.</InstPlanCond>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '36px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Безлимитная история запросов</Li>
                                <Li>Безопасная сделка</Li>
                                <Li>Поддержка 24/7</Li>                            
                            </Ul >                      
                        <Button onClick={handleBeginnerClick} style={{backgroundColor: colorButton1, color: colorTextButton1}}>
                                            Перейти в личный кабинет</Button>
                            </ContainerTariff>                   
                    </PricingInform>
                </TariffsAndConditionsMob>
                <TariffsAndConditionsMob style={{marginTop: '43px'}}>
                    < WhoIntendedMob style={{backgroundColor: color2}}>
                            <ContainerInfo>
                                <H3 style={{fontSize: '30px',lineHeight: '36.31px'}}>Pro</H3>
                                <Span1 style={{marginTop:'-20px'}}>Для HR и фрилансеров</Span1>
                            </ContainerInfo>
                            <div style={{marginLeft: '20px'}}>
                                <FreelanceIcon />
                            </div>
                    </WhoIntendedMob>
                    <PricingInform>
                    <ContainerPrice style={{marginTop: '43'}}>
                    <div><Price1>1 299 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>2 600 ₽</Price2></div>
                    <InstPlanCond style={{marginTop: '10px'}}>или 279 ₽/мес. при рассрочке на 24 мес.</InstPlanCond>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '36px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Все пункты тарифа Beginner</Li>
                                <Li>Экспорт истории</Li>
                                <Li>Рекомендации по приоритетам</Li>                            
                            </Ul>
                            <Button onClick={handleContTariffClick}  style={{backgroundColor: colorButton2, color: colorTextButton2}}>Подробнее</Button>
                        </ContainerTariff>
                    </PricingInform>
                </TariffsAndConditionsMob>
                <TariffsAndConditionsMob style={{marginTop: '43px'}}>
                    <WhoIntendedMob style={{backgroundColor: color3}}>
                            <ContainerInfo>
                                <H3 style={{color: 'rgba(255, 255, 255, 1)',
                                    fontSize: '30px', lineHeight: '36.31px'}}>Business</H3>
                                <Span1 style={{color: 'rgba(255, 255, 255, 1)',
                                    marginTop:'-20px'}}>Для корпоративных клиентов</Span1>
                             </ContainerInfo>
                             <div style={{marginTop: '15px', marginLeft: '-35px'}}>
                             <BusinessIcon />                           
                            </div>
                    </WhoIntendedMob>
                    <PricingInform>
                    <ContainerPrice style={{marginTop: '30px'}}>
                           <div><Price1>2 379 ₽</Price1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Price2>3 700 ₽</Price2></div>
                        </ContainerPrice>
                        <ContainerTariff style={{marginTop: '61px'}}>
                            <Span2>В тариф входит:</Span2>
                            <Ul style={{listStyleImage: `url(${require("../../Images/Main-page/Desktop-version/icon-checked.png")})`}}>
                                <Li>Все пункты тарифа Pro</Li>
                                <Li>Безлимитное количество запросов</Li>
                                <Li>Приоритетная поддержка</Li>                            
                            </Ul>                       
                        <Button onClick={handleBusinessClick} style={{backgroundColor: colorButton2, color: colorTextButton2}}>Подробнее</Button>
                        </ContainerTariff>
                    </PricingInform>
                </TariffsAndConditionsMob>
            </GeneralInfPartMob>
         </Div>
    };
    
    export default OurTariffs;