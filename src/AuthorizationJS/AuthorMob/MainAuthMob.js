import React/*, {useState}*/ from 'react';
import HeaderAuthMob from'../../HeaderJS/HeaderMob/HeaderAuthMob';
import AuthorizationPageMob from'./AuthorizationPageMob';
import FooterMob from'../../FooterJS/FooterMob/FooterMob';



function MainAuthMob() {   
    return <div> 
        <HeaderAuthMob />  
        <AuthorizationPageMob />       
        <FooterMob />
    </div>
};

export default MainAuthMob;