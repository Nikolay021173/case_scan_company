import MainAuth from '../AuthorizationJS/AuthorDesktop/MainAuth';
import MainAuthMob from '../AuthorizationJS/AuthorMob/MainAuthMob';
import MyRespComp from '../MyRespComp'; 



function Authorization() {
    return <div>
        <MyRespComp MobileComponent={MainAuthMob} DesktopComponent={MainAuth} />
    </div>
}

export default Authorization;