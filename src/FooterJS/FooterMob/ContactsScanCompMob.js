import React/*, {useState}*/ from 'react';
import styled from 'styled-components';


function ContactsScanCompMob() {
    const ContainerContactsMob = styled.div`
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        letter-spacing: 0.01em;
        text-align: right;
        text-underline-position: from-font;
        color: rgba(255, 255, 255, 1);
        margin-top: 25px;
        margin-left: 28px;
    `;

    const Span = styled.span`
            font-family: Inter;
            font-size: 12px;
            font-weight: 400;
            line-height: 14.52px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            color: rgba(255, 255, 255, 1);
    `;
   
        return <ContainerContactsMob>

            <div>
                    г. Москва, Цветной б-р, 40<br/>
                    +7 495 771 21 11<br/>
                    info@skan.ru
                
            </div><br/>
            <Span>Copyright. 2022</Span>
            
        </ContainerContactsMob>
    };
    
    export default ContactsScanCompMob;