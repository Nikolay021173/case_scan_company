import React/*, {useState}*/ from 'react';
import styled from 'styled-components';


function ContactsScanComp() {

    const ContainerContacts = styled.div`
        margin-top: 25px;
        margin-left: 995px;
        width: 199px;
        height: 51px;
        color: rgba(255, 255, 255, 1);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        text-underline-position: from-font;
        letter-spacing: 0.01em;
        text-align: right;
    `;

    const Span = styled.span`
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        text-align: left;
        text-underline-position: from-font;
    `;
   
        return <ContainerContacts>

            <div>
                    г. Москва, Цветной б-р, 40<br/>
                    +7 495 771 21 11<br/>
                    info@skan.ru
                
            </div><br/>
            <Span>Copyright. 2022</Span>
            
        </ContainerContacts>
    };
    
    export default ContactsScanComp;