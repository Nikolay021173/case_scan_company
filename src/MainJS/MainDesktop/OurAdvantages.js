import React, {useRef/*, useState*/} from 'react';
import styled from 'styled-components';
import {ReactComponent as TimeIcon} from '../../Images/Main-page/Desktop-version/TimeIcon.svg';
import {ReactComponent as SearchIcon} from '../../Images/Main-page/Desktop-version/SearchIcon.svg';
import {ReactComponent as ProtectionIcon} from '../../Images/Main-page/Desktop-version/ProtectionIcon.svg';
import {ReactComponent as ArrowLeft} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowLeft.svg';
import {ReactComponent as ArrowRigth} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowRigth.svg';


const ContainerOurAdvantages = styled.div`
        margin-left: 60px;
        margin-top: 103px; 
`;

const H2 = styled.h2`
    font-family: Ferry;
    font-size: 45px;
    font-weight: 900;
    line-height: 54px;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 70px;
`;

const Button = styled.button`
        width: 39px;
        height: 39px;
        border: none;
        background-color: rgba(255, 255, 255, 0.3);
        align-self: center; 
        &:hover {
                cursor: pointer;
                opacity: 0.3;
            }      
`;

const Span = styled.span`
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
    letter-spacing: 0.01em;
    text-align: left;
    text-underline-position: from-font;
    color: rgba(0, 0, 0, 1);
    margin-left: 20px;
    margin-top: 19px;
`;

const DivIcmgIcon = styled.div`
    margin-left: 20px;
    margin-top: 30px;
`; 

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; 
    min-width: 400px;
    height: 225px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    margin-left: 30px;
    scroll-snap-align: start;
`;

const SharedInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    margin-left: -30px;
    width: 1260px;
    height: 230px;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left; 
`;


function OurAdvantages() {   

    const carouselRef = useRef(null);

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft -= window.innerWidth / 3;
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += window.innerWidth / 3;
      }
    };

        return <ContainerOurAdvantages> 
            <H2>Почему именно мы</H2>
            <Div>
            <Button style={{marginRight: '30px'}} onClick={scrollLeft} ><ArrowLeft /></Button>
            <SharedInfoContainer ref={carouselRef}>                
                <InformationContainer>
                <DivIcmgIcon>
                            <TimeIcon />
                </DivIcmgIcon>
                    <Span>
                            Высокая и оперативная скорость<br /> обработки заявки
                    </Span>
                </InformationContainer>
                <InformationContainer>
                    <DivIcmgIcon>
                                <SearchIcon />
                    </DivIcmgIcon>
                    <Span>
                    Огромная комплексная база<br /> данных, обеспечивающая<br /> объективный ответ на запрос
                    </Span>
                </InformationContainer>
                <InformationContainer>
                    <DivIcmgIcon>
                                <ProtectionIcon />
                    </DivIcmgIcon>
                    <Span>
                        Защита конфеденциальных сведений,<br /> не подлежащих разглашению по<br /> федеральному 
                        законодательству
                    </Span>
                </InformationContainer>  


                <InformationContainer>
                <DivIcmgIcon>
                            <TimeIcon />
                </DivIcmgIcon>
                    <Span>
                            Высокая и оперативная скорость<br /> обработки заявки
                    </Span>
                </InformationContainer>
                <InformationContainer>
                    <DivIcmgIcon>
                                <SearchIcon />
                    </DivIcmgIcon>
                    <Span>
                    Огромная комплексная база<br /> данных, обеспечивающая<br /> объективный ответ на запрос
                    </Span>
                </InformationContainer>


            </SharedInfoContainer>
            <Button style={{marginLeft: '30px'}} onClick={scrollRight} ><ArrowRigth /></Button>
            </Div>
        </ContainerOurAdvantages>
    };
    
    export default OurAdvantages;