import React/*, {useState}*/ from 'react';
import HeaderAuthUserMob from'../../HeaderJS/HeaderMob/HeaderAuthUserMob';
import FooterMob from'../../FooterJS/FooterMob/FooterMob';
import SearchPageMob from'./SearchPageMob';

function MainSearchPageMob() {   
        return <div> 
            <HeaderAuthUserMob />
            <SearchPageMob />
            <FooterMob />
        </div>
    };
    
    export default MainSearchPageMob;