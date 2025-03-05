import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import DownloadCounterMob from'./DownloadCounterMob';

function CounterMob() {

  const ContainerCounterMob = styled.div`
        display: block;
        box-sizing: border-box;
        width: 132px;
        height: 75px;
        border-radius: 5px;
        opacity: 0.3px;
        background-color: rgba(217, 217, 217, 1); 
        padding-left: 5px;
        padding-rigth: 10px;  
        margin-left: 31px;
        margin-top: 9px;  
  `;
   
  const P = styled.p`
       font-family: Inter;
        font-size: 8px;
        font-weight: 400;
        line-height: 9.68px;
        text-align: left;
        text-decoration-skip-ink: none;
        color: rgba(0, 0, 0, 1);
         text-underline-position: from-font;
 `;

  const NumCompanies = styled.span`
       font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 16.94px;
        text-align: left;
        text-underline-position: from-font;
        color: rgba(0, 0, 0, 1);
  `;
  const LimitCompanies = styled.span`
       font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 16.94px;
        text-align: left;
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
  method: 'GET', mode: 'cors',
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




        return <ContainerCounterMob>
            {isLoading ? (
            <DownloadCounterMob/ >
      ) : (
            <div>
            <P>Использовано компаний<br /> <NumCompanies>{usedCompanyCount}</NumCompanies></P>
            <P>Лимит по компаниям<br /> <LimitCompanies>{companyLimit}</LimitCompanies></P>
            </div>
      )};
        </ContainerCounterMob>
    };

    export default CounterMob;