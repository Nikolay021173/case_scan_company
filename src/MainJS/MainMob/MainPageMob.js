import React/*, {useState}*/ from 'react';
import HeaderAuthMob from'../../HeaderJS/HeaderMob/HeaderAuthMob';
import FooterMob from'../../FooterJS/FooterMob/FooterMob';
import MainAuthUserMob from'./MainAuthUserMob';



function MainPageMob() {   
    return <> 
        <HeaderAuthMob />
        <MainAuthUserMob />
        <FooterMob />
    </>
};

export default MainPageMob;