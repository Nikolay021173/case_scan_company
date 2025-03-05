import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 80px;
    margin-left: 14px;
    margin-bottom: 80px;
`;

function ScreenJobDoneMob() {   
        return <Div> 
          <img src={require("../../Images/Main-page/Mobile-version/advantage-logo-mob.png")} 
                alt="Заставка выполненная работа"></img>
        </Div>
    };
    
    export default ScreenJobDoneMob;