import MainPageUser from '../MainJS/MainDesktop/MainPageUser';
import MainPageUserMob from '../MainJS/MainMob/MainPageUserMob';
import MyRespComp from '../MyRespComp';           

function PageUser() {
    return <div>  
      <MyRespComp MobileComponent={MainPageUserMob} DesktopComponent={MainPageUser} />
    </div>

}

export default PageUser;