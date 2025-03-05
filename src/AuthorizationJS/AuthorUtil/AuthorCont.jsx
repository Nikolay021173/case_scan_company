import React, {createContext, useContext, useEffect, useState} from 'react';

const AuthorCont = createContext();
export const AuthorProv = ({ children  }) => {
 
    const [loggedIn, setLoggedIn] = useState(false);

    const authorStatus = () => {
        const accessToken = localStorage.getItem('accessToken'); 
        const tokenExpire = localStorage.getItem('tokenExpire'); 
        const todayDate = new Date();
        const tokenExpireDate = new Date(tokenExpire);

        if (!accessToken || !tokenExpire || tokenExpireDate <= todayDate) {
            setLoggedIn(false); 
            localStorage.removeItem('accessToken'); 
            localStorage.removeItem('tokenExpire'); 
          } else {
            setLoggedIn(true); 
          }
        };

        useEffect(() => { 
            authorStatus();
         }, 
            []
        );

        return (
            <AuthorCont.Provider value={{ loggedIn, setLoggedIn, authorStatus }}>
              { children  }
            </AuthorCont.Provider>
          );
        };
        
        export const useAccount = () => useContext(AuthorCont);
  