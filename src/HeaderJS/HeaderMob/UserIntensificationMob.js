import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

function UserIntensificationMob() {

    const IntensificationMob = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 87px;
        margin-left: 40px;
    `;

    const Ref = styled.a`
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            line-height: 19.36px;
            letter-spacing: 0.01em;
            text-align: left;
            text-underline-position: from-font;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.5);
            &:hover {
                color: rgba(0, 0, 0, 0.3);
                cursor: pointer;
            }
    `;

    const ButInput = styled.button`
            width: 295px;
            height: 51.96px;
            border: none;
            border-radius: 5px;
            background-color: rgba(124, 227, 225, 1);
            font-family: Inter;
            font-size: 20px;
            font-weight: 500;
            line-height: 24.2px;
            letter-spacing: 0.01em;
            text-align: center;
            text-underline-position: from-font;
            color: rgba(0, 0, 0, 1);
            margin-top: 21px;
            &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
    `;

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate(`/loginPage/1`);
      }
        return <IntensificationMob> 
            <Ref href={require('../..')}>Зарегистрироваться</Ref>
            <ButInput onClick={handleLoginClick}>Войти</ButInput>
        </IntensificationMob>
    };
    
    export default UserIntensificationMob;