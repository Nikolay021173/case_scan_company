import React/*, {useState}*/ from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 70px;
    margin-left: 51px;
    margin-bottom: 65px;
`;

function ScreenJobDone() {   
        return <Div> 
          <img src={require("../../Images/Main-page/Desktop-version/advantage-logo.png")} 
                alt="Заставка выполненная работа"></img>
        </Div>
    };
    
    export default ScreenJobDone;