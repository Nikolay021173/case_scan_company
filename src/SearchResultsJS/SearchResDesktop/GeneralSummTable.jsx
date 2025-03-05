import React, {useEffect, useRef, useState} from 'react';
import {combineDataByDate} from "../SearchResUtil/SearchResUtil";
import {ReactComponent as ArrowDarkRigth} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowDarkRigth.svg';
import {ReactComponent as ArrowLeft} from '../../Images/generalis-image/Deskt-and-mob-version/ArrowLeft.svg';
import styled from 'styled-components';

const ContainerData = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-left: -16px;
        margin-top: 27px;
`;

const SumOfData = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        width: 1260px;
        height: 158px;
        border-radius: 10px;
        border: 2px solid rgba(2, 148, 145, 1)
`;

const Arrow = styled.button`
    border: none;
    background-color: rgba(255, 255, 255, 1);
     &:hover {
                opacity: 0.3;
                cursor: pointer;
            }
`;

const SummaryData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left; 
    width: 133px;
    height: 158px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: rgba(2, 148, 145, 1);
    box-sizing: border-box;
    padding: 17px 27px 17px 28px;
`;

const SpanData = styled.span`
    font-family: Inter;
    font-weight: 500;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 2%;
    color: rgba(255, 255, 255, 1);
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
    color: rgba(0, 0, 0, 1);
  `;

  const SearchResults = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        margin-top: -55px; 
`; 

const H3 = styled.h3`
        font-family: Ferry;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 2%;
        color: rgba(0, 0, 0, 1);
`;

const Result = styled.span`
        font-family: Inter;
        font-weight: 400;
        font-size: 18px;
        line-height: 21.78px;
        letter-spacing: 2%;
        color: rgba(148, 148, 148, 1);
        margin-top: -10px;
`;



const GeneralSummTable = ({searchData, loading, error}) => {
    const [combinedData, setCombinedData] = useState([]);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const tableWrapperRef = useRef(null);
  
    useEffect(() => {
      if (tableWrapperRef.current) {
        tableWrapperRef.current.scrollLeft = 0;
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
      const scrollAmount = direction === 'left' ? -300 : 300;
      if (tableWrapperRef.current) {
        tableWrapperRef.current.scrollLeft += scrollAmount;
      }
    };
    return (
        <SearchResults>
        <H3>Общая сводка</H3>
                <Result>Найдено {totalDataCount} вариантов</Result>
        <ContainerData>
        <Arrow onClick={() => scrollTable('left')}><ArrowLeft /></Arrow>
        <SumOfData>
            <SummaryData>
                <SpanData>Период</SpanData>
                <SpanData style={{marginTop: '26px'}}>Всего</SpanData>
                <SpanData style={{marginTop: '26px'}}>Риски</SpanData>
            </SummaryData>
            { loading ? (
                 <SummaryData>
                 <Img src={require("../../Images/generalis-image/Desktop-version/download-icon.png")} 
                    alt="Загрузка запрошенных данных"></Img>
                 <P>Загружаем данные...</P>
               </SummaryData>
            ) : error ? (
                <SummaryData>
                <P style={{color: 'rgba(255, 89, 89, 1)'}}>Ошибка полученных данных</P>
              </SummaryData>
            ) : ( combinedData.map((item, index) => (
                  <React.Fragment key={index}>
            <SummaryData style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                {item.period}</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                {item.total}</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                {item.risks}</SpanData>
            </SummaryData>          
            </React.Fragment>
            ))
        )}
        </SumOfData>
    
        <Arrow onClick={() => scrollTable('right')}><ArrowDarkRigth /></Arrow>
    </ContainerData>
    </SearchResults>)
};

export default GeneralSummTable;