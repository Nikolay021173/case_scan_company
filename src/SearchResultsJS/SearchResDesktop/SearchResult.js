import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import useInputAccount from '../../AuthorizationJS/AuthorUtil/useInputAccount';
import useSearchRes from '../SearchResUtil/useSearchRes';

import GeneralSummTable from './GeneralSummTable';
import ListOfDocs from './ListOfDocs';
import styled from 'styled-components';

const Div = styled.div`
    margin-left: 60px;
    margin-top: 25px;
    margin-bottom: 109px;
`;

const WaitingForResults = styled.div`
        width:  1346px;
        display: flex;
        flex-direction: row;
        justify-content: left;  
`;

const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4%;
    color: rgba(0, 0, 0, 1);
`;

const Warning = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 1);
`;

const Waiting = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;  
`;

const ContainerImage = styled.div`
        margin-left: 240px;
`;


const SpanError = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 1%;
    color: rgba(255, 89, 89, 1);
    margin-top: 3px;
`;


function SearchResult() {   

    const location = useLocation();
  const { loggedIn } = useInputAccount();
  const navigate = useNavigate();
  const searchParams = location.state?.searchParams;

  const { isLoading, histogramData, documentData, error } = useSearchRes(searchParams);

 useEffect(() => {
    if (loggedIn) {
      navigate('/account/1');
    }
  }, [loggedIn, navigate]);


  if (error || (!isLoading && (!documentData || !Array.isArray(documentData) || documentData.length === 0))) {
    return <SpanError>Ошибка полученных данных</SpanError>;
  }

        return <Div> 
             {isLoading && (
        <>
           <WaitingForResults>
                <Waiting>
                    <H2>
                        Ищем. Скоро<br/> будут результаты
                    </H2>
                    < Warning>
                        Поиск может занять некоторое время,<br/> просим сохранять терпение.
                    </ Warning>
                </Waiting>
                <ContainerImage>
                    <img src={require("../../Images/Search-output-page/Desktop-version/logo-result-search.png")} 
                        alt="Логотип ожидание результатов поиска"></img>
                </ContainerImage>
           </WaitingForResults>
          <GeneralSummTable searchData={histogramData} isLoading={isLoading} />
          </>
           )}
             {!isLoading && (
        <>
          <GeneralSummTable searchData={histogramData} isLoading={isLoading} />

          {documentData && Array.isArray(documentData) && documentData.length > 0 && (
            <ListOfDocs  documentsData={documentData} />
          )}
        </>
      )}
          
        </Div>
    };
    
    export default SearchResult;




  /*  <SearchResults>
    <H3>Общая сводка</H3>
    <Result>Найдено 4 221 вариантов</Result>
    <ContainerData>
        <Arrow><ArrowLeft /></Arrow>
        <SumOfData>
            <SummaryData>
                <SpanData>Период</SpanData>
                <SpanData style={{marginTop: '26px'}}>Всего</SpanData>
                <SpanData style={{marginTop: '26px'}}>Риски</SpanData>
            </SummaryData>
            <SummaryData style={{backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                10.09.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    5</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                13.09.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    2</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                17.09.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    6</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                20.09.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    8</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    2</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                12.10.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    1</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                15.10.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    10</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    2</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                16.10.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    4</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
            <SummaryData style={{color: 'rgba(0, 0, 0, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRight: '2px solid  rgba(148, 148, 148, 1)',
                height: '124px', alignSelf: 'center'}}>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '-15px'}}>
                17.10.2021</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    3</SpanData>
                <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'center', marginTop: '26px'}}>
                    0</SpanData>
            </SummaryData>
        </SumOfData>
        <Arrow><ArrowDarkRigth /></Arrow>
    </ContainerData>
</SearchResults>
 <ListOfDocuments>
                <H3>Список документов</H3>
                <Documents>
                    <CardOutputResult>
                     <LinkToSource><Dat>13.09.2021</Dat><A href={require('../..')}>
                     Комсомольская правда KP.RU</A></LinkToSource>
                        <AboutCompany>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</AboutCompany>
                        <TechNews>Технические новости</TechNews>
                            <ContainerImageCard>
                                <img src=
                                {require("../../Images/Search-output-page/Desktop-version/SkillFactory-image.png")} 
                                    alt="Скиллфэктори"></img>
                            </ContainerImageCard>    
                                <P>
                                    SkillFactory — школа для всех, кто хочет изменить свою карьеру и<br/> жизнь. 
                                    С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, 
                                    самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, 
                                    Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых 
                                    компаниях.
                                </P>
                                <P style={{marginTop: '2px'}}>
                                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир 
                                    на трудоустройство. 80% обучения — выполнение<br/> упражнений и реальных проектов. 
                                    Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. 
                                    А карьерный центр помогает составить резюме, подготовиться к собеседованиям и 
                                    познакомиться с IT-рекрутерами.
                               </P>
                                <ContainerButtAndSpan>
                                <Button>Читать в источнике</Button>
                                <Span>2 543 слова</Span>                            
                        </ContainerButtAndSpan>
                    </CardOutputResult>
                    <CardOutputResult style={{marginLeft: '38px'}}>
                    <LinkToSource><Dat>15.10.2021</Dat><A href={require('../..')}>
                    VC.RU</A></LinkToSource>
                        <AboutCompany>
                                    Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций
                        </AboutCompany>
                        <TechNews>Технические новости</TechNews>
                        <ContainerImageCard>
                                <img src=
                                {require("../../Images/Search-output-page/Desktop-version/Data-Scientist-image.png")} 
                                    alt="Data Science"></img>
                            </ContainerImageCard>    
                                <P>
                                    Кто такой Data Scientist и чем он занимается?<br/>
                                    Data Scientist — это специалист, который работает с большими массивами 
                                    данных, чтобы с их помощью решить задачи бизнеса. Простой пример использования 
                                    больших данных и искусственного интеллекта — умные ленты в социальных сетях. 
                                    На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, 
                                    который может быть вам интересен. Эту модель создал и обучил<br/> дата-сайентист,
                                    и скорее всего, не один.
                                </P>
                                <P style={{marginTop: '2px'}}>
                                    В небольших компаниях и стартапах дата-сайентист делает все: собирает и 
                                    очищает данные, создает математическую модель для их анализа, тестирует ее и 
                                    презентует готовое решение бизнесу.
                                </P>
                                <ContainerButtAndSpan>
                                <Button>Читать в источнике</Button>
                                <Span>2 543 слова</Span>                            
                        </ContainerButtAndSpan>
                    </CardOutputResult>
                </Documents>
                <ShowInSource>Показать больше</ShowInSource>
           </ListOfDocuments>
*/