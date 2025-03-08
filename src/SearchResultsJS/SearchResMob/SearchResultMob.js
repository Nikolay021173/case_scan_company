import React/*, {useEffect}*/ from 'react';
import {useLocation/*, useNavigate*/} from 'react-router-dom';

//import useInputAccount from '../../AuthorizationJS/AuthorUtil/useInputAccount';
import useSearchRes from '../SearchResUtil/useSearchRes';

import GeneralSummTableMob from './GeneralSummTableMob';
import ListOfDocsMob from './ListOfDocsMob';
import styled from 'styled-components';

const Div = styled.div`
    margin-left: 14px;
    margin-top: 20px;
    margin-bottom: 57px;
`;

const WaitingForResults = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left;    
`;

const H2 = styled.h2`
    margin: 0;
    font-family: Ferry;
    font-weight: 900;
    font-size: 28px;
    line-height: 33.6px;
    letter-spacing: 1%;
    color: rgba(0, 0, 0, 1);
`;

const Warning = styled.span`
    margin-top: 21px;
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 0%;
    color: rgba(0, 0, 0, 1);
`;

const ContainerImage = styled.div`
     margin-top: 21px; 
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

function SearchResultMob() { 
    const location = useLocation();
   /* const { loggedIn } = useInputAccount();
    const navigate = useNavigate();*/
    const searchParams = location.state?.searchParams;
  
    const { isLoading, histogramData, documentData, error } = useSearchRes(searchParams);
  
  /* useEffect(() => {
      if (loggedIn) {
        navigate('/account/1');
      }
    }, [loggedIn, navigate]);*/
  
    if (error || (!isLoading && (!documentData || !Array.isArray(documentData) || documentData.length === 0))) {
      return <SpanError>Ошибка полученных данных</SpanError>;
    }
    return <Div>  
         {isLoading && (
        <>
            <WaitingForResults>
                    <H2>
                        Ищем. Скоро<br/> будут результаты
                    </H2>
                    < Warning>
                        Поиск может занять некоторое время,<br/> просим сохранять терпение.
                    </ Warning>
                <ContainerImage>
                    <img src={require("../../Images/Search-output-page/Mobile-version/logo-result-search-mob.png")} 
                        alt="Логотип ожидание результатов поиска"></img>
                </ContainerImage>
           </WaitingForResults>  
           <GeneralSummTableMob searchData={histogramData} isLoading={isLoading} />
          </>
           )}
             {!isLoading && (
        <>
          <GeneralSummTableMob searchData={histogramData} isLoading={isLoading} />

          {documentData && Array.isArray(documentData) && documentData.length > 0 && (
            <ListOfDocsMob  documentsData={documentData} />
          )}
        </>
      )}
                         
    </Div>
};

export default SearchResultMob;






/*<SearchResults>          
<H3>Общая сводка</H3>
                           <Result>Найдено 4 221 вариантов</Result>
                           <ContainerData>
                               <Arrow><ArrowLeft /></Arrow>
                               <SumOfData>
                                   <SummaryData>
                                       <SpanData style={{marginLeft: '15px', alignSelf: 'center'}}>Период</SpanData>
                                       <SpanData style={{marginLeft: '49px', alignSelf: 'center'}}>Всего</SpanData>
                                       <SpanData style={{marginLeft: '20px', alignSelf: 'center'}}>Риски</SpanData>
                                   </SummaryData>
                                   <SummaryData style={{backgroundColor: 'rgba(255, 255, 255, 1)', 
                                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)',
                                    borderTopLeftRadius: '0px', borderBottomLeftRadius: '10px',
                                    borderBottomRightRadius: '10px', borderTopRightRadius: '0px'}}>
                                       <SpanData style={{marginLeft: '9px', color: 'rgba(0, 0, 0, 1)', 
                                       alignSelf: 'center'}}>10.09.2021</SpanData>
                                       <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'left', 
                                        marginLeft: '50px'}}>5</SpanData>
                                       <SpanData style={{color: 'rgba(0, 0, 0, 1)', alignSelf: 'left', 
                                        marginLeft: '60px'}}>0</SpanData>
                                   </SummaryData>
                               </SumOfData>
                               <Arrow><ArrowDarkRigth /></Arrow>
                           </ContainerData>
                      </SearchResults>  
                      <ListOfDocuments>
                <H3>Список<br/> документов</H3>
               
                    <CardOutputResult style={{marginTop: '10px'}}>
                     <LinkToSource><Dat>13.09.2021</Dat><A href={require('../..')}>
                     Комсомольская правда KP.RU</A></LinkToSource>
                        <AboutCompany>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</AboutCompany>
                        <TechNews>Технические новости</TechNews>
                            <ContainerImageCard>
                                <img src=
                                {require("../../Images/Search-output-page/Mobile-version/SkillFactory-image-mob.png")} 
                                    alt="Скиллфэктори"></img>
                            </ContainerImageCard>    
                                <P>
                                    SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. 
                                    С 2016 года обучение прошли 20 000+ человек из 40 стран<br/> с 4 континентов, 
                                    самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, 
                                    Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых 
                                    компаниях.
                                </P>
                                <P style={{marginTop: '3px'}}>
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
                    <CardOutputResult style={{marginTop: '20px'}}>
                    <LinkToSource><Dat>15.10.2021</Dat><A href={require('../..')}>
                    VC.RU</A></LinkToSource>
                        <AboutCompany>
                                    Работа в Data Science в 2022 году: тренды, навыки и обзор специализаций
                        </AboutCompany>
                        <TechNews>Технические новости</TechNews>
                        <ContainerImageCard>
                                <img src=
                                {require("../../Images/Search-output-page/Mobile-version/Data-Scientist-image-mob.png")} 
                                    alt="Data Science"></img>
                            </ContainerImageCard>    
                                <P>
                                    Кто такой Data Scientist и чем он занимается?<br/>
                                    Data Scientist — это специалист, который работает с большими массивами 
                                    данных,<br/> чтобы с их помощью решить задачи бизнеса. Простой пример использования 
                                    больших<br/> данных и искусственного интеллекта — умные ленты в социальных сетях. 
                                    На основе ваших просмотров и лайков алгоритм выдает рекомендации с контентом, 
                                    который может<br/> быть вам интересен. Эту модель создал и<br/> обучил дата-сайентист,
                                    и скорее всего, не<br/> один.
                                </P>
                                <P style={{marginTop: '2px'}}>
                                    В небольших компаниях и стартапах дата-сайентист делает все: собирает и 
                                    очищает данные, создает математическую модель для<br/> их анализа, тестирует ее и 
                                    презентует готовое решение бизнесу.
                                </P>
                                <ContainerButtAndSpan>
                                <Button>Читать в источнике</Button>
                                <Span>3 233 слова</Span>                            
                        </ContainerButtAndSpan>
                    </CardOutputResult>
              
                <ShowInSource>Показать больше</ShowInSource>
           </ListOfDocuments>*/      