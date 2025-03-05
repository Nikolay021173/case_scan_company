import React/*, {useState}*/ from 'react';
import RequestData from'./RequestData';
import OurAdvantages from'./OurAdvantages';
import ScreenJobDone from'./ScreenJobDone';
import OurTariffs from'./OurTariffs';



function MainAuthUser({temp}) {   
        return <div> 
           <RequestData hiddenButton={temp}/> 
           <OurAdvantages />
           <ScreenJobDone />
           <OurTariffs pathInPage1={'*'} pathInPage2={'*'} pathInPage3={'*'} />           
        </div>
    };
    
    export default MainAuthUser;