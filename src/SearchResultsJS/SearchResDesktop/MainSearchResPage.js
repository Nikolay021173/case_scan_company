import React/*, {useState}*/ from 'react';
import HeaderAuthUser from'../../HeaderJS/HeaderDesktop/HeaderAuthUser';
import SearchResPage from'./SearchResPage';
import Footer from'../../FooterJS/FooterDesktop/Footer';

function MainSearchResPage() {   
        return <> 
            <HeaderAuthUser />
            <SearchResPage />
            <Footer />
        </>
    };
    
    export default MainSearchResPage;