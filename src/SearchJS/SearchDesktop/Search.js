import React, {useState, useEffect} from 'react';
import {ReactComponent as DocumentLogo} from '../../Images/Search-page/Desktop-version/DocumentLogo.svg';
import {ReactComponent as LogoFolders} from '../../Images/Search-page/Desktop-version/LogoFolders.svg';
import styled from 'styled-components';
import correctOfEnterInn from '../SearchUtil/correctOfEnterInn';
import {useSearch} from "../SearchUtil/useSearch";


const H2 = styled.h2`
    font-family: Ferry;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 3%;
    color: rgba(0, 0, 0, 1);
`;

const Div = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        margin-top: -38px;
        margin-bottom: 64px;
        margin-left: 60px; 
`;

const ContainerForSearchParam = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;  
        margin-top: 69px;
`;

const Annotation = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;  
`;

const ContainerFormSearch = styled.form`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        width: 872px;
        height: 575px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
       
`;

const ContainerFieldsInp = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;  
        margin-top: 21px;
        margin-left: 44px;
`;

const ContainerParamInp = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;  
        margin-left: -13px;
        margin-top: 20px;
`;

const ContainerImages = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: left; 
        align-items: flex-start;  
        margin-top: 165px;
`;

const ContainerVektorImages = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
        align-items: center;   
`;

const Span = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    line-height: 24.2px;
    letter-spacing: 2%;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 47px;
`;

const Label = styled.label`
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.78px;
    letter-spacing: 3%;
    width: 358px;

`;

const InpText = styled.input`
    width: 242px;
    height: 43px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(199, 199, 199, 1);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 3%;
    text-align: center;
    margin-top: 20px;
    &::placeholder{color: rgba(148, 148, 148, 0.5);}
`;


const InpChecked = styled.input`
    width: 20px;
    height: 20px;
    margin-top: 17px;
 `;



const Select = styled.select`
        width: 242px;
        height: 43px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(199, 199, 199, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 3%;
         margin-top: 20px;
         text-align: center;
`;

const InpData = styled.input`
    width: 242px;
        height: 43px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(199, 199, 199, 1);
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 16.94px;
        letter-spacing: 3%;
         margin-top: 20px;
         text-align: center;
`;

const Button = styled.button`
    width: 305px;
    height: 59px;
    border-radius: 5px;
    background-color: rgba(89, 112, 255, 0.5);
    border: none;
    font-family: Inter;
    font-weight: 500;
    font-size: 22px;
    line-height: 26.63px;
    letter-spacing: 3%;
    color: rgba(255, 255, 255, 1);
    margin-top: 145px;
    margin-left: 126px;
    cursor: pointer;
    &:hover {
                opacity: 0.3;
            }
`;

const Note = styled.span`
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.94px;
    letter-spacing: 3%;
    color: rgba(148, 148, 148, 1);
    margin-left: 126px;
    margin-top: 10px;
`;

const DivCheckBox = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left; 
`;

const Sup = styled.sup`
    font-family: Inter;
    font-weight: 400;
    font-size: 25px;
    line-height: 30.26px;
    letter-spacing: 3%;
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

function Search() {

/*****************************ввод ИНН Компании с проверкой ввода***************************** */
      const { innCompany,
        setInnCompany,
        tonality,
        setTonality,
        numbOfDoc,
        setNumbOfDoc,
        startingDate,
        setStartingDate,
        endDate,
        setEndDate,
        addRequesPoints,
        handleCheckboxChange,
        formValid,
        navigate,} = useSearch();

      const [error, setError] = useState('');

      const handleSearch = async (event) => {
        event.preventDefault();

        const {
          maxCompleteness,
          mainRole,
          riskFactorsOnly,
          includeMarketNews,
          includeAnnouncements,
          includeNewsSummaries
        } = addRequesPoints;

        let apiTonality;
    switch (tonality) {
      case 'Любая':
        apiTonality = 'any';
        break;
      case 'Позитивная':
        apiTonality = 'positive';
        break;
      case 'Негативная':
        apiTonality = 'negative';
        break;
      default:
        apiTonality = 'any';
    }
        

        if (formValid) {
            const searchParams = {
                issueDateInterval: {
                    startDate: `${startingDate}T00:00:00+03:00`,
                    endDate: `${endDate}T23:59:59+03:00`,
                  },
            searchContext: {
            targetSearchEntitiesContext: {
            targetSearchEntities: [{ type: "company", inn: innCompany, maxFullness: maxCompleteness }],
            onlyMainRole: mainRole,
            tonality: apiTonality,
            onlyWithRiskFactors: riskFactorsOnly,
          },
        },
        attributeFilters: {
          excludeTechNews: !includeMarketNews,
          excludeAnnouncements: !includeAnnouncements,
          excludeDigests: !includeNewsSummaries,
        },
        limit: Number(numbOfDoc),
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"],
      };
        navigate('/search/1', { state: { searchParams } });//'
    } else {
      console.log('Форма не валидна.');
      };
    }

    const [varColorStar, setVarColorStar] = useState('rgba(0, 0, 0, 1)');
    const [varColorInput, setVarColorInput] = useState('rgba(199, 199, 199, 1)');
    const [varBorderColorInput, setVarBorderColorInput] = useState('rgba(199, 199, 199, 1)');
    const [hiddenError, setHiddenError] = useState('none');
    
      useEffect(() => {
        const errorMessage = correctOfEnterInn(innCompany);
        setError(errorMessage);
      }, [innCompany]);
/****************************************************************** */ 
/********Ввод кол-ва запрашиваемых документов с проверкой ввода*** */
    
  
    const validateDocNumber = () => {
      const num = Number(numbOfDoc);
  
      if (!numbOfDoc) {
        setError("Обязательное поле");
      } else if (isNaN(num) || num < 1 || num > 1000) {
        setError("Введите корректные данные");
      } else {
        setError("");
      }
    };
  
    useEffect(() => {
      validateDocNumber();
    });

/****************************************************************** */  
/********Ввод дапазона поиска документов (начальной даты и конечной даты*** */
const [inputTypeStart, setInputTypeStart] = useState('text');
  const [inputTypeEnd, setInputTypeEnd] = useState('text');

  useEffect(() => {
    validateDateRange();
  });

  const validateDateRange = () => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (!startingDate || !endDate) {
      setError("Обязательное поле");
    } else if (new Date(startingDate) > new Date(endDate)) {
      setError("Введите корректные данные");
    } else if (new Date(startingDate) > currentDate || new Date(endDate) > currentDate) {
      setError("Дата не может быть позже текущей даты");
    } else {
      setError("");
    }   
}

const labels = {
    signOfMaxcompl: "Признак максимальной полноты",
    mentInBusinessContext: "Упоминания в бизнес-контексте",
    mainRoleInPublication: "Главная роль в публикации",
    publicWithRiskFactors: "Публикации только с риск-факторами",
    IncludeTechNewsOfMarkets: "Включать технические новости рынков",
    IncludeAnnouncAndCalendars: "Включать анонсы и календари",
    IncludeNewsSummaries: "Включать сводки новостей",
  };

        return  <Div> 
           <ContainerForSearchParam>
                <Annotation>
                    <H2>
                        Найдите необходимые<br/> данные в пару кликов.
                    </H2>
                    <Span>
                        Задайте параметры поиска.<br/> 
                        Чем больше заполните, тем точнее поиск
                    </Span>
                </Annotation>
                <ContainerFormSearch onSubmit={handleSearch} >
                    <ContainerFieldsInp>

                        <Label htmlFor='innCompany'>ИНН компании
                        <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <InpText type='text' id='innCompany' name='innCompany' value={innCompany} 
                        style={{borderColor  : varBorderColorInput, color  : varColorInput}}                      
                          onChange={(e) => { setInnCompany(e.target.value); }} 
                          
                          onBlur={() => {
                            setVarColorStar(error ? 'rgba(255, 89, 89, 1)' : 'rgba(0, 0, 0, 1)');
                            setVarColorInput(error ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)');
                            setVarBorderColorInput(error ? 'rgba(255, 89, 89, 1)' : 'rgba(199, 199, 199, 1)');
                            setError(correctOfEnterInn(innCompany));
                            setHiddenError(error ? 'inline' : 'none');
                          }
                        }
                          placeholder="10 цифр" />
                          {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}

                        <Label htmlFor='tonality' style={{marginTop: '30px'}}>Тональность</Label>
                        <Select  id="tonality" name="tonality" value={tonality}
                                  onChange={(e) => setTonality(e.target.value)} 
                                  style={{ textAlign: 'left', paddingLeft: '22px'}}>
                            <option>Позитивная</option>
                            <option>Негативная</option>
                            <option selected>Любая</option>
                        </Select>


                        <Label htmlFor="docNumber" style={{marginTop: '21px'}}>Количество документов в выдаче
                            <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <InpText type="number" id='docNumber' name='docNumber' value={numbOfDoc} 
                        onChange={(e) => {const newValue = e.target.value;
                            setNumbOfDoc(newValue);
                                          setError();  
                        }}
                        onBlur={() => validateDocNumber()}
                         placeholder="От 1 до 1000" />
                         {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}


                        <Label htmlFor="search" style={{marginTop: '30px'}}>Диапазон поиска
                            <Sup style={{color : varColorStar}}>*</Sup></Label>
                        <div id='search'>
                        <InpData style={{width: '176px', borderColor  : varBorderColorInput, 
                            color  : varColorInput}}
                         type={inputTypeStart}
                         onFocus={() => setInputTypeStart('date')}
                         onBlur={() => {
                           validateDateRange();
                           if (!startingDate) setInputTypeStart('text');
                         }}
                         id="startDate"
                         name="startDate"
                         placeholder="Дата начала"
                         value={startingDate}
                         onChange={(e) => setStartingDate(e.target.value)}  />
                        
                        <InpData style={{width: '176px', marginLeft: '20px', borderColor  : varBorderColorInput, 
                            color  : varColorInput}}
                            type={inputTypeEnd}
                            onFocus={() => setInputTypeEnd('date')}
                            onBlur={() => {
                              validateDateRange();
                              if (!endDate) setInputTypeEnd('text');
                            }}
                            id="endDate"
                            name="endDate"
                            placeholder="Дата конца"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        {error && <SpanError style={{display: hiddenError}}>{error}</SpanError>}

                    </ContainerFieldsInp>

                    <ContainerParamInp>
                        {Object.keys(addRequesPoints).map((key) => (
                        <DivCheckBox key={key} >
                        <InpChecked type="checkbox" id={`checkbox-${key}`} name={key} 
                        checked={addRequesPoints[key]} onChange={handleCheckboxChange} />
                <Label htmlFor={`checkbox-${key}`} style={{marginLeft: '17px', marginTop: '15px'}}>
                    <span></span>
                    <span> {labels[key]}</span>
                </Label>
        </DivCheckBox>
      ))}

                                <Button type="submit" disabled={!formValid}>Поиск</Button>
                                <Note><Sup>*</Sup>Обязательные к заполнению поля</Note>
                    </ContainerParamInp>
                </ContainerFormSearch>
           </ContainerForSearchParam>
           <ContainerImages>
                <ContainerVektorImages>
                        <DocumentLogo style={{marginTop: '5px'}} />
                        <LogoFolders style={{marginLeft: '166px'}}/>
                </ContainerVektorImages>
                <div style={{marginLeft: '80px', marginTop: '108px'}}><img 
                src={require("../../Images/Search-page/Desktop-version/logo-search.png")} 
                alt="Логотип поиск"></img></div>
           </ContainerImages>
        </Div>
    };
    
    export default Search;