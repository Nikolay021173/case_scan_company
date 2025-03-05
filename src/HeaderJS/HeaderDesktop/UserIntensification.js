import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';

function UserIntensification({pathInPage1, pathInPage2}) {

    const Intensification = styled.div`
        margin-top: 34px;
        margin-bottom: 34px;
        margin-left: 291px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 251px;
        height: 26px;
        opacity: 0px;
    `/*display: none*/;

    const Separator = styled.div`
        width: 2px;
        height: 26px;
        gap: 0px;
        opacity: 0.6px;
        angle: -180 deg;
        background: rgba(2, 148, 145, 1);
    `;

    const Ref = styled.a`
            padding-top: 5px;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 16.94px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            text-decoration: none;
            color: rgba(0, 0, 0, 1);
            &:hover {
            color: rgba(0, 0, 0, 0.3);
            }
    `;

    const ButInput = styled.button`
           width: 65px;
            height: 26px;
            border: none;
            border-radius: 5px;
            opacity: 0px;
            font-family: Inter;
            font-size: 14px;
            font-weight: 500;
            line-height: 16.94px;
            letter-spacing: 0.01em;
            text-align: center;
            text-underline-position: from-font;
            text-decoration: none;
            background: rgba(124, 227, 225, 1);
            &:hover {
            background-color: rgba(124, 227, 225, 0.3);
                cursor: pointer;
            }
    `;



    const navigate = useNavigate();
   
 const handleRegisterClick = () => {
    navigate(pathInPage1);
 } 

  const handleLoginClick = () => {
    navigate(pathInPage2);
  };
 
   
        return <Intensification> 
            <Ref href={''} onClick={handleRegisterClick}>Зарегистрироваться</Ref>
            <Separator></Separator>
            <ButInput onClick={handleLoginClick} >Войти</ButInput>
        </Intensification>
    };
    
    export default UserIntensification;