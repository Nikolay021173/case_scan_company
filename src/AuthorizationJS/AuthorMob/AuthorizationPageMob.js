import React/*, {useState}*/ from 'react';
import AuthorMob from'./AuthorMob';

function AuthorizationPageMob() {   
   
    return <div> 
       <AuthorMob pathPage1={`/account/1`} pathPage2={'*'} pathPage3={'*'} pathPage4={'*'} 
       pathPage5={'*'} pathPage6={'*'} /> 
    </div>
};

export default AuthorizationPageMob;