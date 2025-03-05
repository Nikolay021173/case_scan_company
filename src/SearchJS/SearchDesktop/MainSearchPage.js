import React/*, {useState}*/ from 'react';
import HeaderAuthUser from'../../HeaderJS/HeaderDesktop/HeaderAuthUser';
import Footer from'../../FooterJS/FooterDesktop/Footer';
import SearchPage from'./SearchPage';

function MainSearchPage() {   
        return <div> 
            <HeaderAuthUser />
            <SearchPage />
            <Footer />
        </div>
    };
    
    export default MainSearchPage;