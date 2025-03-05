import React/*, {useState}*/ from 'react';
import RequestDataMob from'./RequestDataMob';
import OurAdvantagesMob from './OurAdvantagesMob';
import ScreenJobDoneMob from'./ScreenJobDoneMob';
import OurTariffsMob from'./OurTariffsMob';


function MainAuthUserMob() {   
        return <div> 
           <RequestDataMob />
           <OurAdvantagesMob /> 
           <ScreenJobDoneMob />
           <OurTariffsMob pathInPage1={'*'} pathInPage2={'*'} pathInPage3={'*'} />
        </div>
    };
    
    export default MainAuthUserMob;