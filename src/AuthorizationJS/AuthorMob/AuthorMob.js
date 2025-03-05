import React/*, {useState}*/ from 'react';
import {ReactComponent as LogoFacebook} from '../../Images/generalis-image/Deskt-and-mob-version/LogoFacebook.svg';
import {ReactComponent as LogoGoogle} from '../../Images/generalis-image/Deskt-and-mob-version/LogoGoogle.svg';
import {ReactComponent as LogoYandex} from '../../Images/generalis-image/Deskt-and-mob-version/LogoYandex.svg';
import {ReactComponent as LockIconMob} from '../../Images/Authorization-page/Mobile-version/LockIconMob.svg';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import useAccount from '../AuthorUtil/useInputAccount';

const ContainerFormAuthMob = styled.form`
        width: 335px;
        height: 504px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        margin-top: -15px;
        align-items: flex-start;       
        z-index: 1;
    `;

const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 22px;
    line-height: 26.4px;
    letter-spacing: 2%;
    width: 338px;
    color: rgba(0, 0, 0, 1);
`;

 const ContainerButAuthMob = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left;
        margin-left: 15px;
        margin-top: 25px;
 `;  
 
 const RegInpButMob = styled.div`
        width: 305px;
        height: 29px;
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 2%;
        background-color: rgba(255, 255, 255, 1);   
        text-align: center;   
        &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
 `;

 const ContainerInputAuthMob = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 15px;
        margin-top: 40px;
 `;

 const Label = styled.label`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 2%;
    color: rgba(148, 148, 148, 1);
 `;

 const Input = styled.input`
    width: 305px;
    height: 43px;
    border-radius: 5px;
    border: 1px solid rgba(199, 199, 199, 1);
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    margin-top: 10px;
    &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
 `;

 const InpBut = styled.button`
    background-color: rgba(89, 112, 255, 0.5);
    color: rgba(255, 255, 255, 1);
    border: none;
    width: 305px;
    height: 59px;
    border-radius: 5px;
    font-family: Inter;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 2%;
    margin-top: 34px;
    &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
 `;

 const PasswRecovery = styled.button`
        color: rgba(89, 112, 255, 1);
        border: none;
        background-color: rgba(255, 255, 255, 1);
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 2%;
        text-decoration: underline;
        margin-top: 15px;
        &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
 `;

 const ContainerLogInViaMob = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 15px;
        margin-top: 30px;
 `;

 const Span = styled.span`
     color: rgba(148, 148, 148, 1);
     font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    letter-spacing: 2%;  
 `;

 const ContainerButonMob = styled.div`
        display: flex;
        justify-content: left;
        flex-direction: row;
        margin-top: 15px;
 `;

 const Button = styled.button`
        background-color: rgba(255, 255, 255, 1);
        width: 96px;
        height: 31px;
        border-radius: 3px;
        border: 1px solid rgba(89, 112, 255, 0.51);
        &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
 `;

 const SpanError = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    letter-spacing: 1%;
    text-align: center;
	margin-top: 3px;
    color: rgba(255, 89, 89, 1);
 `;




function AuthorMob({pathPage1, pathPage2, pathPage3, pathPage4, pathPage5, pathPage6}) {   
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

    return <div style={{marginLeft: '14px', marginBottom: '78px', marginTop: '31px'}}> 
        <div>
            <H2>Для оформления подписки<br/> 
                на тариф, необходимо авторизоваться.
            </H2>
            <LockIconMob style={{marginLeft: '95px', marginTop: '30px', zIndex:'2'}} />
            <ContainerFormAuthMob onSubmit={handleLogin}>
            <ContainerButAuthMob>
                <RegInpButMob style={{width: '103px', color: 'rgba(2, 148, 145, 1)',
                    borderBottom: '2px solid rgba(2, 148, 145, 1)'
                }}>Войти</RegInpButMob>
                <RegInpButMob onClick={handleRegisterClick} style={{marginLeft: '20px', width: '182px', color: 'rgba(199, 199, 199, 1)',
                    borderBottom: '2px solid rgba(199, 199, 199, 1)'}}>Зарегистрироваться</RegInpButMob>
            </ContainerButAuthMob>
            <ContainerInputAuthMob>

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
            </ContainerInputAuthMob>
            <ContainerLogInViaMob>
                    <Span>Войти через:</Span>
                <ContainerButonMob>
                    <Button onClick={handleGoogleClick}><LogoGoogle /></Button>
                    <Button onClick={handleFacebookClick} style={{marginLeft: '9px'}}><LogoFacebook /></Button>
                    <Button onClick={handleYandexClick} style={{marginLeft: '9px'}}><LogoYandex /></Button>
                </ContainerButonMob>
            </ContainerLogInViaMob>
            </ContainerFormAuthMob>
        </div>
        <div style={{marginTop: '50px'}}>
            <img src={require("../../Images/Authorization-page/Mobile-version/logo-authorization-mob.png")} 
                alt="Авторизация пользователя"></img>
        </div>
    </div>
};

export default AuthorMob;