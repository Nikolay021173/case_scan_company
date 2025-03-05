import React/*, {useState}*/ from 'react';
import HeaderAuthUserMob from'../../HeaderJS/HeaderMob/HeaderAuthUserMob';
import FooterMob from'../../FooterJS/FooterMob/FooterMob';
import MainAuthUserMob from'./MainAuthUserMob';



function MainPageMob() {   
    return <> 
        <HeaderAuthUserMob />
        <MainAuthUserMob />
        <FooterMob />
    </>
};

export default MainPageMob;