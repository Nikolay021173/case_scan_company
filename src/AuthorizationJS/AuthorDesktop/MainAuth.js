import React/*, {useState}*/ from 'react';
import HeaderAuth from'../../HeaderJS/HeaderDesktop/HeaderAuth';
import AuthorizationPage from'./AuthorizationPage';
import Footer from'../../FooterJS/FooterDesktop/Footer';

function MainAuth() {   
        return <div> 
            <HeaderAuth />  
            <AuthorizationPage />       
            <Footer />
        </div>
    };
    
    export default MainAuth;