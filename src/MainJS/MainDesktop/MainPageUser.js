import React/*, {useState}*/ from 'react';
import HeaderAuthUser from'../../HeaderJS/HeaderDesktop/HeaderAuthUser';
import Footer from'../../FooterJS/FooterDesktop/Footer';
import MainAuthUser from'./MainAuthUser';


function MainPageUser() {   
        return <> 
            <HeaderAuthUser />
            <MainAuthUser temp={'inline-block'} />
            <Footer />
        </>
    };
    
    export default MainPageUser;