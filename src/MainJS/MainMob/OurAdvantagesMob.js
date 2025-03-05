import React, {useRef/*, useState*/} from 'react';
import styled from 'styled-components';
import {ReactComponent as TimeIcon} from '../../Images/Main-page/Desktop-version/TimeIcon.svg';
import {ReactComponent as SearchIcon} from '../../Images/Main-page/Desktop-version/SearchIcon.svg';
import {ReactComponent as ProtectionIcon} from '../../Images/Main-page/Desktop-version/ProtectionIcon.svg';
import {ReactComponent as ArrowLeft} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowLeft.svg';
import {ReactComponent as ArrowRigth} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowRigth.svg';

const ContainerOurAdvantagesMob = styled.div`
margin-top: 53px;`;

const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
    margin-left: 14px;
`;

const Div = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: left; 
    align-items: center;
    margin-top: 32px;
`;

const Button = styled.button`
    width: 39px;
    height: 39px;
    border: none;
    background-color: rgba(255, 255, 255, 1);
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }

`;

const Span = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
    margin-left: 18px;
    margin-top: 19px;
`;

const SharedInfoContainerMob = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-start; 
        align-items: center;
        width: 310px;
        height: 200px;
        margin: 0;
        overflow: hidden;
        scroll-snap-type: x mandatory;
`;

const InformationContainerMob = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        min-width: 298px;
        height: 188px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);       
        margin-left: 20px;
        scroll-snap-align: start;
` 

const DivIcmgIconMob = styled.div`
    margin-left: 17px;
    margin-top: 30px;
`;

function OurAdvantagesMob() {  

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

    return <ContainerOurAdvantagesMob> 
            <H2>Почему<br/> именно мы</H2>
            <Div>
            <Button style={{marginRight: '15px'}} onClick={scrollLeft}><ArrowLeft /></Button>
            <SharedInfoContainerMob ref={carouselRef}>                
                <InformationContainerMob>
                <DivIcmgIconMob>
                            <TimeIcon />
                </DivIcmgIconMob>
                    <Span>
                            Высокая и оперативная скорость обработки заявки
                    </Span>
                </InformationContainerMob>
                <InformationContainerMob>
                    <DivIcmgIconMob>
                                <SearchIcon />
                    </DivIcmgIconMob>
                    <Span>
                    Огромная комплексная база<br /> данных, обеспечивающая<br /> объективный ответ на запрос
                    </Span>
                </InformationContainerMob>
                <InformationContainerMob>
                    <DivIcmgIconMob style={{marginTop: '10px'}}>
                                <ProtectionIcon />
                    </DivIcmgIconMob>
                    <Span>
                        Защита конфеденциальных сведений, не подлежащих разглашению по федеральному 
                        законодательству
                    </Span>
                </InformationContainerMob>               
            </SharedInfoContainerMob>
            <Button onClick={scrollRight}><ArrowRigth /></Button>
            </Div>
        </ContainerOurAdvantagesMob>

};

export default OurAdvantagesMob;