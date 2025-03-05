import React/*, {useState}*/ from 'react';
import HeaderAuth from'../../HeaderJS/HeaderDesktop/HeaderAuth';
import Footer from'../../FooterJS/FooterDesktop/Footer';
import MainAuthUser from'./MainAuthUser';


function MainPage() {   
        return <div> 
            <HeaderAuth />
            <MainAuthUser temp={'none'}/>
            <Footer />
        </div>
    };
    
    export default MainPage;