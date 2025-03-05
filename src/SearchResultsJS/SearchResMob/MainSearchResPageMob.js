import React/*, {useState}*/ from 'react';
import HeaderAuthUserMob from'../../HeaderJS/HeaderMob/HeaderAuthUserMob';
import SearchResPageMob from'./SearchResPageMob';
import FooterMob from'../../FooterJS/FooterMob/FooterMob';



function MainSearchResPageMob() {   
        return <> 
            <HeaderAuthUserMob />
            <SearchResPageMob />
            <FooterMob />
        </>
    };
    
    export default MainSearchResPageMob;