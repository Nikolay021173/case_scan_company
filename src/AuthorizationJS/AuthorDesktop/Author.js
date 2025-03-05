import React from 'react';
import styled from 'styled-components';
import {ReactComponent as LogoFacebook} from '../../Images/generalis-image/Deskt-and-mob-version/LogoFacebook.svg';
import {ReactComponent as LogoGoogle} from '../../Images/generalis-image/Deskt-and-mob-version/LogoGoogle.svg';
import {ReactComponent as LogoYandex} from '../../Images/generalis-image/Deskt-and-mob-version/LogoYandex.svg';
import {ReactComponent as LockIcon} from '../../Images/Authorization-page/Desktop-version/LockIcon.svg';
import {useNavigate} from 'react-router-dom';
import useAccount from '../AuthorUtil/useInputAccount';

function Author({pathPage2, pathPage3, pathPage4, pathPage5, pathPage6}) {  
    
    const Div = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left;  
        margin-left: 60px;
        margin-top: 69px;
         height: auto;
    `;

    const ContainerAuth = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;
        width: 740px;
        margin-top: -35px;
    `;

    const H2 = styled.h2`
        font-family: Ferry;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 2%;
        color: rgba(0, 0, 0, 1);
    `;

    const ContainerFormAuth = styled.form`
        width: 429px;
        height: 523px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;
        margin-left: -15px;
        margin-bottom: 80px;
        z-index: 1;
    `;

    const RegInpBut = styled.button`
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 2%;
        border-left: none;
        border-top: none;
        border-right: none;
        background-color: rgba(255, 255, 255, 1);
        height: 29px;
        margin-left: 25px;
        margin-top: 25px;
         &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
    `;

    const Label = styled.label`
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 2%;
        color: rgba(148, 148, 148, 1);
    `;

    const Input = styled.input`
            width: 379px;
            height: 43px;
            border-width: 1px;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 1);
            border: 1px solid rgba(199, 199, 199, 1);
            box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
            margin-top: 15px;
    `;

    const InpBut = styled.button`
        width: 379px;
        height: 59px;
        border-radius: 5px;
        background-color: rgba(89, 112, 255, 0.5);
        font-family: Inter;
        font-weight: 500;
        font-size: 22px;
        line-height: 26.63px;
        letter-spacing: 2%;
        color: rgba(255, 255, 255, 1);
        border: none;
        margin-top: 30px;
        &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
    `;

    const PasswRecovery = styled.button`
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 2%;
        text-decoration: underline;
        white-space: nowrap;
        align-self: center;
        width: 154px;
        height: 17px;
        color: rgba(89, 112, 255, 1);
        border: none;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 15px;
         &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
    `;

    const Span = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 19.36px;
        letter-spacing: 2%;
        color: rgba(148, 148, 148, 1);
    `;

    const Button = styled.button`
        width: 96px;
        height: 31px;
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(89, 112, 255, 0.51);
        &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
    `;

    const ContainerButAuth = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left;
    `;

    const ContainerInputAuth = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 40px;
        margin-left: 25px;
    `;

    const ContainerLogInVia = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 30px;
        margin-left: 25px;
    `;

    const ContainerButon = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: row;
        margin-top: 15px;
    `;

    const SpanError = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 1%;
        text-align: center;
	    margin-top: 3px;
        color: rgba(255, 89, 89, 1);
    `;

    const navigate = useNavigate();

      const handleGoogleClick = () => {
        navigate(pathPage2);
      };

      const handleFacebookClick = () => {
        navigate(pathPage3);
      };

      const handleYandexClick = () => {
        navigate(pathPage4);
      };

      const handleRecPassw = () => {
        navigate(pathPage5);
      }

      const handleRegisterClick = () => {
        navigate(pathPage6);
      }


      const { loginUser, passwUser, errorLoginUser, errorPasswUser, handleLogin, 
        handleLoginUserChange, handlePasswUserChange } = useAccount();


        
      

    
    return <Div> 
        <ContainerAuth>
        <H2>
            Для оформления подписки 
            на тариф, необходимо авторизоваться.
        </H2>
        <div style={{marginTop: '-15px'}}>
        <img src={require("../../Images/Authorization-page/Desktop-version/logo-authorization.png")} 
                alt="Авторизация пользователя"></img>
        </div>
        </ContainerAuth>
        <LockIcon style={{marginTop: '-55px', zIndex:'2'}} />
        <ContainerFormAuth onSubmit={handleLogin}>
            <ContainerButAuth>
                <RegInpBut style={{width: '151px', color: 'rgba(2, 148, 145, 1)',
                    borderBottom: '2px solid rgba(2, 148, 145, 1)'
                }}>Войти</RegInpBut>
                <RegInpBut onClick={handleRegisterClick} style={{width: '213px', color: 'rgba(199, 199, 199, 1)',
                    borderBottom: '2px solid rgba(199, 199, 199, 1)'}}>Зарегистрироваться</RegInpBut>
            </ContainerButAuth>
            <ContainerInputAuth>

                <Label htmlFor="loginUser">Логин или номер телефона:</Label>
                <Input type="text" id='loginUser' name='loginUser' value={loginUser} 
                       
                       onChange={handleLoginUserChange} required 
                       style={
                        {borderColor : errorLoginUser ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)'}
                        }/>
                       {errorLoginUser && <SpanError>Введите корректные данные</SpanError>}

                <Label htmlFor="passwUser" style={{marginTop: '20px'}}>Пароль:</Label>
                <Input type="password" id='passwUser' name='passwUser' value={passwUser} 
                       
                        onChange={handlePasswUserChange}  autoComplete="current-password" required
                        style={
                            {borderColor: errorPasswUser ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)'}
                        }/>
                        {errorPasswUser && <SpanError>Неправильный пароль</SpanError>}

                <InpBut type="submit" disabled={!loginUser || !passwUser} >Войти</InpBut>
                <PasswRecovery onClick={handleRecPassw}>Восстановить пароль</PasswRecovery>
            </ContainerInputAuth>
            <ContainerLogInVia>
                    <Span>Войти через:</Span>
                <ContainerButon>
                    <Button onClick={handleGoogleClick}><LogoGoogle /></Button>
                    <Button onClick={handleFacebookClick} style={{marginLeft: '10px'}}><LogoFacebook /></Button>
                    <Button onClick={handleYandexClick} style={{marginLeft: '10px'}}><LogoYandex /></Button>
                </ContainerButon>
            </ContainerLogInVia>
        </ContainerFormAuth>
    </Div>
};

export default Author;