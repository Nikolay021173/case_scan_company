//import MainPage from'../MainJS/MainDesktop/MainPage';
//import MainAuthUser from'./MainAuthUser';
//import HeaderAuth from '../HeaderJS/HeaderDesktop/HeaderAuth';
//import Footer from '../FooterJS/FooterDesktop/Footer';
//import MainAuthUser from '../MainJS/MainDesktop/MainAuthUser';
//import MainPage from'../MainJS/MainDesktop/MainPage' <HeaderAuth /> 
           // <MainAuthUser />    
           // <Footer />;

import MainPage from '../MainJS/MainDesktop/MainPage';
import MainPageMob from '../MainJS/MainMob/MainPageMob';
import MyRespComp from '../MyRespComp';           

function Root() {
    return <div>  
      <MyRespComp MobileComponent={MainPageMob} DesktopComponent={MainPage} />
    </div>

}

export default Root;