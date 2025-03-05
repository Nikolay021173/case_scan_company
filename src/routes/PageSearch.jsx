import MainSearchPage from '../SearchJS/SearchDesktop/MainSearchPage';
import MainSearchPageMob from '../SearchJS/SearchMob/MainSearchPageMob';
import MyRespComp from '../MyRespComp';           

function PageSearch() {
    return <div>  
      <MyRespComp MobileComponent={MainSearchPageMob} DesktopComponent={MainSearchPage} />
    </div>

}

export default PageSearch;