import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import DownloadCounter from'./DownloadCounter';

function Counter() {

  const ContainerCounter = styled.div`
        display: block;
        box-sizing: border-box;
        width: 175px;
        height: 63px;
        border-radius: 5px;
        opacity: 0.3px;
        background-color: rgba(217, 217, 217, 1);
        padding-top: 14px;
        padding-bottom: 18px;
        padding-left: 10px;
        margin-top: 15px;
        margin-left: 127px;
        
  `;
   
  const P = styled.p`
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 12.1px;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
        margin-top: -5px; 
        margin-rigth: 4px;
  `;

  const NumCompanies = styled.span`
            font-family: Inter;
            font-size: 14px;
            font-weight: 700;
            line-height: 16.94px;            
            text-underline-position: from-font;
            color: rgba(0, 0, 0, 1);
  `;
  const LimitCompanies = styled.span`
            font-family: Inter;
            font-size: 14px;
            font-weight: 700;
            line-height: 16.94px;          
            text-underline-position: from-font;
            color: rgba(138, 197, 64, 1);
  `;

  const [usedCompanyCount, setUsedCompanyCount] = useState(0);

  const [companyLimit, setCompanyLimit] = useState(0);

  const [isLoading, setIsLoading] = useState(false);


useEffect(() => {

const fetchCompanyInfo = async () => {
setIsLoading(true);
const url = 'https://gateway.scan-interfax.ru/api/v1/account/info';
try {
const response = await fetch(url, {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
console.log(data);
setUsedCompanyCount(data.eventFiltersInfo.usedCompanyCount);
setCompanyLimit(data.eventFiltersInfo.companyLimit);
} catch (error) {
console.error("Ошибка при получении информации о компаниях:", error);
} finally {
setIsLoading(false);
}
};

fetchCompanyInfo();

const intervalId = setInterval(fetchCompanyInfo, 50000);


return () => clearInterval(intervalId);
}, []);





        return <ContainerCounter>
              {isLoading ? (
            <DownloadCounter/ >
      ) : (
            <div>
            <P>Использовано компаний <NumCompanies>{usedCompanyCount}</NumCompanies></P>
            <P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Лимит по компаниям <LimitCompanies>{companyLimit}</LimitCompanies></P>
            </div>
      )}
        </ContainerCounter>
    };
    
    export default Counter;