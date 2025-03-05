import React/*, {useState}*/ from 'react';
import styled from 'styled-components';
import {useAccount} from '../../AuthorizationJS/AuthorUtil/AuthorCont';
import {useNavigate} from 'react-router-dom';

function AuthorizedUser() {

  const ContainerAuthUser = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center; 
        width: 113px;
        height: 32px;  
        margin-top: 30px;
        margin-left: 131px;  
  `;

   const DivUser = styled.div`
        display: block;
        margin-right: 4px;
        margin-top: 2px;
   `;

   const NameUser = styled.p`
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.94px;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
        margin-top: -1px;
        margin-bottom: -2px;
   `;

   const Output = styled.a`
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 12.1px;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
        margin: 0px;
       text-decoration: none; 
       &:hover {
                cursor: pointer;
                opacity: 0.3;
            }
   `;

   const { setLoggedIn } = useAccount();
   const navigate  = useNavigate();

   const handleLogout = () => {
     setLoggedIn(false);
     localStorage.removeItem('accessToken');
     localStorage.removeItem('tokenExpire');
     navigate(`/loginPage/1`);
   };
  
        return <ContainerAuthUser>
           <DivUser>
            <NameUser>Алексей А.</NameUser>
            <Output href={require('../..')}  onClick={handleLogout}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Выйти</Output>
            </DivUser>
            <>
            <img src={require("../../Images/generalis-image/Desktop-version/avatae-users.png")} 
                alt="Аватар пользователя"></img>
             </>            
        </ContainerAuthUser>
    };
    
    export default AuthorizedUser;