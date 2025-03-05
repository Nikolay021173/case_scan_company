import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAccount} from "./AuthorCont";


const useInputAccount = () => {
    const [loginUser, setLoginUser] = useState('');
    const [passwUser, setPasswUser] = useState('');
    const [errorLoginUser, setErrorLoginUser] = useState(false);
    const [errorPasswUser, setErrorPasswUser] = useState(false);
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useAccount();

    useEffect(() => {
        if (loggedIn) {
          navigate(`/account/1`);
        }
      }, [loggedIn, navigate]);

      const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              login: loginUser,
              password: passwUser,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('tokenExpire', data.expire);
            setLoggedIn(true);
            navigate(`/account/1`);
          } else {
            throw new Error(data.message || 'Ошибка при входе в аккаунт пользователя');
          }
        } catch (error) {
          console.error('Ошибка интентификации пользователя:', error);
          setErrorLoginUser(true);
          setErrorPasswUser(true);
        }
    };
        const validateLoginUser = (input) => {
            setErrorLoginUser(false);
          };
        
          const validatePasswUser = (input) => {
            setErrorPasswUser(false);
          };
        
          const handleLoginUserChange = (e) => {
            const input = e.target.value;
            setLoginUser(input);
            validateLoginUser(input);
          };
        
          const handlePasswUserChange = (e) => {
            const input = e.target.value;
            setPasswUser(input);
            validatePasswUser(input);
          };

          return { loginUser, passwUser, errorLoginUser, errorPasswUser, handleLogin, 
            handleLoginUserChange, handlePasswUserChange 
      };
};

export default useInputAccount;