import React/*, {useState}*/ from 'react';
import Author from'./Author';

function AuthorizationPage() {   
   
    return <div> 
       <Author pathPage1={`/account/1`} pathPage2={'*'} pathPage3={'*'} pathPage4={'*'} 
       pathPage5={'*'} pathPage6={'*'}/> 
    </div>
};

export default AuthorizationPage;