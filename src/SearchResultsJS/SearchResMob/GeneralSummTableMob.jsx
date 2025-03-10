import React, {useEffect, useRef, useState} from 'react';
import {combineDataByDate} from "../SearchResUtil/SearchResUtil";
import {ReactComponent as ArrowDarkRigth} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowDarkRigth.svg';
import {ReactComponent as ArrowLeft} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowLeft.svg';
import styled from 'styled-components';


const SearchResults = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin-left: 14px;        
`; 

const H3 = styled.h3`
       font-family: Ferry;
        font-weight: 900;
        font-size: 28px;
        line-height: 33.6px;
        letter-spacing: 1%;
        color: rgba(0, 0, 0, 1);
`;

const Result = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 1%;
        margin-top: -16px;
        color: rgba(148, 148, 148, 1);
`;

const ContainerData = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: -30px;
        margin-top: 34px;
`;

const Arrow = styled.button`
    border: none;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 75px;
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const SumOfData = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        width: 298px;
        min-height: 140px;
        max-height: 140px;
        border-radius: 10px;
        overflow-y: hidden;
` ;                                                                         

const SummaryData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left; 
    align-items: center;
    background-color: rgba(2, 148, 145, 1);
    width: 298px;
    min-height: 75px;
   
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const SpanData = styled.span`
    font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 1%;
    color: rgba(0, 255, 255, 1);
`;

const Img = styled.img`
  
            @keyframes spin {
            from {
            transform: rotate(0deg);
            }
            to {
            transform: rotate(360deg);
            }
            }

        margin: 19px 75px;
        animation: spin 2s linear infinite;
  `;

  const P = styled.p`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 2%;
    color: rgba(255, 89, 89, 1);
  `;


const GeneralSummTable = ({searchData, loading, error}) => {
    const [combinedData, setCombinedData] = useState([]);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const tableWrapperRef = useRef(null);
  
    useEffect(() => {
      if (tableWrapperRef.current) {
        tableWrapperRef.current.scrollTop = 0;
      }
    }, [combinedData]);
  
    useEffect(() => {
      if (searchData && !error) {
        const totalDocuments = searchData.data.find(histogram => histogram.histogramType === 'totalDocuments');
        if (totalDocuments) {
          const total = totalDocuments.data.reduce((acc, item) => acc + item.value, 0);
          setTotalDataCount(total);
        }
  
        const combined = combineDataByDate(searchData.data);
        setCombinedData(combined);
      }
    }, [searchData, error]);
  
    const scrollTable = (direction) => {
      const scrollAmount = direction === 'top' ? -75 : 75;
      if (tableWrapperRef.current) {
        tableWrapperRef.current.scrollTop += scrollAmount;
      }
    };
    return (
<SearchResults>
<H3>Общая сводка</H3>
<Result>Найдено {totalDataCount} вариантов</Result>
<ContainerData>
    <Arrow onClick={() => scrollTable('top')}><ArrowLeft /></Arrow>
    <SumOfData ref={tableWrapperRef}>
        <SummaryData>
            <SpanData style={{marginLeft: '15px', alignSelf: 'center'}}>Период</SpanData>
            <SpanData style={{marginLeft: '49px', alignSelf: 'center'}}>Всего</SpanData>
            <SpanData style={{marginLeft: '20px', alignSelf: 'center'}}>Риски</SpanData>
        </SummaryData>
        { loading ? (
                 <SummaryData>
                 <Img src={require("../../Images/generalis-image/Mobile-version/download-icon-mob.png")} 
                    alt="Загрузка запрошенных данных"></Img>
               </SummaryData>
            ) : error ? (
                <SummaryData>
                                <P style={{color: 'rgba(255, 89, 89, 1)'}}>Ошибка полученных данных</P>
                              </SummaryData>
                            ) : ( combinedData.map((item, index) => (
    <React.Fragment key={index}>
        <SummaryData style={{backgroundColor: 'rgba(255, 255, 255, 1)', 
         boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
         borderTopLeftRadius: '0px', borderBottomLeftRadius: '10px',
         borderBottomRightRadius: '10px', borderTopRightRadius: '0px'}}>
            <SpanData style={{marginLeft: '9px', color: 'rgba(0, 0, 0, 1)', 
            alignSelf: 'center'}}>{item.period}</SpanData>
            <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'left', 
             marginLeft: '50px'}}>{item.total}</SpanData>
            <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'left', 
             marginLeft: '60px'}}>{item.risks}</SpanData>
        </SummaryData>
        </React.Fragment>
        ))
    )};
    </SumOfData>
    <Arrow onClick={() => scrollTable('bottom')}><ArrowDarkRigth /></Arrow>
</ContainerData>
</SearchResults>  
    )};

export default GeneralSummTable;    