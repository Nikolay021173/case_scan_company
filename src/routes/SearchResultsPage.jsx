import MainSearchResPage from '../SearchResultsJS/SearchResDesktop/MainSearchResPage';
import MainSearchResPageMob from '../SearchResultsJS/SearchResMob/MainSearchResPageMob';
import MyRespComp from '../MyRespComp';           

function SearchResultsPage() {
    return <div>  
      <MyRespComp MobileComponent={MainSearchResPageMob} DesktopComponent={MainSearchResPage} />
    </div>

}

export default SearchResultsPage;